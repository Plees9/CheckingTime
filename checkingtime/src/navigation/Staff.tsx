
import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Todo_Staff from "../Screens/TodoList/Todo_Staff";
import Staff_Manager from "../Screens/TodoList/Staff_Manager";
import { FONTS } from "../../constants/theme";
import { useSelector } from "react-redux";


const Staff = createMaterialTopTabNavigator();

const Staff_Navigation = () => {
  const {user} = useSelector<any, any> (state => state.auth)
  if (typeof user !== "undefined") {
    if (user.privilege === "Quản trị viên" || user.privilege === "Quản lý") {
      return (
        <Staff.Navigator initialRouteName="back"
        screenOptions={{
          tabBarStyle:  { height: 45 },
          tabBarLabelStyle: { fontSize: 13,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
        }}>
          
          <Staff.Screen
          name="Tham gia"
          component={Todo_Staff}
          
          />
           <Staff.Screen
          name="Quản lý"
          component={Staff_Manager}
          />    
        </Staff.Navigator>
      );
    };
    }
  return (
    <Staff.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 13,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
    }}>
      
      <Staff.Screen
      name="Tham gia"
      component={Todo_Staff}
      
      /> 
    </Staff.Navigator>
  );
};
export default Staff_Navigation;
