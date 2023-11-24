import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Impressum = () => {
  return (
    <View style={styles.impressum}>
      <Text style={styles.title}>Impressum Screen</Text>
    </View>
  );
};

export default Impressum

const styles = StyleSheet.create({
  impressum: {
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
