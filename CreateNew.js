import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  NavigatorIOS,
  TextInput,
  Text,
  Image,
  View
} from 'react-native';

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
          style={{height: 500}} 
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          multiline = {true} 
        />
      </View>
    );
  }
}

module.exports = CreateScreen;