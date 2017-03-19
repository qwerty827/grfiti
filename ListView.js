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
import SearchHeader from './SearchHeader';

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
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

class ListViewScreen extends Component {
  constructor(props) {
    super(props);

    console.log("PROPOS", props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.rowData),
    };
  }

  componentWillReceiveProps(nextProps) {

    console.log("PROPSSS");

    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.rowData)
    });
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <TableRow {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <SearchHeader />}
      />
    );
  }
}

module.exports = ListViewScreen;