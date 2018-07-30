import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Styles from '../style/StyleSheets'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const isConnectedStatus = this.props.isConnectedStatus
	const connectionLabelStyle = [Styles.connectionLabel, ((isConnectedStatus) ? Styles.connectionLabelTrue : Styles.connectionLabelFalse)]
	const connectionMessage = (isConnectedStatus) ? '接続 (Connection)' : '未接続 (Disconnected...)'

	return (
		<View style={connectionLabelStyle}>
			<Text style={Styles.connectionMessage}>{ connectionMessage }</Text>
		</View>
	)
  }
}