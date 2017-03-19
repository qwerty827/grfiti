import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

'use strict';

export class NewPage {
	render() {
		return(
			<View style={{flex:1}}>
				<Text>We are on a new page.</Text>
			</View>
		);
	}
}