import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";


import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Avatar } from "@rneui/themed";
import { useSelector } from "react-redux";


const data_contractStatus = [
  { label: "Chính thức", value: "Chính thức" },
  { label: "Thử việc", value: "Thử việc" },
  { label: "Thực tập sinh", value: "Thực tập sinh" },
];
const data_typeOfEmployee = [
  { label: "Developer", value: "Developer" },
  { label: "Tester", value: "Tester" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Giám đốc", value: "Giám đốc" },
  { label: "Hành chính", value: "Hành chính" },
  { label: "Kế toán", value: "Kế toán" },
];
const data_gender = [
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
];
const data_role = [
  { label: "Developer", value: "Developer" },
  { label: "Tester", value: "Tester" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Giám đốc", value: "Giám đốc" },
  { label: "Hành chính", value: "Hành chính" },
  { label: "Kế toán", value: "Kế toán" },
];

const UpdateStaff_Admin = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);

  const [date_Birth, setDate_Birth] = useState(moment());
  const [date, setDate] = useState(moment());
  //const [date_Birth, setDate_Birth] = useState(moment(new Date(user.birth)).format("DD/MM/YYYY")); // birthday
  //const [date, setDate] = useState(moment(new Date(user.startWorkingDate)).format("DD/MM/YYYY")); //start working date
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [visible, setVisible] = useState(false);

  const [avatar, setAvatar] = useState(user.avatar.url);

  const [address, setAddress] = useState(user.address);
  const [show_birth, setShow_birth] = useState(false);
  const [show, setShow] = useState(false);

  const [value_contractStatus, setValue_contractStatus] = useState(null);
  const [value_typeOfEmployee, setValue_typeOfEmployee] = useState(null);
  const [value_gender, setValue_gender] = useState(null);
  const [value_role, setValue_role] = useState(null);

  const [isFocus_contractStatus, setIsFocus_contractStatus] = useState(false);
  const [isFocus_typeOfEmployee, setIsFocus_typeOfEmployee] = useState(false);
  const [isFocus_gender, setIsFocus_gender] = useState(false);
  const [isFocus_role, setIsFocus_role] = useState(false);

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Đã update thông tin thành công ", ToastAndroid.SHORT);
  }
  
  let prompt = () => {
    Alert.prompt("xac nhan mat khau", "", (password) => {
      if (password === user.password) {
        navigation.navigate("HomeScreen");
      } else {
        ToastAndroid.show("Mật khẩu không đúng", ToastAndroid.SHORT);
      }
    });
  }


  const UpdateInfoConfirm = async () => {
    Alert.alert(
      "Cập nhật thông tin",
      "Bạn có chắc chắn muốn cập nhật thông tin không?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed" ),
          style: "cancel",
        },
        { text: "Đồng ý", onPress: () => {
          prompt();
          showToast();
        }
        },
      ],

    );
  }
  

  const cameraHandler = () => {
    navigation.navigate("Đổi ảnh đại diện");
  };
    

  return (
    <View style={styles.view}>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          source={{ uri: avatar }}
          onPress={cameraHandler}
        >
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
        
        <Icon name="edit" size={20} color="black" style={styles.icon}></Icon>
      </View>

      <View>
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
              <Text>{moment(date_Birth).format("DD/MM/YYYY")}</Text>
              {show_birth && (
                <DateTimePicker
                  value={new Date(date_Birth.format("YYYY-MM-DD"))}
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
                  }
                  
                  }
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
            data={data_gender}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Giới tính"
            onFocus={() => setIsFocus_gender(true)}
            onBlur={() => setIsFocus_gender(false)}
            value={value_gender}
            onChange={(item) => {
              setValue_gender(item.value);
              setIsFocus_gender(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_gender ? "up" : "down"}
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
            data={data_role}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Vị trí"
            onFocus={() => setIsFocus_role(true)}
            onBlur={() => setIsFocus_role(false)}
            value={value_role}
            onChange={(item) => {
              setValue_role(item.value);
              setIsFocus_role(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_role ? "up" : "down"}
                size={20}
              />
            )}
          />
        </View>
        <View style={styles.khoi_2}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_contractStatus}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Hợp đồng"
            onFocus={() => setIsFocus_contractStatus(true)}
            onBlur={() => setIsFocus_contractStatus(false)}
            value={value_contractStatus}
            onChange={(item) => {
              setValue_contractStatus(item.value);
              setIsFocus_contractStatus(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_contractStatus ? "up" : "down"}
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
            data={data_typeOfEmployee}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Loại hình..."
            onFocus={() => setIsFocus_typeOfEmployee(true)}
            onBlur={() => setIsFocus_typeOfEmployee(false)}
            value={value_typeOfEmployee}
            onChange={(item) => {
              setValue_typeOfEmployee(item.value);
              setIsFocus_typeOfEmployee(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_typeOfEmployee ? "up" : "down"}
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
        <TouchableOpacity onPress={UpdateInfoConfirm}>
          <Text style={styles.text22}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default UpdateStaff_Admin;
