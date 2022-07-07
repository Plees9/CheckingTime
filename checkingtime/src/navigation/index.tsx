import { View, Text } from 'react-native'
import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';

import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
<<<<<<< HEAD
import Form from '../Screens/Form/Form';
import TabsNavigation from './Tabs';
=======
import TabsNavigation from './Tabs';
import HappyGame from '../Screens/HappyGame/HappyGames';
import NhatKyDiem from '../Screens/NhatKyDiem/NhatKyDiem';
import DoiQua from '../Screens/DoiQua/DoiQua';

>>>>>>> 099bc49115aaebd97a567850be936ef4ef7f936c



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:true}} > 
      <Stack.Screen name="SignIn" component={SignInScreen}  options={{ title: 'Awesome app' }}  />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
=======
    <NavigationContainer>
    <Stack.Navigator > 
      <Stack.Screen name="SignIn" component={SignInScreen} />
>>>>>>> 099bc49115aaebd97a567850be936ef4ef7f936c
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
<<<<<<< HEAD
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
=======


>>>>>>> 099bc49115aaebd97a567850be936ef4ef7f936c
    </Stack.Navigator>
    </NavigationContainer>
  )
};
const HappyGameNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Happy" component={HappyGame} />
      <Stack.Screen name="NhatKyDiem" component={NhatKyDiem} />
      <Stack.Screen name="DoiQua" component={DoiQua} />
    </Stack.Navigator>
  );
}
export default HappyGameNavigation ;