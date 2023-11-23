import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Gaya = () => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text style={styles.title}>Gaya Screen</Text>
    </View>
  );
}

export default Gaya

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});