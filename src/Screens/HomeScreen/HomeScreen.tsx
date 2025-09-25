import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import { ProductList } from '../../Apis/ProducList'
import ProductCard from '../../Components/ProductCard'

export default function HomeScreen() {
    const [list, setList] = useState([])
    useEffect(()=>{
        ProductList().then(data=>{
            setList(data)
        });

    },[])
    const renderList =({item})=>{
        return(
            <ProductCard item={item}/>
        )
    }
  return (
        <SafeAreaView style={{flex:1}}>
            <Header title={"HomeScreen"}/>
            <View style={{flex:1, backgroundColor:'#fff'}}>

            {list.length &&(
                <FlatList 
                data={list}
                keyExtractor={item=>item.id}
                renderItem={renderList}
                showsVerticalScrollIndicator={false}
                />
            )}
            </View>
        </SafeAreaView>
  )
}