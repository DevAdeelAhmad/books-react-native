import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookItem = ({ title, imageUri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    padding:8
  },
  image: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius:10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'customFont',
  },  
});

export default BookItem;