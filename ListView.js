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


  // _fetchData() {
  //   // var myRequest = new Request('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=547761&long=-1370443',{
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Accept': 'application/json',
  //   //     'Content-Type': 'application/json',
  //   //   }
  //   // });

  //   fetch('http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=547761&long=-1370443',{
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseJson.content),
  //         loaded: true,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .done();

  // //   var request = new XMLHttpRequest();
    
  // //   request.onreadystatechange = (e) => {
  // //   if (request.readyState !== 4) {
  // //     return;
  // //   }

  // //   if (request.status === 200) {
  // //     console.log('success', request.responseText);
  // //   } else {
  // //     console.warn(request.status);
  // //   }
  // // };

  // // request.open('GET', 'http://ec2-54-214-229-156.us-west-2.compute.amazonaws.com/content?lat=547761&long=-1370443');
  // // request.setRequestHeader({
  // //     'Accept': 'application/json',
  // //     'Content-Type': 'application/json'
  // // });
  // // request.send();


  // }

  // componentWillMount() {
  //   this._fetchData();
  // }


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