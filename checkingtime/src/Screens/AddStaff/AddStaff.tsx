import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

//import { PasswordMeter } from 'react-native-password-meter';
//import PassMeter from "react-native-passmeter";

import CustomDatePicker from "../Moment/DatePicker";

const data_1 = [
  { label: "Người dùng", value: "1" },
  { label: "Quản lý", value: "2" },
  { label: "Quản trị viên", value: "3" },
];
const data_2 = [

  { label: "Chính thức", value: "5" },
  { label: "Thử việc", value: "6" },
  { label: "Thực tập sinh", value: "7" },
];
const data_3 = [
  { label: "Developer", value: "9" },
  { label: "Tester", value: "10" },
  { label: "Quản lý", value: "11" },
  { label: "Giám đốc", value: "12" },
  { label: "Hành chính", value: "13" },
  { label: "Kế toán", value: "14" },
];

const AddStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [value_1, setValue_1] = useState(null);
  const [value_2, setValue_2] = useState(null);
  const [value_3, setValue_3] = useState(null);
  const [isFocus_1, setIsFocus_1] = useState(false);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const [isFocus_3, setIsFocus_3] = useState(false);

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Xác nhận đăng ký thành công", ToastAndroid.SHORT);
  }

  const MAX_LEN = 16,
    MIN_LEN = 8,
    PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

  return (
    <View style={styles.view}>
      {/* <Text style={styles.textWelcome}>Đăng ký thành viên</Text> */}
      <View>
        <View style={styles.styleTT}>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Họ và tên"}
              style={styles.text23}
              returnKeyType="done"
              value={userName}
              secureTextEntry={false}
              onChangeText={setUserName}
            />
          </View>
        </View>
        {/* Email */}
        <View style={styles.styleTT}>
          <View style={styles.text24}>
            <TextInput
              placeholder={"E-mail"}
              style={styles.text23}
              returnKeyType="done"
              value={email}
              secureTextEntry={false}
              onChangeText={setEmail}
            />
          </View>
        </View>
        {/* Số điện thoại */}
        <View>
          <View style={styles.styleTT}>
            <View style={styles.text24}>
              <TextInput
                placeholder={"Số điện thoại"}
                style={styles.text23}
                keyboardType={"number-pad"}
                returnKeyType="done"
                value={numberPhone}
                secureTextEntry={false}
                onChangeText={setNumberPhone}
              />
            </View>
          </View>
        </View>
        {/* PassWord */}
        <View style={styles.styleTT}>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Enter your password"}
              style={styles.text23}
              returnKeyType="done"
              maxLength={16}
              //value={password.value}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>

        {/* <PassMeter
          showLabels
          password={password}
          maxLength={MAX_LEN}
          minLength={MIN_LEN}
          labels={PASS_LABELS}
        /> */}

        <Text style={styles.textExemple}>8-16 ký tự ví dụ: eX@mpL3*</Text>
      </View>
      <View style={styles.row}>
        <View>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Cấp quyền"
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus_1(true)}
            onBlur={() => setIsFocus_1(false)}
            value={value_1}
            onChange={(item) => {
              setValue_1(item.value);
              setIsFocus_1(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_1 ? 'up' : 'down'}
                size={20}
              />
            )}
            // // renderItem={renderItem}
          />
        </View>
        <View style={styles.row2}>
          <CustomDatePicker
            defaultDate={new Date()}
            onDateChange={(value: any) => console.log(value)}
          />
          <Icon
            style={styles.styleIcon}
            name="calendar"
            size={20}
            color="orange"
          />
        </View>
      </View>
      {/* Tình trạng hợp đồng, Loại hình nhân viên */}
      <View style={styles.row}>
        <View>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Hợp đồng"
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus_2(true)}
            onBlur={() => setIsFocus_2(false)}
            value={value_2}
            onChange={(item) => {
              setValue_2(item.value);
              setIsFocus_2(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_2 ? 'up' : 'down'}
                size={20}
              />
            )}
           
          />
        </View>
        <View>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_3}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Loại hình..."
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus_3(true)}
            onBlur={() => setIsFocus_3(false)}
            value={value_3}
            onChange={(item) => {
              setValue_3(item.value);
              setIsFocus_3(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_3 ? 'up' : 'down'}
                size={20}
              />
            )}
            // // renderItem={renderItem}
          />
        </View>
      </View>
   
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btn2}
      >
        {/* <TouchableOpacity onPress={loginHandler}> */}
        <TouchableOpacity onPress={showToast}>
          <Text style={styles.text22}>Đăng ký</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AddStaff;
