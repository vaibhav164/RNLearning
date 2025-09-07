import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const ParallelExample = () => {
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const piece = Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.5,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]);

        Animated.loop(piece).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.circle,
                {
                    transform: [{ scale }],
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 100,
    },
});

export default ParallelExample;
