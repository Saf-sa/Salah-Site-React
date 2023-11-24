import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'
import Human from './Human';

const Town = ({ navigation }) => {
  return (
    <View style={styles.townGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />

      <Text style={styles.title}>Town Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};
export default Town

const styles = StyleSheet.create({
  townGallery: {
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