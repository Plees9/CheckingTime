import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

//import CustomDatePicker from "../Moment/DatePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";

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

const UpdateStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [date_Birth, setDate_Birth] = useState(moment());
  const [date, setDate] = useState(moment());
  const [date_Gender, setDate_Gender] = useState("");
  const [avatar, setAvatar] = useState(user.avatar.url);

  const [address, setAddress] = useState("");
  
  const [show_birth, setShow_birth] = useState(false);
  const [show, setShow] =useState(false);


  const [value_2, setValue_2] = useState(null);
  const [value_3, setValue_3] = useState(null);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const [isFocus_3, setIsFocus_3] = useState(false);

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Đã update thông tin thành công ", ToastAndroid.SHORT);
  }

  return (
    <View style={styles.view}>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          source={{ uri: avatar }}
          containerStyle={{ backgroundColor: "orange" }}
        >
          <Avatar.Accessory size={24} />
        </Avatar>
      </View>
      <View style={styles.textuserName}>
        <TextInput
          placeholder={"Họ và tên"}
          style={styles.text23_1}
          returnKeyType="done"
          value={userName}
          secureTextEntry={false}
          onChangeText={setUserName}
        ></TextInput>
      </View>

      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.text23_2}
          placeholder={"Giới tính"}
          returnKeyType="done"
          value={date_Gender}
          onChangeText={setDate_Gender}
          secureTextEntry={false}
        />
      </View>

      <View >
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
        <View>
          <View style={styles.styleTT}>
            <View style={styles.text24}>
              <TextInput
                placeholder={"Địa chỉ"}
                style={styles.text23}
                returnKeyType="done"
                value={address}
                secureTextEntry={false}
                onChangeText={setAddress}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.row1}>

  
          <Pressable style={styles.row2} onPress={() => setShow_birth(true)}>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <Text>{date_Birth.format("DD/MM/YYYY")}</Text>
              {show_birth && (
                <DateTimePicker
                  value={new Date(date_Birth.format("YYYY/MM/DD"))}
                  mode={"date"}
                  display="default"
                  onChange={(event_birth, selectedDate_birth) => {
                    setDate_Birth(moment(selectedDate_birth));
                    setShow_birth(false);
                    console.log(selectedDate_birth);
                  }}
                />
              )}
            </View>

            <Icon
              style={styles.styleIcon}
              name="birthday-cake"
              size={20}
              color="orange"
            />
          </Pressable>
        
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
              name="briefcase"
              size={20}
              color="orange"
            />
          </Pressable>
          </View>
        
      
      {/* Tình trạng hợp đồng, Loại hình nhân viên */}
      
        <View style={styles.khoi_2}>
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
            placeholder="Hợp đồng"
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
          <Dropdown
            style={styles.dropdown_1}
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
            placeholder="Loại hình..."
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
      
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={showToast}>
          <Text style={styles.text22}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default UpdateStaff;
