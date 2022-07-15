import { View, Text } from "react-native";
import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import TabsNavigation from "./Tabs";
import HappyGame from "../Screens/HappyGame/HappyGames";
import NhatKyDiem from "../Screens/NhatKyDiem/NhatKyDiem";
import DoiQua from "../Screens/DoiQua/DoiQua";
import Form from "../Screens/Form/Form";
import FormCreated from "../Screens/FormCreated";
import Jobs from "../Screens/Jobs";

import Account from "../Screens/Account/Account";

import HappyGameNavigation from "./HappyGameNavigation";
import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import TabDonTusNavigation from "./TabDonTu";
import CuaToi from "../Screens/DonTu/CuaToi/CuaToi";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="HomeScreen" component={TabsNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name= "ResetPassword" component={ResetPasswordScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

const JobsNavigation = () => {
  return (
    <Stack.Navigator >
      {/* <Stack.Screen name="Form" component={Form} options= {{headerShown : false }}/> */}
      <Stack.Screen name="FormCreated" component={FormCreated} options= {{headerShown : false }}/>
    </Stack.Navigator>
  );
};
const SNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="NhatKyDiem" component={HappyGameNavigation} />
        <Stack.Screen name="Form" component={JobsNavigation} options= {{headerShown : true }} />
        <Stack.Screen name="FormCreated" component={JobsNavigation} options= {{headerShown : true }} />
        <Stack.Screen name="Đơn từ" component={TabDonTusNavigation} options= {{headerShown :true }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SNavigation;
