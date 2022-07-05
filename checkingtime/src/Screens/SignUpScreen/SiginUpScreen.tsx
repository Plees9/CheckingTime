import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignButtons from '../../components/SocialSiginButtons';
import { useNavigation } from '@react-navigation/native';

const SiginUpScreen = () => {
  const[userName, setUserName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("Register pressed"); //ấn Register xong về SignIn
    navigation.navigate('SignIn');
  }
  
  const onSignInPressed = () => {
    console.warn("Sign In pressed");
    navigation.navigate('HomeScreen');
  }
  const onTermsOfUserPressed = () => {
    console.warn("Terms of user pressed");
  }
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy policy pressed");
  }
  
  return (
    <View style={styles.container}>
      <Text style ={styles.size} > Create an account</Text>
     
      <CustomInput 
      placeholder="UserName"
      value={userName}
      setValue={setUserName}
      secureTextEntry={undefined}
      />
      <CustomInput 
      placeholder="Email"
      value={email}
      setValue={setEmail}
      secureTextEntry={undefined}
      />
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue = {setPassword}
      secureTextEntry = {true}
      />
      <CustomInput 
      placeholder="Repeat Password"
      value={passwordRepeat} 
      setValue = {setPasswordRepeat   }
      secureTextEntry = {true}
      />
      <CustomButton 
      text="Register"
      onPress={onRegisterPressed}
      type={undefined} 
      bgColor={undefined} 
      fgColor={undefined}
      />
      <Text style ={styles.text} > 
      By registering, you confirm that you accept our{' '}
      <Text style ={styles.link} onPress = {onTermsOfUserPressed} > Terms of User </Text> and{''} 
      <Text style ={styles.link} onPress = {onPrivacyPolicyPressed}> Privacy Policy. </Text>
      </Text>

      <SocialSignButtons/>

      <CustomButton
      text="Have an account? Sign in"
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

});

export default SiginUpScreen;