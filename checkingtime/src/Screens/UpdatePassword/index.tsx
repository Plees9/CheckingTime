import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useMemo, useState, useEffect } from "react";

import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../redux/action";
import Icon from "react-native-vector-icons/AntDesign";
import Icon_1 from "react-native-vector-icons/Ionicons";
import { isNull } from "lodash";
import { forgetPassword } from "../../../redux/action";
const updatePassword = () => {
  const route = useRoute() 
  const dispatch = useDispatch();
  const { message, error } = useSelector<any, any>((state) => state.message);
  const styles = useMemo(() => createStyles(), []);
  const [password, setPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHided, setIsHided] = useState(true);
  // const email1 = route.params.email;
  // const changePasswordHandler = async () => {
  //   await dispatch<any>(resetPassword(otp, password, confirmPassword));
  //   navigation.navigate("SignIn");
  // };
  // const forgetHandler = async () => {
  //   await dispatch<any>(forgetPassword(email1));
  // };
  // useEffect(() => {
  //   if (message) {
  //     alert(message);
  //     dispatch({ type: "clearMessage" });
  //   }
  //   if (error) {
  //     alert(error);
  //     dispatch({ type: "clearError" });
  //   }
  // }, [alert, dispatch, error]);

  // const navigation = useNavigation<any>();

  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Mật khẩu hiện tại</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.text}
            value={otp}
            onChangeText={(text) => setotp(text)}
            secureTextEntry={undefined}
            returnKeyType="done"
            placeholder={"Nhập mật khẩu hiện tại"}
          />
        </View>

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

        <Text style={styles.textTop}> Xác nhận mật khẩu mới</Text>
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
          {password === "" || confirmPassword !== password ? (
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
            {/* <TouchableOpacity onPress={changePasswordHandler}> */}
              <Text style={styles.size}>Xác nhận</Text>
            {/* </TouchableOpacity> */}
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default updatePassword;
