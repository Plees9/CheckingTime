import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignButtons from '../../components/SocialSiginButtons';

const ForgotPasswordScreen = () => {
  const[code, setCode] = useState('');
  const[newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn("Submit Pressed");
  }
  
  const onSignInPressed = () => {
    console.warn("Sign In pressed");
  }
  
  
  return (
    <View style={styles.container}>
      <Text style ={styles.size} > Reset your password</Text>
      <Text style ={styles.user} > Username</Text>
     
      <CustomInput 
      placeholder="code"
      value={code}
      setValue={setCode}
      secureTextEntry={undefined}
      />
      <CustomInput 
      placeholder="Enter your new password"
      value={newPassword}
      setValue={setNewPassword}
      secureTextEntry={undefined}
      />
    
      <CustomButton 
      text="Submit"
      onPress={onSubmitPressed}
      type={undefined} 
      bgColor={undefined} 
      fgColor={undefined}
      />
      

      <CustomButton
      text="Back to sign in"
      onPress={onSignInPressed}
      fgColor="#000000"
      type="TERTIARY" 
      bgColor={undefined}/>
     
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  container : {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
  },
  root : {
    alignItems: 'center',
    padding: 20,
  },
  size : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4949',
    
  },
  text : {
    color:'gray',
    //marginVertical: 5,
  },
  title : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F7EC09',
    margin: 10,
  },
  link : {
    color: '#FDB075',
  },
  user: {  
  },

});

export default ForgotPasswordScreen;