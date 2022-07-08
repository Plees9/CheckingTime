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
import createStyles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "@rneui/themed";

const SignInScreen = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const hobbies: string[] = [];

  const Click = () => {
    if (isChecked === true) {
      hobbies.push("check");
      Alert.alert("Please enter your user name" + hobbies.toString());
    }
  }

  return (
    <View style = {styles.view} >
      {/* <Image
        source={require("../../assets/bgr.jpg")}
        style={styles.image}
      /> */}
      <Text style={styles.textWelcome}>Welcome</Text>
      <Text style = {styles.text1}> 
        Chào mừng bạn đến với app của chúng tôi, App đang trong quá trình hoàn thiện nên nếu xảy ra bug vui lòng không quạu.
      </Text>

      <View style={styles.styleTT}>
        <View>
          <Icon name="user" size={15} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <TextInput
            placeholder={"Số điện thoại"}
            keyboardType={"number-pad"}
            returnKeyType="done"
            maxLength = {10}
            value={userName}
            secureTextEntry={false}
            onChangeText={setUserName}
          />
        </View>
      </View>
      <View style={styles.styleTT}>
        <View>
          <Icon name="lock" size={15} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <TextInput
            placeholder={"Mật khẩu"}
            maxLength={8}
            secureTextEntry={true}
            returnKeyType="go"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity 
      style={styles.btnForgot}>
      <Text>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <CheckBox 
        title= "Lưu mật khẩu" 
        checked= {isChecked} 
        onPress = {() => setIsChecked(!isChecked)}>
        </CheckBox>
      </View>

        <TouchableOpacity style={styles.btnNext}>
          <Button 
            title={"Tiếp tục"}
            color="#FFC54D"
            onPress={() => Alert.alert("áa")}
          />
        </TouchableOpacity>
          
          {/* <View style={styles.row}>
            <Icon name="facebook" size={30} style={styles.icon} color="white" />
            <Icon
              name="google"
              size={30}
              style={styles.icon1}
              color="white"
            />
            <Icon name="mobile" size={30} style={styles.icon2} color="white" />
          </View>
          <Text style={styles.text}>Bạn chưa có tài khoản? Hãy tạo tài khoản.</Text>
         */}
      
    </View>
  );
};

export default SignInScreen;
