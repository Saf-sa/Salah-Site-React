import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'

Sport = ({ navigation }) => {
  return (
    <View style={styles.sportGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />

      <Text style={styles.title}>Sport Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};
export default Sport

const styles = StyleSheet.create({
  sportGallery: {
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