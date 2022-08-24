import React from "react";
import { Text, ScrollView, View, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { loadAlluser, loadCompany } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import UserBadgeItem from "../../component/BadgeModal";
import Toast from "react-native-toast-message";
const Jobs = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {user} = useSelector<any, any>(state => state.auth)
  const companyHandler = async () => {
    navigation.navigate("Thông tin Công Ty");
    

  };
  const configToast = {
    error: (internal: any) => (
      <View
        style={{
          width: "95%",
          height: 40,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
      </View>
    ),
      }

   
      const ToastAlertMessage = (message: any) => {
        Toast.show({ text1: message, type: "error" });
      };
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ backgroundColor: "#f2f2f2", margin: 10, borderRadius: 20 }}
      >
        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => navigation.navigate("Công việc của tôi")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="book" color="#716DF2" size={50} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Công việc của tôi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => {
            if (user.privilege === "Quản trị viên") {
            navigation.navigate("Công việc")}
            else {
              ToastAlertMessage("Bạn không có quyền truy cập tính năng này")
            }
          }}
          
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="clipboard-list" color="#716DF2" size={50} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Quản lý công việc</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => navigation.navigate("Bảng chấm công")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#716DF2" size={50} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Bảng công</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => navigation.navigate("Đơn từ")}
          >
            <View style={{ alignContent: "center" }}>
              <IconButton icon="text-box" color="#716DF2" size={50} />
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
              <IconButton icon="text-box-plus" color="#716DF2" size={50} />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Tạo đơn mới</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity style={styles.Touch2} onPress={companyHandler}>
            <View style={{ alignContent: "center" }}>
              <IconButton icon="office-building" color="#716DF2" size={50} />
            </View>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Thông tin công ty</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => { 
              navigation.navigate("DANH SÁCH NHÂN VIÊN")
            }}
          >
            <View style={{ alignContent: "center" }}>
              <IconButton icon="account-group" color="#716DF2" size={50} />
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
      </ScrollView>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default Jobs;
