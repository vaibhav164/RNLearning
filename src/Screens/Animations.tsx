import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

function Animations() {
    const fadeAnimationRef = useRef((new Animated.Value(0))).current;
    useEffect(() => {
        Animated.timing(fadeAnimationRef, {
            toValue: 10000000,
            useNativeDriver: true,
            duration: 30000
        }).start();
    }, [fadeAnimationRef])

    // const translateX = fadeAnimationRef.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [0, 400],
    // });
    return (
        <Animated.View style={{
            ...styles.container, transform: [
                // { translateX },
                { rotate: fadeAnimationRef.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }
            ]
        }}>
            <Text>{"My First Animation Component"}</Text>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'skyblue'
    }
})
export default Animations