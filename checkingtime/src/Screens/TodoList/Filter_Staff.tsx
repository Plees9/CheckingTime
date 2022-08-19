import React, { useState, useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { queryUser } from "../../../redux/action";
import { useDispatch } from "react-redux";
import createStyles from "./styles_filterStaff";

const data_Name = [
  { label: "Nguyen Son Ba", value: "Người dùng" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Quản trị viên", value: "Quản trị viên" },
];
const data_WorkDone = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "Thực tập sinh", value: "Thực tập sinh" },
];

const Filter_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const route = useRoute()
  const dispatch = useDispatch()
 const [value_Name, setValue_Name] = useState("")
const [value_WorkDone, setValue_WorkDone] = useState("")
  useEffect(() => {
    if (route.params) {
    setValue_Name(route.params.name)
    setValue_WorkDone(route.params.typeOfEmployee) // chua lam xong
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
            data={data_Name}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Chọn nhân viên"
            value={value_Name}
            onChange={(item) => {
              setValue_Name(item.value);
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
            data={data_WorkDone}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Số công việc hoàn thành"
            value={value_WorkDone}
            onChange={(item) => {
              setValue_WorkDone(item.value);
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
            onPress={() => { dispatch<any>(queryUser("", value_Name, value_WorkDone))
              navigation.navigate("Nhân viên", {value_Name, value_WorkDone})}}
          >
            <Text style={styles.text22}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Filter_Staff;
