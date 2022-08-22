import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useMemo, useState, useEffect } from "react";

import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, updatePassword } from "../../../redux/action";
import Icon from "react-native-vector-icons/AntDesign";
import Icon_1 from "react-native-vector-icons/Ionicons";
import { isNull } from "lodash";
import { forgetPassword } from "../../../redux/action";
import Toast from "react-native-toast-message";
const UpdatePassword = () => {
  const route = useRoute() 
  const dispatch = useDispatch();
  const { message, error } = useSelector<any, any>((state) => state.password);
  console.log(error)
  const styles = useMemo(() => createStyles(), []);
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHided, setIsHided] = useState(true);
  const updatePasswordHandler = async () => {
    const myForm = new FormData();
    myForm.append("oldPassword", oldPassword )
    myForm.append("newPassword", newPassword)
    myForm.append("confirmPassword", confirmPassword)
    await dispatch<any>(updatePassword(myForm));
    
  };
  const ToastAlertMessage = (message: any) => {
    Toast.show({ text1: message, type: "success" });
  };
  const ToastAlertError = (error: any) => {
    Toast.show({ text1: error, type: "error" });
  };
  const configToast = {
    success: (internal: any) => (
      <View
        style={{
          width: "95%",
          height: 40,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
      </View>
    ),
    error: (internal: any) => (
      <View
        style={{
          width: "95%",
          height: 40,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
      </View>
    ),
  };
  useEffect(() => {
    if (message) {
      ToastAlertMessage(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      ToastAlertError(error);
      dispatch({ type: "clearError" });
    }
  }, [ToastAlertError, ToastAlertMessage, dispatch, error, message]);

  const navigation = useNavigation<any>();

  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Mật khẩu hiện tại</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.text}
            value={oldPassword}
            onChangeText={(text) => setoldPassword(text)}
            secureTextEntry={true}
            returnKeyType="done"
            placeholder={"Nhập mật khẩu hiện tại"}
          />
        </View>

        <Text style={styles.textTop}> Mật khẩu mới</Text>
        <View style={styles.confirmPassword}>
          <TextInput
            style={styles.text}
            value={newPassword}
            onChangeText={(text) => setnewPassword(text)}
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
            {newPassword === "" || confirmPassword !== newPassword ? (
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
            colors={["#8f73f6", "#8f73f6"]}
            style={styles.btn22}
          >
            <TouchableOpacity onPress={updatePasswordHandler}>
              <Text style={styles.size}>Xác nhận</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default UpdatePassword;
