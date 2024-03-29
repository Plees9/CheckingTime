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
import { getmyrank, loadCompany, loadTimesheet, login } from "../../../redux/action";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../component/GradientText";
import TwoChoiceModal from "../../component/TwoChoiceModal";
import Icon_1 from "react-native-vector-icons/Ionicons";
import Toast from "react-native-toast-message";


const SignIn = () => {
  const { error } = useSelector<any, any>((state) => state.auth);

  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const [isHided, setIsHided] = useState(true);

  const loginHandler = () => {
    dispatch<any>(login(userName, password));
  };
const ToastAlert = (message: any) => {
  Toast.show({ text1: message ,});
};
const configToast = {
  error: (internal) => (
    <View
      style={{
        width: "50%",
        height: 40,
        backgroundColor: "#8f73f6",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
    </View>
  ),
};
  useEffect(() => {
    if (error) {
      ToastAlert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch, ToastAlert]);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.view}>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
      <View style={styles.image1}>
        <GradientText
          colors={["#8f73f6", "#8f73f6"]}
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

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#8f73f6", "#8f73f6"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={loginHandler}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}> */}
          <Text style={styles.text22}>Đăng nhập</Text>
        </TouchableOpacity>
      </LinearGradient>

      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => setIsPressed(true)}
      >
        <Text style={styles.text23}> Quên mật khẩu ?</Text>
      </TouchableOpacity>
      <TwoChoiceModal
        visible={isPressed}
        iconLeft="email"
        iconRight="phone"
        txtLeft="Email"
        message="Vui lòng chọn hình thức bạn muốn nhận mã OTP"
        txtRight="Điện thoại"
        onLeftClick={() => {
          navigation.navigate("Nhận OTP bằng email");
          setIsPressed(false);
        }}
        onRightClick={() => {
          navigation.navigate("Nhận OTP bằng điện thoại");
          setIsPressed(false);
        }}
        onCancel={() => setIsPressed(false)}
        size={30}
      />
    </View>
  );
};

export default SignIn;
