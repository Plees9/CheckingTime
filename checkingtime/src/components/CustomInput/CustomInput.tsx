import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>
      <TextInput
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder={placeholder}
      style = {styles.input}
      secureTextEntry = { secureTextEntry }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    
  },
  container : {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    borderColor: '#FF5B00',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
  }
});

export default CustomInput;