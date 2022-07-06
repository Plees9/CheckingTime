import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import 'react-native-gesture-handler';

import Jobs from './src/Screens/Jobs';
import HappyGames from './src/Screens/HappyGame/HappyGames';

import FormCreated from './src/Screens/FormCreated/index';
import Form from './src/Screens/Form/Form';
import Account from './src/Screens/Account/Account';

import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/Screens/NewPasswordScreen';

import Navigation from './src/navigation/index';
import TabsNavigation from './src/Screens/TabBar/tab';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NhatKyDiem from './src/Screens/NhatKyDiem/NhatKyDiem';
import DoiQua from './src/Screens/DoiQua/DoiQua';



const App = () => {
  return (

      <SafeAreaView style ={styles.root} >
         {/* <Image source={require('./assets/images/ah.jpg')} style={styles.image}/>  */}
        {/* <SignUpScreen/> */}
        {/* <ConfirmEmailScreen/> */}
        {/* <ForgotPasswordScreen/> */}
        {/* <NewPasswordScreen/> */}
        {/* <SignInScreen/> */}
        {/* <Navigation/> */}
        <TabsNavigation/>
      

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
  },
});
export default App;