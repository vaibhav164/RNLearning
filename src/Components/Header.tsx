import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { ScreenHeight } from '../Utils/Constant'

type HeaderProps ={
    title:string,
    BackIcon?:boolean
}
export default function Header({title, BackIcon}:HeaderProps) {

  return (
    <View style={styles.container}>
        
        <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:ScreenHeight*0.07,
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingHorizontal:'2%',
        
    }
})