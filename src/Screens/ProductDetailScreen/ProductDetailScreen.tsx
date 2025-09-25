import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'

export default function ProductDetailScreen({route}) {
    const [product, setProduct] = useState(route.params.product)
    console.log("Params_______",product)
  return (
    <View style={styles.container}>
        <Header title={"ProductDetailScreen"}/>
        <View style={styles.cardBox}>
            <Image style={{resizeMode:'cover', height:400, width:400}} source={{uri:product.image}}/>
            <View style={styles.infoBox}>

            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.category}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:15,
        fontWeight:'bold'
    },
    container:{
        flex:1,
        alignItems:'center'
    },
    cardBox:{
        
    }
})