import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { phonePassword } from "../../../redux/action";
import Toast from "react-native-toast-message";

const PhonePasswordScreen = () => {
  const image = require("../../../assets/images/sms-phone.jpg");
  const { messagePhone, errorPhone } = useSelector<any, any>((state) => state.password);
  const styles = useMemo(() => createStyles(), []);
  const [phoneNumber, setphoneNumber] = useState("");
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  let check = ""
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
    if (messagePhone) {
      ToastAlertMessage(messagePhone);
      dispatch({ type: "clearMessage" });
    }
    if (errorPhone) {
      ToastAlertError(errorPhone);
      dispatch({ type: "clearError" });
    }
  }, [ToastAlertMessage,ToastAlertError, dispatch, errorPhone]);
  if (messagePhone != null || messagePhone != "Số điện thoại không đúng") {
    check = messagePhone
  }
  const forgetHandler = async () => {
    await dispatch<any>(phonePassword(phoneNumber));
  };
  if (phoneNumber != "" && check ==  `OTP has been sent to ${phoneNumber}` ) {
    navigation.navigate("Cài lại mật khẩu", {phoneNumber});
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view}>
        <Image style={styles.image} source={image} />
        <Text style={styles.textnote}>
          Vui lòng cung cấp thông tin cần thiết để yêu cầu cấp lại mật khẩu.
        </Text>
        <TextInput
          style={styles.text}
          value={phoneNumber}
          onChangeText={(text) => setphoneNumber(text)}
          secureTextEntry={undefined}
          returnKeyType="done"
          placeholder={"Nhập địa chỉ phoneNumber"}
        ></TextInput>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#8f73f6", "#8f73f6"]}
            style={styles.btn}
          >
            <TouchableOpacity onPress={forgetHandler}>
              <Text style={styles.size}>Xác nhận</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default PhonePasswordScreen;
