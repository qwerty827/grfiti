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

const Row = (props) => (
  <View style={styles.tableRow}>
        <View style={styles.leftTableEntry}>
          <Image
            source={ require('./Images/logo.png') }
            style={styles.tableEntryImage}
          />
        </View>
        <View style={styles.rightTableEntry}>
          <Text style={styles.h2}>{props.content}</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
  </View>
);

export default Row;