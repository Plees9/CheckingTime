import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    viewbgr: {
      backgroundColor: "#F9F9F9",
      flex: 1,
    },
    view: {
      marginTop: 30,
      //marginHorizontal: 40,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "white",
    },
    textTop: {
      marginTop: 10,
      fontFamily: FONTS.vanSansSemiBold,
      color: "#413F42",
    },
    textOTP:{
      fontSize:15,
      marginTop:10,
      alignSelf:'center',
      color:"orange",
      fontFamily: FONTS.vanSansExtraBold,
    },
    textnote:{
      fontSize: 13,
      color:"red",
      fontFamily: FONTS.vanSansBold,
    },
    text: {
      width: 320,
      height: 35,
      alignSelf: "center",
      borderRadius: 5,
      marginTop: 8,
      padding: 5,
      backgroundColor: "#F9F9F9",
    },
    btn: {
      alignSelf: "center",
      justifyContent: "center",
      width: 250,
      marginTop: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
   
    btn22: {
      width: 120,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#7445f6",
    },
    size: {
      fontSize: 18,
      width: 120,
      height: 40,
      padding: 6,
      color: "#FFFFFF",
      textAlign: "center",
      fontFamily: FONTS.vanSansBold,
    },
  });

export default createStyles;