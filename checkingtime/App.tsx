import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';

import Jobs from './src/Screens/Jobs';
import HappyGames from './src/Screens/HappyGame/HappyGames';
import Home from './src/Screens/Home/Home';
import FormCreated from './src/Screens/FormCreated/index';
import Form from './src/Screens/Form/Form';
import Account from './src/Screens/Account/Account';

import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/Screens/NewPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  return (
      <SafeAreaView style ={styles.root} >
        
        {/* <SignUpScreen/> */}
        {/* <ConfirmEmailScreen/> */}
        {/* <ForgotPasswordScreen/> */}
        {/* <NewPasswordScreen/> */}
        {/*<Navigation/> */}
         <SignInScreen/>
        
      </SafeAreaView>
     
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image : {
    height: "40%",
    width: "100%",
    resizeMode: 'contain',
    padding: 10,
  }
});
export default App;