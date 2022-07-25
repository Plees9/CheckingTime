import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  SectionList,
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

import { Picker } from "@react-native-picker/picker";

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
            <Picker.Item label="Người dùng" value="Australia" />
            <Picker.Item label="Quản lý" value="Belgium" />
            <Picker.Item label="Quản trị viên" value="Canada" />
          </Picker>
        </View>
        <TextInput
          style={styles.row2}
          placeholder="Ngày bắt đầu làm việc"
        ></TextInput>
      </View>
    </View>
  );
};

export default AddStaff;
