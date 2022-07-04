import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';

const SocialSignButtons = () => {
   const onSiginInFaceBookPressed = () => {
      console.warn("Sigin in with facebook pressed");
    }
    const onGooglePressed = () => {
      console.warn("Sigin in with google pressed");
    }
    const onPhoneNumberPressed = () => {
      console.warn("Sigin in with phone number pressed");
    }
  return (
    <>
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
    </>
  )
}

export default SocialSignButtons;