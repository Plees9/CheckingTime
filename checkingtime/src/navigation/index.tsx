import { View, Text } from 'react-native'
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';

import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import TabsNavigation from './Tabs';
import HappyGame from '../Screens/HappyGame/HappyGames';
import NhatKyDiem from '../Screens/NhatKyDiem/NhatKyDiem';
import DoiQua from '../Screens/DoiQua/DoiQua';
import Jobs from '../Screens/Jobs';
import Form from '../Screens/Form/Form';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator > 

      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />


    </Stack.Navigator>
    </NavigationContainer>
  )
};
const HappyGameNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Happy" component={HappyGame} />
        <Stack.Screen name="NhatKyDiem" component={NhatKyDiem} />
        <Stack.Screen name="DoiQua" component={DoiQua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Homes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      </Stack.Navigator>
      </NavigationContainer>
  );
  }
const JobsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default JobsNavigation; 