import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Credits = () => {
  return (
    <View style={styles.credits}>
      <Text style={styles.title}>Credits Screen</Text>
    </View>
  );
};

export default Credits;

const styles = StyleSheet.create({
  credits: {
    fontSize: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  title: {
    fontSize: 30,
    color: "black",
  },
});
