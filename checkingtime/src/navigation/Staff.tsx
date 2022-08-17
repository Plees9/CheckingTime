
import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Todo_Staff from "../Screens/TodoList/Todo_Staff";
import Staff_Manager from "../Screens/TodoList/Staff_Manager";
import { FONTS } from "../../constants/theme";


const Staff = createMaterialTopTabNavigator();

const Staff_Navigation = () => {
  return (
    <Staff.Navigator initialRouteName="back"
    screenOptions={{
      tabBarStyle:  { height: 45 },
      tabBarLabelStyle: { fontSize: 14,  alignItems: 'center', fontFamily: FONTS.vanSansSemiBold },
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
export default Staff_Navigation;
