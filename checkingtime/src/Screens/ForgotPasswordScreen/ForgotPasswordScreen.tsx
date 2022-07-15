import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";

import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ForgotPasswordScreen = () => {
  const styles = useMemo(() => createStyles(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation<any>();

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
        placeholder={"Enter your phone number"}
      ></TextInput>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.size}>Xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.size1}>Back to sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;