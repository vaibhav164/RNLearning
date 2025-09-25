import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import ProductDetailScreen from '../Screens/ProductDetailScreen/ProductDetailScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

export  const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false 
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'HomeScreen',
      },
    },
    Details:{
      screen:CartScreen,
      options:{
        title:'CartScreen'
      }
    },
    ProductDetails:{
      screen:ProductDetailScreen,
      options:{
        title:'ProductDetailScreen'
      }
    }
  },
});