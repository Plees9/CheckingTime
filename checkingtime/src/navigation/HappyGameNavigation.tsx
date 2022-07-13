import { View, Text } from "react-native";
import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";

import SignUpScreen from "../Screens/SignUpScreen";
import ConfirmEmailScreen from "../Screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import NewPasswordScreen from "../Screens/NewPasswordScreen";
import TabsNavigation from "./Tabs";
import HappyGame from "../Screens/HappyGame/HappyGames";
import NhatKyDiem from '../Screens/NhatKyDiem/NhatKyDiem';
import DoiQua from "../Screens/DoiQua/DoiQua";
import Form from "../Screens/Form/Form";
import Jobs from "../Screens/Jobs";

import Account from "../Screens/Account/Account";
const HappyStack = createNativeStackNavigator();

const NhatKyDiemNavigation = () => {
    return (
        <HappyStack.Navigator>
            <HappyStack.Screen name="NhatKyDiem" component={NhatKyDiem} />
            <HappyStack.Screen name="DoiQua" component={DoiQua} />
        </HappyStack.Navigator>
    );
}

const HappyGameNavigation = () => {
  return (
    <HappyStack.Navigator>
      <HappyStack.Screen name="HappyGame" component={TabsNavigation} />
      <HappyStack.Screen name="NhatKyDiem" component={NhatKyDiemNavigation} />
      <HappyStack.Screen name="DoiQua" component={DoiQua} />
    </HappyStack.Navigator>
  );
};
export default HappyGameNavigation;
