import { View, Text } from "react-native";
import React, { useEffect } from 'react'
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from 'react-redux'
import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import TabsNavigation from "./Tabs";
import Form from "../Screens/Form/Form";
import FormCreated from "../Screens/FormCreated";
import Jobs from "../Screens/Jobs";
import InfoScreen from "../Screens/InfoCompany/Info";
import Account from "../Screens/Account/Account";
import { getmyrank, loadCompany, loadTimesheet, loadUser } from '../../redux/action'
import ResetPasswordScreen from "../Screens/ResetPasswordScreen/ResetPasswordScreen";
import TabDonTusNavigation from "./TabDonTu";
import CuaToi from "../Screens/DonTu/CuaToi/CuaToi";
import ListStaff from "../Screens/ListStaff/ListStaff";
import EFilter from "../Screens/ListFilter/EFilter";
import Loader from "./Loader"
import AddStaff from '../Screens/AddStaff/AddStaff';
import UpdateStaff from '../Screens/UpdateInfoStaff/UpdateStaff';
import UpdatePassword from "../Screens/UpdatePassword";
import FDontu from "../Screens/Bolocdontu/FDontu";

import UpdateStaff_Admin from "../Screens/UpdateInFoStaff_NV/UpdateInfoStaff_NV";

import Camera from "../Screens/UpdateInfoStaff/Camera"

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
        name="Quên mật khẩu"
        component={ForgotPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cài lại mật khẩu"
        component={ResetPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Thay đổi mật khẩu"
        component={UpdatePassword}
        options={{ headerShown: true }}
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
const AddStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddStaff" component={AddStaff} />
    </Stack.Navigator>
  );
};
const UpdateStaffNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpdateStaff" component={UpdateStaff} />
    </Stack.Navigator>
  );
};
const FDontuNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FDontu" component={FDontu} />
    </Stack.Navigator>
  );
};
const UpdateStaff_AdminNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpdateStaff_Admin" component={UpdateStaff_Admin} />
    </Stack.Navigator>
  );
};

const SNavigation = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch<any>(loadUser())
  }, [dispatch])
  const { isAuthenticated, loading, user } = useSelector<any, any>(state => state.auth)
  return (
    loading ? <Loader /> : 
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "HomeScreen" : "Sign In"} 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
        name="HomeScreen"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
        <Stack.Screen name="Sign In" component={Navigation} /> 
        <Stack.Screen name="Account" component={TabsNavigation} />
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
        name="Cài lại mật khẩu"
        component={ResetPasswordScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Quên mật khẩu"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="Thêm nhân viên"
        component={AddStaffNavigation}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Cập nhật thông tin nhân viên"
        component={UpdateStaffNavigation}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Thay đổi mật khẩu"
        component={UpdatePassword}
        options={{ headerShown: true }}
      />
      <Stack.Screen
         name="Bộ lọc đơn từ"
         component={FDontu}
         options={{ headerShown: true}}
        />
      <Stack.Screen
         name="Đổi ảnh đại diện"
         component={Camera}
         options={{ headerShown: true}}
        />
      <Stack.Screen
          name="Cập nhật thông tin nhân viên _Admin"
          component={UpdateStaff_Admin}
          options={{ headerShown: true }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SNavigation;
