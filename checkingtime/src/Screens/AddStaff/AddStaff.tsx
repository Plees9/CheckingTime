import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";
import CustomDatePicker from "../Moment/DatePicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const AddStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation<any>();

  const [country, setCountry] = useState("Unknown");

  return (
    <View style={styles.view}>
      <Text style={styles.textWelcome}>Đăng ký</Text>
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
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.styleTT}>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Enter your password again"}
              style={styles.text23}
              returnKeyType="done"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row1}>
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown"
            style={styles.row3}
          >
            <Picker.Item label="Cấp quyền" value="Unknown" />
            <Picker.Item label="Người dùng" value="1" />
            <Picker.Item label="Quản lý" value="2" />
            <Picker.Item label="Quản trị viên" value="3" />
          </Picker>
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
        {/* <TouchableOpacity onPress={loginHandler}> */}
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.text22}>Đăng nhập</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AddStaff;
