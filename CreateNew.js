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
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    bottom: 0,
    paddingTop: 100,
    paddingLeft: 20
  },
  formText: {
    height: 60, 
    color: "#666",
    fontSize: 16
  },
  userName: {
    height: 50,
    width: window.width, 
    marginLeft: 0,
    color: '#222',
    fontWeight: '600'
  }
});

class CreateScreen extends Component {

  updateText(text, isUserName) {
      this.props.updateSaveText(text, isUserName);
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#8E8E8E'}}>
          <TextInput 
            placeholder="User Name"
            autofocus={true}
            style={styles.userName} 
            value={this.props.userName}
            onChangeText={(text) => this.updateText(text, true)}
          />
        </View>
        <TextInput 
          placeholder="What's happening?"
          style={styles.formText} 
          value={this.props.messageText}
          onChangeText={(text) => this.updateText(text, false)}
          multiline = {true}
          numberOfLines = {8} 
        />
      </View>
    );
  }
}

module.exports = CreateScreen;