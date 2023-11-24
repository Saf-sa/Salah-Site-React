import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'

const Sky = ()=>  {
  return (
   <View style={styles.skyGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />

      <Text style={styles.title}>Sky Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};

export default Sky  

const styles = StyleSheet.create({

  skyGallery: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },

  title: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    fontSize: 30,
    color: "white",
  },
});