import React, { Component } from 'react';

import {
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
    Router,
    Scene,
    Stack,
    Actions,
    ActionConst
} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';

// My Components
import Start from './components/StartPage';
import ConfirmOutside from './components/ConfirmOutsidePage';
import ConnectionStatus from './components/ConnectionStatusPage';
import Called from './components/CalledPage';
import Settings from './components/SettingsPage';

// StyleSheet
import Styles from './components/style/StyleSheets'

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <Router>
        {/*
          画面遷移の流れ
          Start ──┬── ConfirmOutside
                  │
                  ├── ConnectionStatus
                  │
                  ├── Called
                  │
                  └── Settings
        */}

        <Stack key="root">
          <Scene 
            key="Start"
            component={Start}
            title="ArduinoInterPhone"
            navigationBarStyle={Styles.startHeader}
            titleStyle={Styles.headerTitle}
          />

          <Scene 
            key="ConfirmOutside"
            component={Start}
            title="Confirm of outside"
            navigationBarStyle={Styles.confirmOutsideHeader}
            titleStyle={Styles.headerTitle}
          />

          <Scene 
            key="ConnectionStatus"
            component={ConnectionStatus}
            title="Connection status"
            navigationBarStyle={Styles.connectionStatusHeader}
            titleStyle={Styles.headerTitle}
          />

          <Scene 
            key="Called"
            component={Called}
            title="You are called"
            navigationBarStyle={Styles.calledHeader}
            titleStyle={Styles.headerTitle}
          />

          <Scene 
            key="Settings"
            component={Settings}
            title="Settings"
            navigationBarStyle={Styles.settingsHeader}
            titleStyle={Styles.headerTitle}
          />
        </Stack>
      </Router>
    )
  }
}


/*
            renderBackButton={() => 
              <TouchableOpacity
                style={Styles.headerLeftButton}
                onPress={Actions.pop}
              >
                <Text style={Styles.headerButtonText}>キャンセル</Text>
              </TouchableOpacity>
            }*/