import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Town = () => {
  return (
    <View
      style={{
        flex: 1,
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Text style={styles.title}>Town Screen</Text>
    </View>
  );
}

export default Town

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});