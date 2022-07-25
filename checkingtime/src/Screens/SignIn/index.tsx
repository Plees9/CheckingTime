import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,

} from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action";

const SignIn = () => {
  const { error } = useSelector<any>(state => state.auth)

  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const loginHandler = () => {
    dispatch<any>(login(userName, password));
  };

  useEffect(() => {
      if (error) {
          alert(error)
          dispatch({ type: "clearError" })
      }

  }, [error, dispatch, alert,])

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
      {/* <ImageBackground
        source={require("../../../assets/images/tim.jpg")}
        style={{flex:1}}
      > */}
      <Text style={styles.textWelcome}>Welcome</Text>
      <Text style={styles.text1}>
        Chào mừng bạn đến với app của chúng tôi, App đang trong quá trình hoàn
        thiện nên nếu xảy ra bug vui lòng không quạu.
      </Text>

      <View>
        <Text style={styles.styletext}>Tài khoản:</Text>
        <View style={styles.styleTT}>
          <View>
            <Icon name="user" size={24} />
          </View>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Số điện thoại"}
              style={styles.text23}
              //keyboardType={"number-pad"}
              returnKeyType="done"
              value={userName}
              secureTextEntry={false}
              onChangeText={setUserName}
            />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.styletext}>Mật khẩu:</Text>
        <View style={styles.styleTT}>
          <View>
            <Icon name="lock" size={26} />
          </View>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Mật khẩu"}
              style={styles.text23}
              maxLength={16}
              secureTextEntry={true}
              returnKeyType="go"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <Text style={styles.text23}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.checkbox}>
          <CheckBox
            title="Lưu mật khẩu"
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          ></CheckBox>
        </View>
      </TouchableOpacity>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#7F00FF", "#E100FF"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={loginHandler}>
        {/* <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}> */}
          <Text style={styles.text22}>Đăng nhập</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};

export default SignIn;
