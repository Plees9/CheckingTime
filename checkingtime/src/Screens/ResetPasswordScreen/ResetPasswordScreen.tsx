import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useMemo, useState, useEffect } from "react";

import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../redux/action";
import Icon from "react-native-vector-icons/AntDesign";
import Icon_1 from "react-native-vector-icons/Ionicons";
import { isNull } from "lodash";

const ResetPasswordScreen = () => {
  const dispatch = useDispatch();
  const { message, error } = useSelector<any, any>((state) => state.message);
  const styles = useMemo(() => createStyles(), []);
  const [password, setPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHided, setIsHided] = useState(true);

  const changePasswordHandler = async () => {
    await dispatch<any>(resetPassword(otp, password, confirmPassword));
    navigation.navigate("SignIn");
  };

  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [alert, dispatch, error]);

  const navigation = useNavigation<any>();

  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Nhập mã OTP</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.text}
            value={otp}
            onChangeText={(text) => setotp(text)}
            secureTextEntry={undefined}
            returnKeyType="done"
            placeholder={"Vui lòng nhập mã OTP trong vòng 5 phút"}
          />
        </View>
        <Text style={styles.textnote}>
          Xin đợi 1 phút trước khi yêu cầu gửi lại OTP
        </Text>

        <Text style={styles.textTop}> Mật khẩu mới</Text>
        <View style={styles.confirmPassword}>
          <TextInput
            style={styles.text}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={isHided}
            returnKeyType="done"
            placeholder={"Nhập mật khẩu mới"}
          />
          <TouchableOpacity
            onPressIn={() => setIsHided(false)}
            onPressOut={() => setIsHided(true)}
            style={styles.icon_confirmPassword}
          >
            <View>
              <Icon_1
                name={isHided == true ? "eye" : "eye-off"}
                size={20}
                color={"#595959"}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.textTop}> Xác nhận mật khẩu</Text>
        <View style={styles.confirmPassword}>
          <TextInput
            style={styles.text}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
            returnKeyType="done"
            placeholder={"Xác nhận mật khẩu mới"}
          />
          <View style={styles.icon_confirmPassword}>
<<<<<<< HEAD
          {password === "" || confirmPassword !== password ? (
=======
            {password === "" || confirmPassword !== password ? (
>>>>>>> ba71d555e7f1ee4d37a40775f2a1999a905b8e78
              <Icon name="exclamationcircle" size={17} color="#d22d2c" />
            ) : (
              <Icon name="checkcircle" size={17} color="#51c92b" />
            )}
          </View>
        </View>

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
