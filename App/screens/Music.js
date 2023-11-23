import { View, Text, StyleSheet } from "react-native";
import React from 'react'



const Music = () => {
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
      <Text style={styles.title}>Music Screen</Text>
    </View>
  );
}
export default Music

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
  },
});