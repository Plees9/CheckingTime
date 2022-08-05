import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";

import SNavigation from "./src/navigation";
import FormCreated from "./src/Screens/FormCreated";
import KhongLuong from "./src/Screens/FormCreated/DonNghiKhongLuong/KhongLuong";
import KetHon from "./src/Screens/FormCreated/DonNghiBanThanKetHon/KetHon";
import Account from './src/Screens/Account/Account';
import CuaToi from "./src/Screens/DonTu/CuaToi/CuaToi";
import TabDonTu from "./src/navigation/TabDonTu";
import Info from "./src/Screens/InfoCompany/Info";
import ListStaff from "./src/Screens/ListStaff/ListStaff";
import EFilter from "./src/Screens/ListFilter/EFilter";
import CuaToii from "./src/Screens/CheckBoard/CuaToii/CuaToii";
import NhanVien from "./src/Screens/CheckBoard/NhanVien/NhanVien";
import CheckBoardsNavigation from "./src/navigation/CheckBoard";



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
