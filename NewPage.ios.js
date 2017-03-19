import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

'use strict';

var nextPage = require('./nextPage.ios');

var newPage = React.createClass({
	goDeeper: function() {
		this.props.navigator.push({
			title: 'nextPage',
			component: nextPage,
			navigationBarHidden: true,
			passProps: {element: 'reached next page'}
		});
	},
	render:function() {
		return (
			<View style = {styles.container}>
				<TouchableHighlight
					onPress={() => this.goDeeper()}>
					<Text>Create new feed</Text>
				</TouchableHighlight>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	}
});
module.exports = nextPage;