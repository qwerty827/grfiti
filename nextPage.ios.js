import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

var register = React.createClass({
	render: function() {
		return (
			<View style = {styles.container}>
				<Text>{this.props.element}</Text>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
module.exports = nextPage;