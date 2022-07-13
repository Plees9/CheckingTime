import { View, Text } from 'react-native'
import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import SignIn from '../Screens/SignIn';


import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/styles';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import TabsNavigation from './Tabs';
import HappyGame from '../Screens/HappyGame/HappyGames';
import NhatKyDiem from '../Screens/NhatKyDiem/NhatKyDiem';
import DoiQua from '../Screens/DoiQua/DoiQua';
import Form from '../Screens/Form/Form';
import Jobs from '../Screens/Jobs';

import Account from '../Screens/Account/Account';

import HappyGameNavigation from './HappyGameNavigation';


const Stack = createNativeStackNavigator();

 const Navigation = () => {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="SignIn" component={SignIn} />
       {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
       <Stack.Screen
         name="ForgotPasswordScreen"
         component={ForgotPasswordScreen}
       />
       <Stack.Screen
         name="HomeScreen"
         component={TabsNavigation}
         options={{ headerShown: false }}
       />
       {/* <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} /> */}

       {/* <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
     </Stack.Navigator>
   );
 };

 const JobsNavigation = () => {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Jobs" component={Jobs} />
       <Stack.Screen name="Form" component={Form} />
     </Stack.Navigator>
   );
 };


const SNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
          <Stack.Screen name="Navigation" component={Navigation} />
        
        
          <Stack.Screen
            name="NhatKyDiem"
            component={HappyGameNavigation}
          />
      
        <Stack.Screen name="JobsNavigation" component={JobsNavigation} />
       
        {/* <Stack.Screen name="SignIn" component={SignIn} />    */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SNavigation;