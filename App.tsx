import React, { lazy, useState } from 'react';
import { StyleSheet } from 'react-native';
const HomeScreen = lazy(()=>import('./src/Screens/HomeScreen'))
const UserScreen = lazy(()=>import('./src/Screens/UserScreen'))
function App() {
  const [state, setState] = useState(false);

  return (state?<HomeScreen move={()=>setState(!state)}/>:<UserScreen onBack={()=>setState(!state)}/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
