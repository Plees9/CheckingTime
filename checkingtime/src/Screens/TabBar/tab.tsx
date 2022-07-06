import { View, Text } from "react-native";
import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../HomeScreen";
import Jobs from "../Jobs";
import HappyGame from "../HappyGame/HappyGames";
import Account from "../Account/Account";
import Icon from 'react-native-vector-icons/FontAwesome';

 

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
      <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="HappyGames" component={HappyGame} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};
export default TabsNavigation;