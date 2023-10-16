import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';



const AutoRunProgressBar = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 5000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };


  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '500%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
paddingVertical:5
  },
  progressBarContainer: {
    width: '100%',
    height: 3,
    backgroundColor: 'lightgray',
    overflow: 'hidden',

  },
  progressBar: {
    height: '100%',
    backgroundColor: 'black',
  },
});



export default AutoRunProgressBar;