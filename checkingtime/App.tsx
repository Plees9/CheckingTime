import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import React from 'react';
import 'react-native-gesture-handler';

import Jobs from "./src/Screens/Jobs";
import HappyGames from "./src/Screens/HappyGame/HappyGames";

<<<<<<< HEAD
import FormCreated from './src/Screens/FormCreated/index';
import Form from './src/Screens/Form/Form';
import Account from './src/Screens/Account/Account';
=======
import FormCreated from "./src/Screens/FormCreated/index";
import Form from "./src/Screens/Form/Form";
import Account from "./src/Screens/Account/Account";
import HappyGame from "./src/Screens/HappyGame/HappyGames";
>>>>>>> 099bc49115aaebd97a567850be936ef4ef7f936c
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import ConfirmEmailScreen from "./src/Screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/Screens/ForgotPasswordScreen";
import NewPasswordScreen from "./src/Screens/NewPasswordScreen";
import HappyGameNavigation from "./src/navigation";
import NhatKyDiem from "./src/Screens/NhatKyDiem/NhatKyDiem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabsNavigation from './src/navigation/Tabs';
import HomeScreen from './src/Screens/HomeScreen/index';
import Navigation from "./src/navigation";
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
<<<<<<< HEAD
    <NavigationContainer>
      <TabsNavigation/>
    </NavigationContainer>  
=======
      <NavigationContainer>
        <HappyGameNavigation/>
      </NavigationContainer>
>>>>>>> 099bc49115aaebd97a567850be936ef4ef7f936c
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
    padding: 10,
  },
});
export default App;
