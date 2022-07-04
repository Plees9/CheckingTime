import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Jobs from './src/Screens/Jobs';
import HappyGames from './src/Screens/HappyGame/HappyGames';
import Home from './src/Screens/Home/Home';
import FormCreated from './src/Screens/FormCreated/index';
import Form from './src/Screens/Form/Form';
import HappyGame from './src/Screens/HappyGame/HappyGames';

export default function App() {
  return (
    <View>    
      <NavigationContainer>
        
       <Home/>
       < HappyGames/>
       <Jobs/>
      </NavigationContainer>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79c7ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
