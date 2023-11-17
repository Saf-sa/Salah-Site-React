import { View, Text, StyleSheet, Button,} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import React from "react";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text>Home Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button title="Piano" onPress={() => navigation.navigate("Piano")} />
      <Button title="Film" onPress={() => navigation.navigate("Film")} />
      <Button title="Photo" onPress={() => navigation.navigate("Photo")} />
      <Button title="Model" onPress={() => navigation.navigate("Model")} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />

    
    </View>
  );
};

export default Home;
