import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const About = () => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text style={styles.title}>About Screen</Text>
    </View>
  );
}

export default About

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});
