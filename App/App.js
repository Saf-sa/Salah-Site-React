import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "@react-navigation/native";
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Piano from "./screens/Piano";
import Film from "./screens/Film";
import Photo from "./screens/Photo";
import Model from "./screens/Model";
import Contact from "./screens/Contact";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Piano"
          component={Piano}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Film"
          component={Film}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{ headerShown: true }}
        />

        <Stack.Screen name="Model" component={Model} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
