import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { phonePassword } from "../../../redux/action";

const PhonePasswordScreen = () => {
  const image = require("../../../assets/images/sms-phone.jpg");
  const { messagePhone, errorPhone } = useSelector<any, any>((state) => state.password);
  const styles = useMemo(() => createStyles(), []);
  const [phoneNumber, setphoneNumber] = useState("");
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  let check = ""
  useEffect(() => {
    if (messagePhone) {
      alert(messagePhone);
      dispatch({ type: "clearMessage" });
    }
    if (errorPhone) {
      alert(errorPhone);
      dispatch({ type: "clearError" });
    }
  }, [alert, dispatch, errorPhone]);
  if (messagePhone != null || messagePhone != "Invalid phone") {
    check = messagePhone
  }
  const forgetHandler = async () => {
    await dispatch<any>(phonePassword(phoneNumber));
  };
  if (phoneNumber != "" && check ==  `OTP has been sent to ${phoneNumber}` ) {
    navigation.navigate("Cài lại mật khẩu", {phoneNumber});
  }
  return (
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
          colors={["#f12711", "#f5af19"]}
          style={styles.btn}
        >
          <TouchableOpacity onPress={forgetHandler}>
            <Text style={styles.size}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default PhonePasswordScreen;
