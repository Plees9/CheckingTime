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
import { useNavigation, useRoute } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useDispatch, useSelector } from "react-redux";
//import CustomDatePicker from "../Moment/DatePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Avatar } from "@rneui/themed";
import { loadUser, updateProfile } from "../../../redux/action";
import mime from "mime";
const data_2 = [
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
];

const UpdateStaff = () => {
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);
  const [date_Birth, setDate_Birth] = useState(moment(new Date(user.birth)))
  const [address, setAddress] = useState(user.address);
  const route = useRoute();
  const [show_birth, setShow_birth] = useState(false);
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [value_2, setValue_2] = useState(user.gender);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const navigation = useNavigation<any>();
  let { message, error, isUpdated } = useSelector<any, any>((state) => state.message);
  const [country, setCountry] = useState("Unknown");
  let flag = 2
  function showToast() {
    ToastAndroid.show("Đã update thông tin thành công ", ToastAndroid.SHORT);
  }
  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image)
      }
    }
  }, [route]);
  const updateHandler = async () => {
    const myForm = new FormData();
    myForm.append(
      "avatar",
      JSON.parse(
        JSON.stringify({
          uri: avatar,
          type: mime.getType(avatar),
          name: avatar.split("/").pop(),
        })
      )
    );
    const Sdate = moment(date_Birth)
    myForm.append("name", userName)
    myForm.append("email", email)
    myForm.append("phoneNumber", numberPhone)
    myForm.append("address", address)
    myForm.append("birth", String(Sdate))
    myForm.append("gender", value_2)
    await dispatch<any>(updateProfile(myForm))
    if (message == "Profile updated successfully") {
        await dispatch <any> (loadUser)
    }
  }
  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }   
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
      navigation.navigate("UpdateStaff")
    }
    if (isUpdated) {
        dispatch <any>(loadUser());
    }
  }, [alert, dispatch, error, isUpdated]);
  console.log(isUpdated + "******")
  console.log(message)
  return (
    <View style={styles.view}>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          icon={{ name: "adb", type: "material" }}
          containerStyle={{ backgroundColor: "orange" }}
          source={{ uri: avatar }}
          onPress={() => navigation.navigate("Đổi ảnh đại diện")}
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
              <Text>{date_Birth.format("DD/MM/YYYY")}</Text>
              {show_birth && (
                <DateTimePicker
                  value={new Date(date_Birth.format("DD/MM/YYYY"))}
                  mode={"date"}
                  display="default"
                  onChange={(event_birth, selectedDate_birth) => {
                    setDate_Birth(moment(selectedDate_birth));
                    setShow_birth(false);
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
            placeholder="Giới tính"
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
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={updateHandler}>
          <Text style={styles.text22}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default UpdateStaff;
