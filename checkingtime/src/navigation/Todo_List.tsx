import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Todo_All from "../Screens/TodoList/Todo_All";
import Todo_ListStaff from "../Screens/TodoList/Todo_ListStaff";
import { FONTS } from "../../constants/theme";


const Todo_List = createMaterialTopTabNavigator();

const Todo_Navigation = () => {
  return (
    <Todo_List.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 13,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
    }}>
      
      <Todo_List.Screen
         name="Nhân viên"
         component={Todo_ListStaff}
      />
       <Todo_List.Screen
         name="Tất cả"
         component={Todo_All}
      />    
    </Todo_List.Navigator>
  );
};
export default Todo_Navigation;
