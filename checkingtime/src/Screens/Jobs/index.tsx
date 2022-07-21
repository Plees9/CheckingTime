import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Alert,
  Button,
  useWindowDimensions,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Icon } from "react-native-vector-icons/Icon";
import styles from "./styles";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Form from "../Form/Form";

const Jobs = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.chu11}>Quản lý chấm công</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.scrollView}>
            <IconButton
              icon="calendar-account"
              color="#7445f6"
              size={40}
              onPress={() => Alert.alert("Simple Button pressed")}
            />
            <Text style={styles.text1}>Bảng công</Text>
          </View>
        </View>
        <View>
          <Text style={styles.chu11}>Quản lý đơn từ</Text>
        </View>
        <View style={styles.scrollView1}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <IconButton
              icon="text-box"
              color="#7445f6"
              size={40}
              onPress={() => navigation.navigate("Đơn từ")}
            />
            <Text style={styles.text1}>{"Danh sách\nđơn từ"}</Text>
          </View>
          <View style={styles.iconbtn}>
            <IconButton
              icon="text-box-plus"
              color="#7445f6"
              size={40}
              onPress={() => navigation.navigate("Form Created")}
            />
            <Text style={styles.text1}>{"Tạo đơn mới"}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.chu11}>Tổ chức</Text>
        </View>
        <View style={styles.scrollView1}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <IconButton
              icon="office-building"
              color="#7445f6"
              size={40}
              onPress={() => navigation.navigate("Thông tin Công Ty")}
            />
            <Text style={styles.text1}>{"Thông tin\n công ty"}</Text>
          </View>
          <View style={styles.iconbtn}>
            <IconButton
              icon="account-group"
              color="#7445f6"
              size={40}
              onPress={() => navigation.navigate("DANH SÁCH NHÂN VIÊN")}
            />
            <Text style={styles.text1}>{"Danh sách\n nhân viên"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Jobs;
