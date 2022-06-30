import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Jobs from './src/Screens/Jobs/Jobs';
export default function App() {
  return (
    <View>    
      <NavigationContainer>
      <Jobs/>
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
