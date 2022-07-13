import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Jobs from "./src/Screens/Jobs";
import HappyGames from "./src/Screens/HappyGame/HappyGames";

import FormCreated from "./src/Screens/FormCreated/index";
import Form from "./src/Screens/Form/Form";


import ForgotPasswordScreen from "./src/Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import SignInScreen from "./src/Screens/SignInScreen/SignInScreen";

import Navigation from "./src/navigation";
import NhatKyDiem from "./src/Screens/NhatKyDiem/NhatKyDiem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabsNavigation from "./src/navigation/Tabs";
import Tabs from "./src/navigation/Tabs";
import HomeScreen from "./src/Screens/HomeScreen/index";
import Account from "./src/Screens/Account/Account";
import NavigationA from "./src/navigation";
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
      <NavigationA />
      
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
