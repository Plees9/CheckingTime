import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { IconButton } from "react-native-paper";
import createStyles from "../Account/styles";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
const TypeOTPComponent = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.Touch1} onPress={() => navigation.navigate("Quên mật khẩu")}>
          <View style={{ alignContent: "center" }}>
            <IconButton icon="image" size={40} color="#f49218" />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Email</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Touch1} onPress={() => navigation.navigate("Nhập otp bằng điện thoại")}>
          <View style={{ alignContent: "center" }}>
            <IconButton icon="camera" size={40} color="#f49218" />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Điện thoại</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeOTPComponent;
