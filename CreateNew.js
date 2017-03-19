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
    paddingTop: 80,
    paddingLeft: 20
  },
  formText: {
    flex: 60, 
    color: "#444",
    fontSize: 16
  }
});

class CreateScreen extends Component {

  updateText(text) {
      this.props.updateSaveText(text);
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput 
          placeholder="What's happening?"
          autofocus={true}
          style={styles.formText} 
          value={this.props.saveText}
          onChangeText={(text) => this.updateText(text)}
          multiline = {true}
          numberOfLines = {8} 
        />
      </View>
    );
  }
}

module.exports = CreateScreen;