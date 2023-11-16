import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="Film" component={Film} />
        <Stack.Screen name="Photo" component={Photo} />
        <Stack.Screen name="Photo" component={Photo} />
        <Stack.Screen name="Photo Music" component={Photomusic} />
        <Stack.Screen name="Photo Sport" component={Photosport} />
        <Stack.Screen name="Photo Gaya" component={Photogaya} />
        <Stack.Screen name="Photo human" component={Photohuman} />
        <Stack.Screen name="Photo sky" component={Photosky} />
        <Stack.Screen name="Photo town" component={Phototown} />
        <Stack.Screen name="Model" component={Model} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
