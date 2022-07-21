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
import { LinearGradient } from "expo-linear-gradient";

const ResetPasswordScreen = () => {
  const styles = useMemo(() => createStyles(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation<any>();

  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        {/* <Text style={styles.textWelcome}>Thay đổi mật khẩu</Text> */}

        <Text style={styles.textTop}> Mật khẩu hiện tại</Text>
        <TextInput
          style={styles.text}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={undefined}
          returnKeyType="done"
          placeholder={"Nhập mật khẩu cũ"}
        ></TextInput>

        <Text style={styles.textTop}> Mật khẩu mới</Text>
        <TextInput
          style={styles.text}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={undefined}
          returnKeyType="done"
          placeholder={"Nhập mật khẩu mới"}
        ></TextInput>

        <Text style={styles.textTop}> Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.text}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={undefined}
          returnKeyType="done"
          placeholder={"Xác nhận mật khẩu mới"}
        ></TextInput>

        <View style={styles.btn}>

          {/* <TouchableOpacity
            style={styles.btn22}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.size}>Xác nhận</Text>
          </TouchableOpacity> */}
             <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#7F00FF", "#E100FF"]}
        style={styles.btn22}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.size}>Xác nhận</Text>
        </TouchableOpacity>
      </LinearGradient>
          


        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;