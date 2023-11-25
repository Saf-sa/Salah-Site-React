import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Navigation } from "@react-navigation/native";


import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Piano from "./screens/Piano";
import Film from "./screens/Film";
import Model from "./screens/Model";
import Contact from "./screens/Contact";
import Impressum from "./screens/impressum";
import Credits from "./screens/Credits";
import Music from "./screens/Music";
import Sport from "./screens/Sport";
import Gaya from "./screens/Gaya";
import Sky from "./screens/Sky";
import Human from "./screens/Human";
import Town from "./screens/Town";


function CustomDrawerContent(props) {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...props} />
       
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      
        initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Piano" component={Piano} />
        <Drawer.Screen name="Film" component={Film} />
        <Drawer.Screen name="Music" component={Music} />
        <Drawer.Screen name="Sport" component={Sport} />
        <Drawer.Screen name="Gaya" component={Gaya} />
        <Drawer.Screen name="Sky" component={Sky} />
        <Drawer.Screen name="Human" component={Human} />
        <Drawer.Screen name="Town" component={Town} />
        <Drawer.Screen name="Model" component={Model} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Impressum" component={Impressum} /> 
        <Drawer.Screen name="Credits" component={Credits} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

