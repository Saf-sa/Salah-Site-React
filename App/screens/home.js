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
        fontSize: 30,
      }}
    >
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",

  },
});
