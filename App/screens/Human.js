import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'

const Human = ({ navigation }) => {
  return (
    <View style={styles.humanGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />

      <Text style={styles.title}>Human Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};

export default Human

const styles = StyleSheet.create({
  humanGallery: {
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