import { View, Text } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Screens/Account/Account";
import HomeScreen from "../Screens/HomeScreen";
import HappyGame from "../Screens/HappyGame/HappyGames";
import Jobs from "../Screens/Jobs";    

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="HappyGames" component={HappyGame} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabsNavigation;
