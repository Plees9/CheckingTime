import React, { useState, useMemo } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CustomDatePicker from "../Moment/DatePicker";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
const data_10 = [
  { label: "Đơn nghỉ bản thân kết hôn", value: "Đơn nghỉ bản thân kết hôn" },
  { label: "Đơn nghỉ con kết hôn", value: "Đơn nghỉ con kết hôn" },
  { label: "Đơn nghỉ tang", value: "Đơn nghỉ tang" },
  { label: "Đơn nghỉ phép năm", value: "Đơn nghỉ phép năm" },
  { label: "Đơn nghỉ phép năm trước", value: "Đơn nghỉ phép năm trước" },
  { label: "Đơn nghỉ không lương", value: "Đơn nghỉ không lương" },
  { label: "Đơn làm theo giờ", value: "Đơn làm theo giờ" },
  { label: "Đơn work from home", value: "Đơn work from home" },
  { label: "Đơn sửa chấm công", value: "Đơn sửa chấm công" },
  { label: "Đơn công tác", value: "Đơn công tác" },
];
const data_11 = [
  { label: "Đang xử lý", value: "Đang xử lý" },
  { label: "Đã từ chối", value: "Đã từ chối" },
  { label: "Đã xác nhận", value: "Đã xác nhận" },
  { label: "Đã hủy", value: "Đã hủy" },
  {
    label: "Hệ thống huỷ đơn do lịch làm việc không phù hợp",
    value: "Hệ thống huỷ đơn do lịch làm việc không phù hợp",
  },
  {
    label: "Hệ thống huỷ đơn do quá hạn chốt đơn",
    value: "Hệ thống huỷ đơn do quá hạn chốt đơn",
  },
];
const data_12 = [{ label: "Đã xác nhận", value: "Đã xác nhận" }];

const FDontu = () => {
  const navigation = useNavigation<any>();
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [dateCreated_Start, setDateCreated_Start] = useState(moment());
  const [dateCreated_End, setDateCreated_End] = useState(moment());
  const [dateApply_Start, setDateApply_Start] = useState(moment());
  const [dateApply_End, setDateApply_End] = useState(moment());
  const [showCreated_Start, setShowCreated_Start] = useState(false);
  const [showCreated_End, setShowCreated_End] = useState(false);
  const [showApply_Start, setShowApply_Start] = useState(false);
  const [showApply_End, setShowApply_End] = useState(false);

  const [value_10, setValue_10] = useState("");
  const [value_11, setValue_11] = useState("");
  const [value_12, setValue_12] = useState("");
  const [isFocus_10, setIsFocus_10] = useState(null);
  const [isFocus_11, setIsFocus_11] = useState(null);
  const [isFocus_12, setIsFocus_12] = useState(null);

  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Loại đơn từ</Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_10}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả đơn từ"
            value={value_10}
            onChange={(item) => {
              setValue_10(item.value);
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

        <Text style={styles.textTop2}> Trạng thái đơn từ</Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_11}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả trạng thái"
            value={value_11}
            onChange={(item) => {
              setValue_11(item.value);
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

        <Text style={styles.textTop2}> Chi nhánh</Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_12}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Tất cả chi nhánh"
            value={value_12}
            onChange={(item) => {
              setValue_12(item.value);
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
        <Text style={styles.textTop2}> Thời gian tạo</Text>

        <View style={styles.row1}>
          <Text style={styles.textTop3}> Ngày bắt đầu</Text>
          <Text style={styles.textTop3}> Ngày kết thúc</Text>
        </View>
        <View style={styles.row5}>
          <Pressable onPress={() => setShowCreated_Start(true)}>
            <Text>{dateCreated_Start.format("DD/MM/YYYY")}</Text>
            {showCreated_Start && (
              <DateTimePicker
                value={new Date(dateCreated_Start.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={showCreated_Start}
                display="default"
                onChange={(event, selectedDate) => {
                  setDateCreated_Start(moment(selectedDate));
                  setShowCreated_Start(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>

          <View>
            <Text> - </Text>
          </View>
          <Pressable onPress={() => setShowCreated_End(true)}>
            <Text>{dateCreated_End.format("DD/MM/YYYY")}</Text>
            {showCreated_End && (
              <DateTimePicker
                value={new Date(dateCreated_End.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={showCreated_End}
                display="default"
                onChange={(event, selectedDate) => {
                  setDateCreated_End(moment(selectedDate));
                  setShowCreated_End(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>
          <Icon name="calendar" size={20} color="orange" />
        </View>

        <Text style={styles.textTop2}> Thời gian áp dụng</Text>

        <View style={styles.row1}>
          <Text style={styles.textTop3}> Ngày bắt đầu</Text>
          <Text style={styles.textTop3}> Ngày kết thúc</Text>
        </View>
        <View style={styles.row5}>
          <Pressable onPress={() => setShowApply_Start(true)}>
            <Text>{dateApply_Start.format("DD/MM/YYYY")}</Text>
            {showApply_Start && (
              <DateTimePicker
                value={new Date(dateApply_Start.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={showApply_Start}
                display="default"
                onChange={(event, selectedDate) => {
                  setDateApply_Start(moment(selectedDate));
                  setShowApply_Start(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>

          <View>
            <Text> - </Text>
          </View>
          <Pressable onPress={() => setShowApply_End(true)}>
            <Text>{dateApply_End.format("DD/MM/YYYY")}</Text>
            {showApply_End && (
              <DateTimePicker
                value={new Date(dateApply_End.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={showApply_End}
                display="default"
                onChange={(event, selectedDate) => {
                  setDateApply_End(moment(selectedDate));
                  setShowApply_End(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>
          <Icon name="calendar" size={20} color="orange" />
        </View>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#8f73f6", "#8f73f6"]}
          style={styles.btn2}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Tab Don Tu")}>
            <Text style={styles.text22}>Lọc đơn từ</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default FDontu;
