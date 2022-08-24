import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BangCong_Cuatoi from "../Screens/CheckBoard/CuaToi";
import BangCong_Nhanvien from "../Screens/CheckBoard/NhanVien";
import { FONTS } from "../../constants/theme";
import { useSelector } from "react-redux";


const BangCong = createMaterialTopTabNavigator();

const BangCong_Navigation = () => {
  const {user} = useSelector<any, any> (state => state.auth)
  if (typeof user !== "undefined") {
    if (user.privilege === "Quản trị viên" || user.privilege === "Quản lý") {
  return (
    <BangCong.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 13,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
    }}>
      
      <BangCong.Screen
         name="Của tôi"
         component={BangCong_Cuatoi}
      />
       <BangCong.Screen
         name="Nhân viên của tôi"
         component={BangCong_Nhanvien}
      />    
    </BangCong.Navigator>
  );
};
  }
  return (
    <BangCong.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 13,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
    }}>
      
      <BangCong.Screen
         name="Của tôi"
         component={BangCong_Cuatoi}
      />
      </BangCong.Navigator>
    )
  }
export default BangCong_Navigation;
