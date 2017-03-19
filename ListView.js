import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  NavigatorIOS,
  Text,
  Image,
  View,
} from 'react-native';

import TableRow from './TableRow';

var styles = StyleSheet.create({
  text: {
    color: '#81CFE0',
    fontSize: 15,
  },
  container: {
    flex: 1,
  },
  tableRow: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10
  }, 
  h2: {
    fontWeight: '800',
    color: '#333',
    paddingBottom: 10,
    fontSize: 17
  },
  rightTableEntry: {
    flex: 3
  },
  leftTableEntry: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableEntryImage: {
    width: 80,
    height: 80
  }
});

class ListViewScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row3', 'row 1', 'row 2', 'row3']),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <TableRow {...data} />}
      />
    );
  }
}

module.exports = ListViewScreen;