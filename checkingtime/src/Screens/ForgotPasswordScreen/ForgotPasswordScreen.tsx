import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState } from "react";

import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../../redux/action";
import { FONTS } from '../../../constants/theme';
const ForgotPasswordScreen = () => {
  const image = require("../../../assets/images/forgot-password.png");

  const styles = useMemo(() => createStyles(), []);
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const forgetHandler = async () => {
    await dispatch<any>(forgetPassword(email));
    navigation.navigate("Cài lại mật khẩu");
  };
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={image} />
      <Text style={styles.textnote}>Vui lòng cung cấp thông tin cần thiết để yêu cầu cấp lại mật khẩu.</Text>
      <TextInput
        style={styles.text}
        value={email}
        onChangeText={(text) => setEmail(text)}
        secureTextEntry={undefined}
        keyboardType={"number-pad"}
        returnKeyType="done"
        placeholder={"Số điện thoại đăng nhập"}
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

export default ForgotPasswordScreen;
