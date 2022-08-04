import React, { useState, useMemo } from "react";
import { ScrollView, View, Text, TouchableOpacity ,Button, Pressable} from "react-native";
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
  
  {label:"Đơn nghỉ bản thân kết hôn", value:"Đơn nghỉ bản thân kết hôn" },
  {label:"Đơn nghỉ con kết hôn", value:"Đơn nghỉ con kết hôn" }  ,
  {label:"Đơn nghỉ tang", value:"Đơn nghỉ tang" } ,
  {label:"Đơn nghỉ phép năm", value:"Đơn nghỉ phép năm" } ,
  {label:"Đơn nghỉ phép năm trước", value:"Đơn nghỉ phép năm trước" } ,
  {label:"Đơn nghỉ không lương", value:"Đơn nghỉ không lương" } ,
  {label:"Đơn làm theo giờ", value:"Đơn làm theo giờ" } ,
  {label:"Đơn work from home", value:"Đơn work from home" } ,
  {label:"Đơn sửa chấm công", value:"Đơn sửa chấm công" } ,
  {label:"Đơn công tác", value:"Đơn công tác" } ,
];
const data_11 = [
  {label:"Đang xử lý", value:"Đang xử lý" },
  {label:"Đã từ chối", value:"Đã từ chối" } ,
  {label:"Đã xác nhận", value:"Đã xác nhận" } ,
  {label:"Đã hủy", value:"Đã hủy" } ,
  {label:"Hệ thống huỷ đơn do lịch làm việc không phù hợp", value:"Hệ thống huỷ đơn do lịch làm việc không phù hợp" } ,
  {label:"Hệ thống huỷ đơn do quá hạn chốt đơn", value:"Hệ thống huỷ đơn do quá hạn chốt đơn" } ,
];
const data_12 = [
  {label:"Đã xác nhận", value:"Đã xác nhận" },
];  





  

const FDontu = () => {
  const navigation = useNavigation<any>();
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

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
          <Pressable onPress={() => setShow(true)}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date(date.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={show}
display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>

          <View>
            <Text> - </Text>
          </View>
          <Pressable onPress={() => setShow(true)}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date(date.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={show}
                display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
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
          <Pressable onPress={() => setShow(true)}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date(date.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={show}
                display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </Pressable>

          <View>
            <Text> - </Text>
          </View>
          <Pressable onPress={() => setShow(true)}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date(date.format("YYYY/MM/DD"))}
                mode={"date"}
                disabled={show}
                display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
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
          colors={["#f12711", "#f5af19"]}
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