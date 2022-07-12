import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { ICON_SIZE } from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Account/Account";
import HappyGame from "../HappyGame/HappyGames";
import Jobs from "../Jobs";

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "lightblue",
              borderWidth: 1,
              padding: 10,
              marginVertical: 30,
              marginLeft: 40,
              borderRadius: 8,
            }}
          >
            <Text style={styles.text}>Home</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 4,
              backgroundColor: "lightblue",
              borderWidth: 1,
              padding: 10,
              marginVertical: 30,
              marginRight: 40,
              borderRadius: 8,
            }}
          >
            <Text style={styles.text}>Jobs</Text>
          </View>
        </View>
        <Text>Workspace của bạn</Text>
        <View style={styles.item}>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Icon name="home" size={30} color="black" />
          </View>
          <View>
            <Text>Home1</Text>
            <Text>Home2</Text>
          </View>

          <Pressable
            style={{
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 100,
              backgroundColor: "lightblue",
            }}
          >
            <Icon
              name="reload1"
              size={20}
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </Pressable>
        </View>
        <Text>Top 5 hôm nay</Text>
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.item2}>
            <Text>1. Phúc Gay</Text>
            <Text>2. Quân bê đê</Text>
            <Text>3. Bá Kiến </Text>
            <Text>4. Huy đẹp zai</Text>
            <Text>5. Phúc đầu đinh</Text>
            <Text>7. Sơn tử tế</Text>
            <Text>8. </Text>
          </View>
        </View>
      </ScrollView>
      <View></View>
    </View>
  );
};

export default HomeScreen;
