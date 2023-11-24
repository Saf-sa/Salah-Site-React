import { View,StyleSheet, Button, Image } from 'react-native'
import React from 'react'



const Photo = ({ navigation }) => {
  return (
    <View style={styles.photoGallery}>
      
      <Button
        title=" Music Gallery"
        onPress={() => navigation.navigate("Music")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Sport Gallery"
        onPress={() => navigation.navigate("Sport")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Gaya Gallery"
        onPress={() => navigation.navigate("Gaya")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button title="Sky Gallery" onPress={() => navigation.navigate("Sky")} />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Human Gallery"
        onPress={() => navigation.navigate("Human")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Town Gallery"
        onPress={() => navigation.navigate("Town")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  photoGallery: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "black",
    alignItems: "center",
    
  },

  title: {
    marginTop: 40,
    fontSize: 30,
    fontSize: 30,
    color: "white",
  },
});
