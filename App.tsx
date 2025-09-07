import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Animations from './src/Screens/Animations';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (<View style={styles.container}>
    <Animations />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
