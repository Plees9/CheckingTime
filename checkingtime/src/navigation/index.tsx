import { View, Text } from "react-native";
import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import SignInScreen from "../Screens/SignInScreen/SignInScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import Account from "../Screens/Account/Account";

import Jobs from "../Screens/Jobs";
import TabsNavigation from "./Tabs";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="SignInScreen" component={SignInScreen} options ={{headerShown: false}} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options ={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={TabsNavigation} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const NavigationA = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInScreen" component={Navigation} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Account" component={Account} /> */}
        <Stack.Screen name="TabsNavigation" component={TabsNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationA;
