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
import Photo from "./screens/Photo";
import Music from "./screens/Music";
import Sport from "./screens/Sport";
import Gaya from "./screens/Gaya";
import Sky from "./screens/Sky";
import Human from "./screens/Human";
import Town from "./screens/Town";
import Model from "./screens/Model";
import Contact from "./screens/Contact";
import Impressum from "./screens/impressum";
import Credits from "./screens/Credits";


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

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
        <DrawerItem label="Help" onPress={() => alert("Link to help")} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        style={styles.NavigationContainer}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Piano" component={Piano} />
        <Drawer.Screen name="Film" component={Film} />
        <Drawer.Screen name="Photo" component={Photo} />
        <Drawer.Screen name="Model" component={Model} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Impressum" component={Impressum} />
        <Drawer.Screen name="Credits" component={Credits} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

