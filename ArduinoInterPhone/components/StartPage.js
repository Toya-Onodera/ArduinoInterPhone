import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Styles from './style/StyleSheets'

// My parts
import ConnectionView from './parts/ConnectionView'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      isConnectedStatus: false
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <ConnectionView isConnectedStatus={this.state.isConnectedStatus}/>
      </View>
    );
  }
}