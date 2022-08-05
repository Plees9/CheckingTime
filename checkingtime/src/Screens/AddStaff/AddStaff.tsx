import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useCallback,useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon_1 from "react-native-vector-icons/Ionicons";
import Icon_2 from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/action";

//import PassMeter from "../../../node_modules/react-native-passmeter";

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

const AddStaff = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0)
	const handleClick = useCallback(() => setCount(count + 1), [count]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birth, setBirth] = useState("");

  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
 
  const [isHided, setIsHided] = useState(true);

  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [value_4, setValue_4] = useState("");

  const [isFocus_1, setIsFocus_1] = useState(false);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const [isFocus_3, setIsFocus_3] = useState(false);
  const [isFocus_4, setIsFocus_4] = useState(false);

  const registerHandler = () => {
    const myForm = new FormData();
    const { user, loading } = useSelector<any, any>(state => state.auth)

    myForm.append("name", userName);
    myForm.append("email", email);
    myForm.append("phoneNumber", numberPhone);
    myForm.append("password", password);
    myForm.append("privilege", value_1);
    
    const [birthDay] = useState(moment(new Date(user.birth)).format("DD/MM/YYYY")); 
    myForm.append("birthDay", birthDay);
    const [Sdate] = useState(moment(new Date(user.startWorkingDate)).format("DD/MM/YYYY")); 
    myForm.append("startWorkingDate", Sdate);
    myForm.append("contractStatus", value_2);
    myForm.append("typeOfEmployee", value_4);

    myForm.append("role", value_3);
    console.log(birthDay);
    dispatch<any>(register(myForm));
    navigation.navigate("AddStaff");
  };

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Xác nhận đăng ký thành công", ToastAndroid.SHORT);
  }

 

  return (
    <View style={styles.view}>
      <View>
        <View style={styles.styleTT}>
          <TextInput
            placeholder={"Họ và tên"}
            style={styles.text23}
            returnKeyType="done"
            value={userName}
            secureTextEntry={false}
            onChangeText={setUserName}
          />
        </View>
        {/* Email */}
        <View style={styles.styleTT}>
          <TextInput
            placeholder={"E-mail"}
            style={styles.text23}
            returnKeyType="done"
            keyboardType="email-address"
            value={email}
            secureTextEntry={false}
            onChangeText={setEmail}
          />
        </View>
        {/* Số điện thoại */}
        <View>
          <View style={styles.styleTT}>
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
        {/* PassWord */}
        <View style={styles.styleTT}>
          <TextInput
            placeholder={"Mật khẩu"}
            style={styles.text23}
            returnKeyType="done"
            value={password}
            secureTextEntry={isHided}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPressIn={() => setIsHided(false)}
            onPressOut={() => setIsHided(true)}
          >
            <Icon_1
              name={isHided == true ? "eye" : "eye-off"}
              size={20}
              color={"#595959"}
            />
          </TouchableOpacity>
        </View>
        {/* <View>
          <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
          />
        </View> */}
        <View style={styles.styleTT}>
          <TextInput
            placeholder={"Nhập lại mật khẩu"}
            style={styles.text23}
            returnKeyType="done"
            maxLength={16}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {password === "" || confirmPassword !== password ? (
            <Icon_2 name="exclamationcircle" size={17} color="#d22d2c" />
          ) : (
            <Icon_2 name="checkcircle" size={17} color="#51c92b" />
          )}
        </View>

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
                name={isFocus_1 ? "up" : "down"}
                size={20}
              />
            )}
          />
        </View>

        <Pressable style={styles.row2} onPress={() => setShow(true)}>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date(date.format("YYYY/MM/DD"))}
                mode={"date"}
                display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
                  console.log(selectedDate);
                }}
              />
            )}
          </View>

          <Icon
            style={styles.styleIcon}
            name="calendar"
            size={20}
            color="orange"
          />
        </Pressable>
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
            placeholder="Nhân sự"
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
                name={isFocus_2 ? "up" : "down"}
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
            placeholder="Vai trò"
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
                name={isFocus_3 ? "up" : "down"}
                size={20}
              />
            )}
          />
        </View>
      </View>
      <View style={{ margin: 5 }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data_4}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Hợp đồng"
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus_4(true)}
          onBlur={() => setIsFocus_4(false)}
          value={value_4}
          onChange={(item) => {
            setValue_4(item.value);
            setIsFocus_4(false);
          }}
          renderRightIcon={() => (
            <AntDesign
              style={styles.icon}
              color="orange"
              name={isFocus_4 ? "up" : "down"}
              size={20}
            />
          )}
        />
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.text22}>Đăng ký</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};


export default React.memo(AddStaff);
