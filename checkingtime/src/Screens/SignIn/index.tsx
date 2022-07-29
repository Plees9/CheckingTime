import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../component/GradientText";
import Icon_1 from "react-native-vector-icons/Ionicons";

const SignIn = () => {
  const { error } = useSelector<any>((state) => state.auth);

  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("0913005145");
  const [password, setPassword] = useState("1234567Aa@");
  const [isChecked, setIsChecked] = useState(false);
  const [isHided, setIsHided] = useState(true);

  const loginHandler = () => {
    dispatch<any>(login(userName, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch, alert]);
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
      <View style={styles.image1}>
        <GradientText
          colors={["#f12711", "#f5af19"]}
          style={styles.textWelcome}
        >
          Vikings
        </GradientText>
      </View>

      <View style={{ marginTop: "15%" }}>
        <View style={styles.styleTT}>
          <View>
            <Icon name="user" size={24} />
          </View>
          <View style={styles.text21}>
            <TextInput
              placeholder={"Số điện thoại"}
              style={styles.text23}
              keyboardType={"number-pad"}
              returnKeyType="done"
              value={userName}
              secureTextEntry={false}
              onChangeText={setUserName}
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.styleTT}>
          <View>
            <Icon name="lock" size={26} />
          </View>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Mật khẩu"}
              style={styles.text23}
              maxLength={16}
              secureTextEntry={isHided}
              returnKeyType="go"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            onPressIn={() => setIsHided(false)}
            onPressOut={() => setIsHided(true)}
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
      </View>

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
        colors={["#f12711", "#f5af19"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={loginHandler}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}> */}
          <Text style={styles.text22}>Đăng nhập</Text>
        </TouchableOpacity>
      </LinearGradient>

      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => navigation.navigate("Quên mật khẩu")}
      >
        <Text style={styles.text23}>Quên mật khẩu?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
