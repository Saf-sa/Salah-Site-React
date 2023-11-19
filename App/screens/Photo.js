import { View, Button, Image } from 'react-native'
import React from 'react'



const Photo = ({ navigation }) => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
  
      <Button title="Go to Music" onPress={() => navigation.navigate("Music")} />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Go to Sport"
        onPress={() => navigation.navigate("Sport")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button title="Go to Gaya" onPress={() => navigation.navigate("Gaya")} />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button title="Go to Sky" onPress={() => navigation.navigate("Sky")} />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="Go to Human"
        onPress={() => navigation.navigate("Human")}
      />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
      <Button title="Go to Town" onPress={() => navigation.navigate("Town")} />
      <Image
        source={{ uri: "url_to_your_image" }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default Photo;
