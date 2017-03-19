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

class grfiti extends Component {
  createNewSegueClick() {
    this.refs.nav.push({
      component: CreateNewScreen,
      title: "Create New",
    })

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


