import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";

import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../../redux/action";
const ForgotPasswordScreen = () => {
  const styles = useMemo(() => createStyles(), []);
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();
    const dispatch = useDispatch()

    const forgetHandler = async () => {
        await dispatch<any>(forgetPassword(email))
        navigation.navigate("ResetPassword")

    }
  return (
    <View style={styles.view}>
      <Text style={styles.textWelcome}>Forgot Password</Text>
      <TextInput
        style={styles.text}
        value={email}
        onChangeText={(text) => setEmail(text)}
        secureTextEntry={undefined}
        keyboardType={"number-pad"}
        returnKeyType="done"
        placeholder={"Enter your email"}
      ></TextInput>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#7F00FF", "#E100FF"]}
          style={styles.btn}
        >
          <TouchableOpacity
            onPress={forgetHandler}
          >
            <Text style={styles.size}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.size1}>Back to sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
