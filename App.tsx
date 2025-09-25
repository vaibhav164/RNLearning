/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { RootStack } from './src/Navigation/Navigation';

function App() {
const Root = createStaticNavigation(RootStack)
  return (<Root />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
