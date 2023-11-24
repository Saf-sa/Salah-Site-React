import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'



const Music = ({navigation}) => {
  return (
    <View style={styles.musicGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />

      <Text style={styles.title}>Music Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};
export default Music

const styles = StyleSheet.create({
  Music: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  musicGallery: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },

  title: {
    marginTop: 20,
    fontSize: 30,
    fontSize: 30,
    color: "white",
  },

 
});