import { StyleSheet, Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');

// すべてのスタイルをまとめておく
module.exports = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  headerTitle: {
    color: '#ffffff',
    fontWeight: 'normal'
  },
  startHeader: {
    backgroundColor: '#795548',
  },
  settingsHeader: {
    
  }
});