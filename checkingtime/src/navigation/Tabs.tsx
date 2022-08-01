import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Screens/Account/Account";
import HomeScreen from "../Screens/HomeScreen";
import { CleanTabBar } from "react-navigation-tabbar-collection";
import Jobs from "../Screens/Jobs";
import Icon from "react-native-vector-icons/Feather";

import { FONTS } from "../../constants/theme";
const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
      <Tab.Navigator
        initialRouteName="Trang chủ"
        tabBar={(props) => <CleanTabBar {...props} />}
      >
        <Tab.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={20} />,
            headerShown: false,
            tabBarActiveTintColor:'#FF7600',
          }}
        />
        <Tab.Screen
          name="Quản lý"
          component={Jobs}
          options={{
            // headerShown: true,
            tabBarActiveTintColor: '#FF7600',
            tabBarIcon: () => <Icon name="briefcase" size={20} />,
            headerTitleAlign: "center",
            headerStatusBarHeight: 20,
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: FONTS.vanSansSemiBold,
            },
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={Account}
          options={{
            tabBarIcon: () => <Icon name="user" size={20} />,
            tabBarActiveTintColor:'#FF7600',
            headerTitleAlign: "center",
            headerStatusBarHeight: 20,
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: FONTS.vanSansSemiBold,
              
            },
          }}
        />
      </Tab.Navigator>
  );
};
export default TabsNavigation;