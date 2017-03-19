import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  NavigatorIOS,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';


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
      component: CreateScreen,
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
          component: MainScreen,
        }}
      />
    );
  }
}

class MainScreen extends Component {
  render() {
    return <Text style={styles.text}>Will change to ListView</Text>;
  }
}

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={{backgroundColor:'white'}}>
        <Text>text</Text>
        <TextInput 
          style={[styles.input, {height: 500}]} 
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          multiline = {true} 
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('grfiti', function() { return grfiti });


