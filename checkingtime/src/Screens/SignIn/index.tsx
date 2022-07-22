import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  
} from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {LinearGradient} from 'expo-linear-gradient';



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
      {/* <ImageBackground
        source={require("../../../assets/images/tim.jpg")}
        style={{flex:1}}
      > */}
      
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#fc00ff", "#00dbde"]}
        style={styles.image1}
      >
        <Text style={[styles.textWelcome, {opacity: 0}]}>Instagram</Text>
      </LinearGradient>
      
      
      <View style={{ marginTop: "15%" }}>
        <View style={styles.styleTT}>
          <View>
            <Icon name="user" size={24} />
          </View>
          <View style={styles.text24}>
            <TextInput
              placeholder={"Số điện thoại"}
              style={styles.text23}
              keyboardType={"number-pad"}
              returnKeyType="done"
              maxLength={10}
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
              secureTextEntry={true}
              returnKeyType="go"
              value={password}
              onChangeText={setPassword}
            />
          </View>
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
        colors={["#fc00ff", "#00dbde"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.text22}>Đăng nhập</Text>
        </TouchableOpacity>
      </LinearGradient>

      <TouchableOpacity
        style={styles.btnForgot}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <Text style={styles.text23}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
};

export default SignIn;
