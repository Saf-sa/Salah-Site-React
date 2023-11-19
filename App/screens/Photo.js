import { View, Text } from 'react-native'
import React from 'react'

const Photo = () => {
  return (
    <View
      style={{
        fontSize: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue ",
      }}
    >
      <Text>Photo</Text>
    </View>
  );
};

export default Photo;