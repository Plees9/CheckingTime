import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";

import SNavigation from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SNavigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
    padding: 10,
  },
});
export default App;
