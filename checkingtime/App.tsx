import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Jobs from './src/Screens/Jobs/Jobs';
import HappyGames from './src/Screens/HappyGame/HappyGames';
export default function App() {
  return (
    <View>    
      <NavigationContainer>
      <HappyGames/>
      </NavigationContainer>
    

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
