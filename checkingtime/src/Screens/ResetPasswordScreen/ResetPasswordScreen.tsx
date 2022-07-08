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
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ResetPasswordScreen = () => {
   const styles = useMemo(() => createStyles(), []);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const navigation = useNavigation<any>();
   
  return (
   <View style = {styles.view} >
     
      <Text style={styles.textWelcome}>Reset Password</Text>
         
      <TextInput 
      style={styles.text}
      value = {password}
      onChangeText = {(text) => setPassword(text)}
      secureTextEntry={undefined}
      returnKeyType="done"
      placeholder={"Enter your password"}>
      </TextInput>
      <TextInput 
      style={styles.text}
      value = {password}
      onChangeText = {(text) => setPassword(text)}
      secureTextEntry={undefined}
      returnKeyType="done"
      placeholder={"Enter new password"}>
      </TextInput>
      <View style = {styles.btn}>
      <Button 
      title="Confirm"
      onPress={() => navigation.navigate("SignInScreen")} />
      </View>   
    </View>
  );
};

export default ResetPasswordScreen;