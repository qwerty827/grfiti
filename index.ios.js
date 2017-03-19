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

    this.state = {
      saveText: '',
    };

  }

  updateSaveText(text) {

    this.setState({saveText: text});

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

    let content = {
      type: "text",
      content: this.state.saveText,
      location: {
        lat: 1337,
        long: 1235
      }
    }

    fetch('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content)
      })
      .then(response => response.json())
      .then(responseJson => console.log("GET Response", responseData))
      .catch(error => console.log(error))
      .done();

    
  }

  render() {
    return (
      <NavigatorIOS
        ref = 'nav'
        style = {styles.container}
        initialRoute = {{
          title: 'Feed',
          rightButtonTitle: '+', //image for plus
          onRightButtonPress: () => this.createNewSegueClick(),
          component: ListViewScreen,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('grfiti', function() { return grfiti });


