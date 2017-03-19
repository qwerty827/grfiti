import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
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
    margin: 80,
    fontSize: 16,
  },
  container: {
    flex: 1,
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
          component: ListViewScreen,
        }}/>
    );
  }
}

class ListViewScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
      />
    );
  }
}




AppRegistry.registerComponent('grfiti', function() { return grfiti });


