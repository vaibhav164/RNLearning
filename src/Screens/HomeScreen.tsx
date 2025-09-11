import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

type HomeScreenType ={
    move:()=>void
}
const HomeScreen = ({move}:HomeScreenType) => {
  return (
    <View style={styles.container}>
        <Header onBack={move}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})