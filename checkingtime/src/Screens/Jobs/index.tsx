import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Alert,
  TextInput,
  Button,
  useWindowDimensions,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const Jobs = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.viewHeader}
      >
        <Text style={styles.textHeader}>Thông tin chung</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: "#f2f2f2", margin: 10, borderRadius: 20 }}
      >
        {/* <View>
          <Text style={styles.chu11}>Quản lý chấm công</Text>
        </View> */}

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

        {/* <View>
          <Text style={styles.chu11}>Quản lý chấm công</Text>
        </View> */}

        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.Touch2}
            onPress={() => navigation.navigate("Đơn từ")}
          >
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
            onPress={() => navigation.navigate("Thông tin Công Ty")}
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

        {/* <View>
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
          </View> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Jobs;
