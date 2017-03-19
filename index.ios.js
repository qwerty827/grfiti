import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';


'use strict'

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class MainScreen extends Component {
  render() {
    return <Text style={styles.text}>grfiti (Again)</Text>;
  }
}

class grfiti extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Feed',
          rightButtonTitle: '+', 
          component: MainScreen,
        }}/>
    );
  }
}


AppRegistry.registerComponent('grfiti', function() { return grfiti });


