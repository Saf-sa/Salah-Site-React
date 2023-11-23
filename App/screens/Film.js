import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Film = () => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "brown",
      }}
    >
      <Text style={styles.title}>Film Screen</Text>
    </View>
  );
}

export default Film

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});