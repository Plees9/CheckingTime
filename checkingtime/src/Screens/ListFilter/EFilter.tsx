import React, { useState, useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { queryUser } from "../../../redux/action";
import { useDispatch } from "react-redux";


const data_1 = [
  { label: "Người dùng", value: "Người dùng" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Quản trị viên", value: "Quản trị viên" },
];
const data_2 = [
  { label: "Chính thức", value: "Chính thức" },
  { label: "Thử việc", value: "Thử việc" },
  { label: "Thực tập sinh", value: "Thực tập sinh" },
];
const data_3 = [
  { label: "Developer", value: "Developer" },
  { label: "Tester", value: "Tester" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Giám đốc", value: "Giám đốc" },
  { label: "Hành chính", value: "Hành chính" },
  { label: "Kế toán", value: "Kế toán" },
];
const data_4 = [
  { label: "Đang làm việc", value: "Đang làm việc" },
  { label: "Đã nghỉ việc", value: "Đã nghỉ việc" },
  { label: "Nghỉ có phép", value: "Nghỉ có phép" },
  { label: "Nghỉ không phép", value: "Nghỉ không phép" },
];


const EFilter = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const route = useRoute()
  const dispatch = useDispatch()
  const [value_4, setValue_4] = useState("");
  const [value_5, setValue_5] = useState("");
  const [value_6, setValue_6] = useState("");
  const [value_7, setValue_7] = useState("");
  useEffect(() => {
    if (route.params) {
    setValue_4(route.params.privilege)
    setValue_5(route.params.typeOfEmployee)
    setValue_6(route.params.role) 
    setValue_7(route.params.contractStatus)
    }
  }, [route]);
  console.log(route.params)
  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Cấp quyền </Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_1}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Cấp quyền"
            value={value_4}
            onChange={(item) => {
              setValue_4(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <Text style={styles.textTop2}> Nhân sự</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_2}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Nhân sự"
            value={value_5}
            onChange={(item) => {
              setValue_5(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <Text style={styles.textTop2}> Vai trò </Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_3}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Vai trò"
            value={value_6}
            onChange={(item) => {
              setValue_6(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <Text style={styles.textTop2}> Hợp đồng</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_4}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Hợp đồng"
            value={value_7}
            onChange={(item) => {
              setValue_7(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

       
        

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#8f73f6", "#8f73f6"]}
          style={styles.btn2}
        >
          <TouchableOpacity
            onPress={() => { dispatch<any>(queryUser("", value_4, value_5, value_6, value_7))
              navigation.navigate("DANH SÁCH NHÂN VIÊN", {value_4, value_5, value_6, value_7})}}
          >
            <Text style={styles.text22}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default EFilter;
