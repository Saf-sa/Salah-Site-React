import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "@react-navigation/native";

import Music from "./Music";
import Sport from "./Sport";
import Gaya from "./Gaya";
import Sky from "./Sky";
import Human from "./Human";
import Town from "./Town";

const Photo = ({ navigation }) => {
  return (
    <View
      style={{
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

        backgroundColor: "lightblue ",
      }}
    >
      <Text>Photo Gallery</Text>

      <Button
        title=" Music"
        onPress={() => navigation.navigate("Music")}
      />
      <Button
        title=" Sport"
        onPress={() => navigation.navigate("Sport")}
      />
      <Button 
      title=" Gaya" 
      onPress={() => navigation.navigate("Gaya")}
       />
      <Button 
      title="Sky"
       onPress={() => navigation.navigate("Sky")} 
       />
      <Button
        title=" Human"
        onPress={() => navigation.navigate("Human")}
      />
      <Button
       title=" Town" 
       onPress={() => navigation.navigate("Town")} />
    </View>
  );
};

export default Photo;
