import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Piano = () => {
  return (
    <View
      style={{
        flex: 1,
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={styles.title}>Piano Screen</Text>
    </View>
  );
}

export default Piano

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});