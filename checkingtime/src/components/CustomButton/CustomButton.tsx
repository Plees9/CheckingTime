import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";



const CustomButton = ({ onPress, text, type = "Primary",bgColor, fgColor }) => {
  //const CustomButton = ({onPress, text, type }) => {
  //<CustomButton {...type}>{onPress}</CustomButton>
  //let key = `container_${type}`;
  //let tt = `text_${type}`;
  //let style = styles.get(key);
  //let ss = styles.get(tt);
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}, 
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3DB2FF',
    padding: 10,
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_Primary: {
    backgroundColor: "#3DB2FF",
  },
  container_Secondary: {
    borderColor: "#3DB2FF",
    borderWidth: 1,
  },
  text_Secondary: {
    color: "#3DB2FF",
  },
  container_Tertiary: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_Tertiary: {},

//   get(key: string): any {
//     switch (key) {
//       case "container_Primary":
//         return {
//           backgroundColor: "#3DB2FF",
//         };
//       case "text":
//          return {
//             fontWeight: "bold",
//             color: "white",
//          };
//       case "text_Tertiary":
//          return {};
//       case "container":
//          return {
//             padding: 15,
//             width: "100%",
//             marginVertical: 5,
//             alignItems: "center",
//             borderRadius: 5,
//          }
//       default:
//         return {};
//     }
//   },
});
export default CustomButton;
