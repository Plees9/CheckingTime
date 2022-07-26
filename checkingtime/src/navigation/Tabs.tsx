import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Screens/Account/Account";
import HomeScreen from "../Screens/HomeScreen";

import Jobs from "../Screens/Jobs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="Công việc"
        component={Jobs}
        options={{
          // headerShown: true,

          tabBarIcon: () => <Icon name="mail-sharp" size={30} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => <Icon name="person" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabsNavigation;
