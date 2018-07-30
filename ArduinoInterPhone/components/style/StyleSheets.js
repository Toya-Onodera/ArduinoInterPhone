import { StyleSheet, Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');

// すべてのスタイルをまとめておく
module.exports = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3f3f3'
  },
  headerTitle: {
    color: '#ffffff',
    fontWeight: 'normal'
  },

  /* Header Style */
  startHeader: {
    backgroundColor: '#795548'
  },
  settingsHeader: {
    backgroundColor: '#607d8b'
  },
  calledHerder: {
    backgroundColor: '#8ac542'
  },
  confirmOutsideHerder: {
    backgroundColor: '#2196f3'
  },
  confirmOutsideHerder: {
    backgroundColor: '#f44336'
  },

  /* Start Page Style */
  connectionLabel: {
    height: 40,
    margin: 16
  },
  connectionLabelTrue: {
    backgroundColor: '#2196f3',
  },
  connectionLabelFalse: {
    backgroundColor: '#d32f2f',
  },
  connectionMessage: {
    margin: 8,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});