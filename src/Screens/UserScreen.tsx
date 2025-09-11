import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
type userScreenType={
    onBack:()=>void
}
const UserScreen = ({onBack}:userScreenType) => {
    
  return (
    <View style={styles.box}>
    <Header onBack={onBack}/>
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
    </View>
  )
}

export default UserScreen

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    box:{
        flex:1,
    }
})