import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
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
    color: '#444',
    paddingBottom: 10,
    fontSize: 14
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
    width: 90,
    height: 60
  }
});

const Row = (props) => {
  let userText; 
  if(props.userName !== null) {
    userText = (<Text style={styles.h2}>{props.userName}</Text>);
  }  else {
     userText = (<Text style={styles.h2}>{props.id}</Text>);
  }
  return (
    <View style={styles.tableRow}>
      <View style={styles.leftTableEntry}>
        <Image
          source={imagePaths[parseInt(Math.random() * 6)]}
          style={styles.tableEntryImage}
        />
      </View>
      <View style={styles.rightTableEntry}>
        {userText}
        <Text style={styles.text}>{props.content}</Text>
      </View>
    </View>
    );
}

var imagePaths = [
  require("./Images/img1.png"),
  require("./Images/img2.png"),
  require("./Images/img3.png"),
  require("./Images/img4.png"),
  require("./Images/img5.png"),
  require("./Images/img6.png"),
  require("./Images/img7.png"),
];

export default Row;