import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Contact = () => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Text style={styles.title}>Contact Screen</Text>
    </View>
  );
}

export default Contact
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});