import { View, Text } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;