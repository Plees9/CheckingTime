import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Jobs from './src/Screens/Jobs';
import HappyGames from './src/Screens/HappyGame/HappyGames';
import Home from './src/Screens/Home/Home';
import FormCreated from './src/Screens/FormCreated/index';
import Form from './src/Screens/Form/Form';

export default function App() {
  return (
    <View>    
      <NavigationContainer>
        
        <Home/>
        <Jobs />
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
