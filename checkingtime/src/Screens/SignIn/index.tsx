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
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from 'react-native';

const SignIn = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<any>();

  const hobbies: string[] = [];

  const Click = () => {
    if (isChecked === true) {
      hobbies.push("check");
      Alert.alert("Please enter your user name" + hobbies.toString());
    }
  };

  return (
    <View style={styles.view}>
      {/* <Image
        source={require("../../assets/bgr.jpg")}
        style={styles.image}
      /> */}
      <Text style={styles.textWelcome}>Welcome</Text>
      <Text style={styles.text1}>
        Chào mừng bạn đến với app của chúng tôi, App đang trong quá trình hoàn
        thiện nên nếu xảy ra bug vui lòng không quạu.
      </Text>

      <View style={styles.styleTT}>
        <View>
          <Icon name="user" size={20} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <TextInput
            placeholder={"Số điện thoại"}
            keyboardType={"number-pad"}
            returnKeyType="done"
            maxLength={10}
            value={userName}
            secureTextEntry={false}
            onChangeText={setUserName}
          />
        </View>
      </View>
      <View style={styles.styleTT}>
        <View>
          <Icon name="lock" size={22} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <TextInput
            placeholder={"Mật khẩu"}
            maxLength={16}
            secureTextEntry={true}
            returnKeyType="go"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <Text style={styles.text23}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <CheckBox
          title="Lưu mật khẩu"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        ></CheckBox>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.text22}>Tiếp tục</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SignIn;
