import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  NavigatorIOS,
  Text,
  Image,
  View
} from 'react-native';


var ListViewScreen = require('./ListView');
var CreateNewScreen = require('./CreateNew');

var rightButtonHandler = new CreateNewScreen();

'use strict'

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
    fontSize: 16,
  },
  container: {
    flex: 1,
  }
});

class grfiti extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => true });

    this.state = {
      saveText: '',
      lat: 0,
      long: 0,
      rowData: [{ content: "lol", id: 1 }, { content: "lol2", id: 2 }]
    };
  }

  updateSaveText(text) {
    this.setState({ saveText: text });
  }

  createNewSegueClick() {
    this.refs.nav.push({
      component: CreateNewScreen,
      title: "Create New",
      rightButtonTitle: "Save",
      onRightButtonPress: () => this.onRightButtonPress(),
      passProps: {
        updateSaveText: this.updateSaveText.bind(this),
        saveText: this.saveText
      },
    })
  }

  onRightButtonPress() {
    console.log("SAVE PRESSED!", this.state.saveText);

    // console.log(this.state);

    let content = {
      type: "text",
      content: this.state.saveText,
      location: {
        lat: this.state.lat,
        long: this.state.long,
      }
    }

    fetch('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content)
    })
      .then(response => response.json())
      .then(responseJson => {
        this._fetchData(this.state.lat, this.state.long);
        console.log("GET Response", responseData)

      })
      .catch(error => console.log(error))
      .done();

  }

  _fetchData(lat, long) {

    var requestUrl = `http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=${lat}&long=${long}`;

    fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          rowData: responseJson
        });

        this.refs.nav.replaceAtIndex(
          {
            title: 'Feed',
            rightButtonTitle: '+', //image for plus
            onRightButtonPress: () => this.createNewSegueClick(),
            component: ListViewScreen,
            passProps: {
              rowData: responseJson
            }
          }, 0);

        console.log("AFTER FETCH", this.state.rowData);

      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {

      let lat = Math.floor(position.coords.latitude * 11119.4926645);
      let long = Math.floor(position.coords.longitude * 11119.4926645);

      console.log(lat, long);

      this.setState({
        lat: lat,
        long: long
      });

    },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });

    this.watchID = navigator.geolocation.watchPosition((position) => {

      let lat = Math.floor(position.coords.latitude * 11119.4926645);
      let long = Math.floor(position.coords.longitude * 11119.4926645);

      console.warn(lat, long);

      this.setState({
        lat: lat,
        long: long
      });

      this._fetchData(lat, long);


    },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          title: 'Feed',
          rightButtonTitle: '+', //image for plus
          onRightButtonPress: () => this.createNewSegueClick(),
          component: ListViewScreen,
          passProps: {
            rowData: this.state.rowData
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('grfiti', function () { return grfiti });


