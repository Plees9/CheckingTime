import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from "react-native-vector-icons/Ionicons";
import CanDuyet from "../Screens/DonTu/CanDuyet/CanDuyet";
import CuaToi from "../Screens/DonTu/CuaToi/CuaToi";
import QuanLy from "../Screens/DonTu/QuanLy/QuanLy";
import TheoDoi from "../Screens/DonTu/TheoDoi/TheoDoi";


const TabDonTu = createMaterialTopTabNavigator();

const TabDonTusNavigation = () => {
  return (
    <TabDonTu.Navigator initialRouteName="back" >
      
      <TabDonTu.Screen
        name="Của Tôi"
        component={CuaToi}
      />
       <TabDonTu.Screen
        name="Cần Duyệt"
        component={CanDuyet}
      />
       <TabDonTu.Screen
        name="Quản Lý"
        component={QuanLy}
      />
       <TabDonTu.Screen
        name="Theo Dõi"
        component={TheoDoi}
      />
    </TabDonTu.Navigator>
  );
};
export default TabDonTusNavigation;
