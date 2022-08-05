import { View, Text } from "react-native";
import * as React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import TabsNavigation from "./Tabs";
import Form from "../Screens/Form/Form";
import FormCreated from "../Screens/FormCreated";
import Jobs from "../Screens/Jobs";
import InfoScreen from "../Screens/InfoCompany/Info";
import Account from "../Screens/Account/Account";

import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import TabDonTusNavigation from "./TabDonTu";
import CuaToi from "../Screens/DonTu/CuaToi/CuaToi";
import ListStaff from "../Screens/ListStaff/ListStaff";
import EFilter from "../Screens/ListFilter/EFilter";
import CuaToii from "../Screens/CheckBoard/CuaToii/CuaToii";
import NhanVien from "../Screens/CheckBoard/NhanVien/NhanVien";
import CheckBoardsNavigation from "./CheckBoard";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
const BangchamcongNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
       name="CuaToii"
       component={CheckBoardsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
         name="NhanVien"
         component={NhanVien}
         options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
};

const JobsNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Form" component={Form} options= {{headerShown : false }}/> */}
      <Stack.Screen
        name="FormCreated"
        component={FormCreated}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const InfoScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Info Screen" component={InfoScreen} />
    </Stack.Navigator>
  );
};
const ListStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListStaff" component={ListStaff} />
    </Stack.Navigator>
  );
};
const ListFilterNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListFilter" component={EFilter} />
    </Stack.Navigator>
  );
};

const SNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sign In" component={Navigation} />

        <Stack.Screen
          name="Form"
          component={JobsNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Form Created"
          component={JobsNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Đơn từ"
          component={TabDonTusNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Thông tin Công Ty"
          component={InfoScreenNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DANH SÁCH NHÂN VIÊN"
          component={ListStaffNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Bộ lọc"
          component={ListFilterNavigation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="CuaToii"
          component={BangchamcongNavigation}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SNavigation;
