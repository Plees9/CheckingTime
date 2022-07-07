import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';
import SocialSiginButtons from '../../components/SocialSiginButtons';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import HomeScreen from '../HomeScreen';



//const SiginInScreen:React.FC<IProps> = ({navigation}) => {
const SiginInScreen = () => {

  const {height}=useWindowDimensions();
  const navigation = useNavigation<any>();

  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');

  const onSiginInPressed = () => {
    console.warn("Sigin in pressed");
    navigation.navigate('Home');
   
  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed");
    navigation.navigate('ForgotPasswordScreen');
  }
  const onSiginInFaceBookPressed = () => {
    console.warn("Sigin in with facebook pressed");
   
  }
  const onGooglePressed = () => {
    console.warn("Sigin in with google pressed");
  }
  const onPhoneNumberPressed = () => {
    console.warn("Sigin in with phone number pressed");
  }
  const onRegister = () => {
    console.warn("Tạo tài khoản mới");
    navigation.navigate('SignUp');
  }
  
  
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/images/ah.jpg')} style={styles.image}/> */}
      <Text style ={styles.size} >Welcome</Text>
      <CustomInput 
      placeholder="UserName"
      value={userName}
      setValue={setUserName}
      secureTextEntry={undefined}/>
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue = {setPassword}
      secureTextEntry = {true}
      />
      <CustomButton 
      text="Sigin In"
      onPress={onSiginInPressed}
      type={undefined} 
      bgColor={undefined} 
      fgColor={undefined}/>
      <CustomButton
      text="Forgot password?"
      onPress={onForgotPasswordPressed}
      fgColor="#000000"
      type="TERTIARY" 
      bgColor={undefined}/>
      <CustomButton 
      text="Sigin FaceBook"
      onPress={onSiginInFaceBookPressed} 
      bgColor = "#E7EAF4"
      fgColor = "#4765A9"
      type={undefined}/>
      <CustomButton 
      text="Google"
      onPress={onGooglePressed} 
      bgColor = "#FAE9EA"
      fgColor = "#DD4D44"
      type={undefined}/>
      <CustomButton 
      text="Phone Number"
      onPress={onPhoneNumberPressed} 
      bgColor = "#E3E3E3"
      fgColor = "#363636"
      type={undefined}/>
      <CustomButton
      text="Don't have an account? Create one"
      onPress={onRegister}
      fgColor="#000000"
      type="TERTIARY" 
      bgColor={undefined}/>
     
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "70%",
    maxHeight:200,
    maxWidth:300,
  },
  container : {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
  },
  size : {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3DB2FF',
  },
  image : {
    height: "40%",
    width: "100%",
    resizeMode: 'contain',
    padding: 10,
  },
  root : {
    flex: 1,
  },
});

export default SiginInScreen;