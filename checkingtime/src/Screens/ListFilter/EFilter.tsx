import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const data_4 = [
  { label: "Giám đốc", value: "9" },
  { label: "Nhân sự", value: "10" },
  { label: "Kế toán", value: "11" },
  { label: "Hành chính", value: "12" },
  { label: "Developer", value: "13" },
  { label: "Tester", value: "14" },
];
const data_5 = [
  { label: "Developer", value: "15" },
  { label: "Tester", value: "16" },
  { label: "Quản lý", value: "17" },
  { label: "Giám đốc", value: "18" },
  { label: "Hành chính", value: "19" },
  { label: "Kế toán", value: "20" },

];
const data_6 = [
  { label: "Sắp đi làm", value: "21" },
  { label: "Đang đi làm", value: "22" },
  { label: "Đã nghỉ việc", value: "23" },
  { label: "Nghỉ không lương daì hạn", value: "24" },
  { label: "Nghỉ sinh", value: "25" },
  
];
const data_7 = [
  { label: "Chính thức", value: "26" },
  { label: "Thử việc", value: "27" },
  { label: "Thực tập sinh", value: "28" },
  { label: "Cộng tác viên", value: "29" },
  { label: "Học việc", value: "30" },

];
const data_8 = [
  { label: "Đang hoạt động", value: "31" },
  { label: "Không hoạt động", value: "32" },
 
];
const data_9 = [
  { label: "Đã sử dụng", value: "33" },
  { label: "Chưa sử dụng", value: "34" },

];


const EFilter = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [selectedValue, setSelectedValue] = useState("");

  const [value_4, setValue_4] = useState(null);
  const [value_5, setValue_5] = useState(null);
  const [value_6, setValue_6] = useState(null);
  const [value_7, setValue_7] = useState(null);
  const [value_8, setValue_8] = useState(null);
  const [value_9, setValue_9] = useState(null);

  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Phòng ban</Text>
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
            placeholder="Tất cả phòng ban"
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

        <Text style={styles.textTop2}> Vị trí công việc</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_5}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả vị trí công việc"
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

        <Text style={styles.textTop2}> Trạng thái nhân sự</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_6}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả trạng thái nhân sự"
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

        <Text style={styles.textTop2}> Loại hình nhân sự</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_7}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả loại hình nhân sự"
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

        <Text style={styles.textTop2}> Trạng thái hoạt động</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_8}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả trạng thái hoạt động"
            value={value_8}
            onChange={(item) => {
              setValue_8(item.value);
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

        <Text style={styles.textTop2}> Trạng thái sử dụng</Text>
        <View style={styles.style}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_9}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả trạng thái sử dụng"
            value={value_9}
            onChange={(item) => {
              setValue_9(item.value);
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
          colors={["#8f73f6", "#b5a4fc"]}
          style={styles.btn2}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("DANH SÁCH NHÂN VIÊN")}
          >
            <Text style={styles.text22}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default EFilter;
