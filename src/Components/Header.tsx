import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
type HeaderProps ={
    onBack:()=>void
}
const Header = ({onBack}:HeaderProps) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title} onPress={onBack}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    box:{
        width:'100%',
        flex:0.07,
        justifyContent:'center',
        marginTop:'10%',
        paddingHorizontal:'5%'
    },
    title:{
        fontWeight:'bold',
         textDecorationLine:'underline'
    }
})