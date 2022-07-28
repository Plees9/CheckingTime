import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import CustomDatePicker from "../Moment/DatePicker";
import { Avatar } from "@rneui/themed";

const UpdateStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const imageBgr = require("../../../assets/images/ah.jpg");

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Đã update thông tin thành công ", ToastAndroid.SHORT);
  }

  return (
    <View style={styles.view}>
      {/* <Text style={styles.textWelcome}>Thay đổi thông tin</Text> */}
      {/* <ImageBackground source={imageBgr} resizeMode="cover" style={styles.image}> */}

      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          icon={{ name: "adb", type: "material" }}
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
          style={styles.text23_1}
          placeholder={"Giới tính"}
          returnKeyType="done"
          value={date}
          onChangeText={setDate}
          secureTextEntry={false}
        />
      </View>
      {/* </ImageBackground> */}

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
          {/* <View style={styles.text24_1}>
            <TextInput placeholder={"Ngày sinh"} />
          </View> */}
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
            {/* <View style={styles.text24_1}>
              <TextInput placeholder={"Vị trí"} />
            </View> */}
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
            {/* <View style={styles.text24_1}>
              <TextInput placeholder={"Vị trí"} />
            </View> */}
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.row1}>
          <CustomDatePicker
            defaultDate={new Date()}
            onDateChange={(value: any) => console.log(value)}
          />
           <Icon
            style={styles.styleIcon}
            name="birthday-cake"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.row2}>
          <CustomDatePicker
            defaultDate={new Date()}
            onDateChange={(value: any) => console.log(value)}
          />
          <Icon
            style={styles.styleIcon}
            name="briefcase"
            size={20}
            color="black"
          />
        </View>
      </View>
      {/* Tình trạng hợp đồng, Loại hình nhân viên */}
      <View style={styles.row}>
        <View style={styles.row1}>
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown"
            style={styles.row3}
          >
            <Picker.Item label="Hợp đồng" value="Un" />
            <Picker.Item label="Chính thức" value="4" />
            <Picker.Item label="Thử việc" value="5" />
            <Picker.Item label="Thực tập sinh" value="6" />
          </Picker>
        </View>
        <View style={styles.row1}>
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown"
            style={styles.row3}
          >
            <Picker.Item label="Loại hình nhân viên" value="NV" />
            <Picker.Item label="Developer" value="7" />
            <Picker.Item label="Tester" value="8" />
            <Picker.Item label="Quản lý" value="9" />
            <Picker.Item label="Giám đốc" value="10" />
            <Picker.Item label="Hành chính" value="11" />
            <Picker.Item label="Kế toán" value="12" />
          </Picker>
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
