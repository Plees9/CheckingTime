import { View, Text } from "react-native";
import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import SignInScreen from "../Screens/SignInScreen/SignInScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import Account from "../Account/Account";

import Jobs from "../Screens/Jobs";
import TabsNavigation from "./Tabs";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const NavigationA = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: true }}>
        
//         <Stack.Screen name="Account" component={Account} />
//         <Stack.Screen name="Jobs" component={Jobs} />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default Navigation; 
