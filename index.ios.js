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
  createNewSegueClick() {
    this.refs.nav.push({
      component: CreateNewScreen,
      title: "Create New",
    })
  }

  _fetchData() {
    // var myRequest = new Request('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=547761&long=-1370443',{
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // });

    fetch('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=547761&long=-1370443',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        // this.state = {
        //   dataSource: responseJson.content,
        // };

        AlertIOS.alert(
                "GET Response",
                "Search Query -> " + responseData.search
            )
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
    }

  // componentWillMount() {
  //   this._fetchData();
  // }

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


