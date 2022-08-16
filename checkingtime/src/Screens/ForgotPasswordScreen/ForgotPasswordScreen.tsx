import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../../redux/action";
import { FONTS } from "../../../constants/theme";
const ForgotPasswordScreen = () => {
  const image = require("../../../assets/images/forgot-password.png");
  const { message, error } = useSelector<any, any>((state) => state.password);
  const styles = useMemo(() => createStyles(), []);
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  let check = ""
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
  if (message != null || message != "Invalid mail") {
    check = message
  }
  const forgetHandler = async () => {
    await dispatch<any>(forgetPassword(email));
  };
  if (email != "" && check ==  `OTP has been sent to ${email}` ) {
    navigation.navigate("Cài lại mật khẩu", {email});
  }
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={image} />
      <Text style={styles.textnote}>
        Vui lòng cung cấp thông tin cần thiết để yêu cầu cấp lại mật khẩu.
      </Text>
      <TextInput
        style={styles.text}
        value={email}
        onChangeText={(text) => setEmail(text)}
        secureTextEntry={undefined}
        keyboardType={"email-address"}
        returnKeyType="done"
        placeholder={"Nhập địa chỉ email"}
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
  );
};

export default ForgotPasswordScreen;
