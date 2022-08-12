import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Todo_Admin from "../Screens/TodoList/Todo_Admin";
import Todo_Staff from "../Screens/TodoList/Todo_Staff";
import { FONTS } from "../../constants/theme";


const Todo_List = createMaterialTopTabNavigator();

const Todo_Navigation = () => {
  return (
    <Todo_List.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 14,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
    }}>
      
      <Todo_List.Screen
         name="Công việc của bạn"
         component={Todo_Staff}
      />
       <Todo_List.Screen
         name="Tất cả công việc"
         component={Todo_Admin}
      />    
    </Todo_List.Navigator>
  );
};
export default Todo_Navigation;
