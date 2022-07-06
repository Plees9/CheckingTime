import { View, Text, TextInput, Button } from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Screens/Account/Account";
import HomeScreen from "../Screens/HomeScreen";
import HappyGame from "../Screens/HappyGame/HappyGames";
import Jobs from "../Screens/Jobs";    
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={Jobs}
          options={{
            tabBarIcon: () => <Icon name="mail-sharp" size={30} />,
          }}
        />
        
        
        <Tab.Screen
          name="HappyGames"
          component={HappyGame}
          options={{
            tabBarIcon: () => <Icon name="game-controller" size={30} />,
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
    </NavigationContainer>
  );
};
export default TabsNavigation;
