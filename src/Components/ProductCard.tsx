import { Text, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScreenHeight } from '../Utils/Constant'
export default function ProductCard({item}) {
    const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={()=>{navigation.navigate('ProductDetails',{product:item})}}>
        <Image style={{height:'60%', width:'80%', resizeMode:'cover'}} source={{
          uri: item.image,
        }} />
      <Text>${item.price}</Text>
      <Text>{item.category}</Text>
      <Text>{item.title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'60%',
        height:ScreenHeight*0.25,

    }
})