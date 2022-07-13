import { View, Text, TextInput, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import HappyGame from "../Screens/HappyGame/HappyGames";
import Jobs from "../Screens/Jobs";
import Icon from "react-native-vector-icons/Ionicons";
import DoiQua from "../Screens/DoiQua/DoiQua";
import { colors } from "react-native-tailwindcss";
import Account from "../Screens/Account/Account";


const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
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
          name="DoiQua"
          component={DoiQua}
          options={{
            tabBarIcon: () => <Icon name="finger-print" size={30} />,
          }}
        />

        <Tab.Screen
          name="HappyGame"
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
    
  );
};
export default TabsNavigation;
