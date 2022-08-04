import React from "react";
import {
  Text,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { loadCompany } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
const Jobs = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const companyHandler = async () => {
    navigation.navigate("Thông tin Công Ty");
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{ backgroundColor: "#f2f2f2", margin: 10,  borderRadius: 20 }}>
        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={50} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Bảng công</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => navigation.navigate("Đơn từ")}>
            <View style={{ alignContent: "center" }}>
              <IconButton icon="text-box" color="#f49218" size={50} />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Danh sách đơn từ</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => navigation.navigate("Form Created")}
          >
            <View style={{ alignContent: "center" }}>
              <IconButton icon="text-box-plus" color="#f49218" size={50} />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Tạo đơn mới</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={companyHandler}
          >
            <View style={{ alignContent: "center" }}>
              <IconButton icon="office-building" color="#f49218" size={50} />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Thông tin công ty</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => navigation.navigate("DANH SÁCH NHÂN VIÊN")}
          >
            <View style={{ alignContent: "center" }}>
              <IconButton icon="account-group" color="#f49218" size={50} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                marginRight: 20,
              }}
            >
              <Text style={styles.text1}>Danh sách nhân viên</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Jobs;
