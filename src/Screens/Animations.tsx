import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

function Animations() {
    const fadeAnimationRef = useRef((new Animated.Value(0))).current;

    useEffect(() => {
        Animated.timing(fadeAnimationRef, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, [fadeAnimationRef])
    return (
        <Animated.View style={{ ...styles.container, opacity: fadeAnimationRef }}>
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