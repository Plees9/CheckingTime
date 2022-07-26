import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useMemo, useState, useEffect } from "react";

import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../redux/action";

const ResetPasswordScreen = () => {
  
  const dispatch = useDispatch()
  const { message, error } = useSelector<any>(state => state.message)
  const styles = useMemo(() => createStyles(), []);
  const [password, setPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePasswordHandler = async () => {
    await dispatch<any>(resetPassword(otp, password, confirmPassword));
    navigation.navigate("login");
}

useEffect(() => {
    if (message) {
        alert(message);
        dispatch({ type: "clearMessage" })
    }
    if (error) {
        alert(error);
        dispatch({ type: "clearError" })
    }
}, [alert, message, dispatch, error])

  const navigation = useNavigation<any>();

  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Nhập mã OTP</Text>
        <TextInput
          style={styles.text}
          value={otp}
          onChangeText={(text) => setotp(text)}
          secureTextEntry={undefined}
          returnKeyType="done"
          placeholder={"Vui lòng nhập mã OTP trong vòng 5 phút"}
        ></TextInput>
        <Text style={styles.textnote}>
          Xin đợi 1 phút trước khi yêu cầu gửi lại OTP
        </Text>

        <Text style={styles.textTop}> Mật khẩu mới</Text>
        <TextInput
          style={styles.text}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          returnKeyType="done"
          placeholder={"Nhập mật khẩu mới"}
        ></TextInput>

        <Text style={styles.textTop}> Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.text}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          returnKeyType="done"
          placeholder={"Xác nhận mật khẩu mới"}
        ></TextInput>

        <View style={styles.btn}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#f12711", "#f5af19"]}
            style={styles.btn22}
          >
            <TouchableOpacity onPress={changePasswordHandler}>
              <Text style={styles.size}>Xác nhận</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => Alert.alert("Mã OTP nào đó")}>
            <Text style={styles.textOTP}>Gửi lại OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
