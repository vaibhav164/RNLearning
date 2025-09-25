import { Alert } from "react-native";

export const ProductList =async()=>{
    try{
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        return result
    }catch(error){
        Alert.alert(error)
        return null
    }
}