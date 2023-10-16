import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DecagonalView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.side1} />
      <View style={styles.side2} />
      <View style={styles.side3} />
      <View style={styles.side4} />
      <View style={styles.side5} />
      <View style={styles.side6} />
      <View style={styles.side7} />
      <View style={styles.side8} />
      <View style={styles.side9} />
      <View style={styles.side10} />
      {/* Add an Image or content inside the decagonal view */}
      {/* <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&usqp=CAU'}} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
    backgroundColor: 'transparent', // Change the background color as needed
  },
  side1: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '36deg' }],
  },
  side2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '72deg' }],
  },
  side3: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '108deg' }],
  },
  side4: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '144deg' }],
  },
  side5: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '180deg' }],
  },
  side6: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '216deg' }],
  },
  side7: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '252deg' }],
  },
  side8: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '288deg' }],
  },
  side9: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '324deg' }],
  },
  side10: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red', // Adjust the color and style
    transform: [{ translateY: -10 }, { rotate: '360deg' }],
  },
  // Continue styles for side4 to side10 with appropriate rotations
  // ...
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image style
  },
});

export default DecagonalView;