import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      //marginTop: 60,
      // marginHorizontal: 20,
      flex: 1,
      alignSelf: "center",
      backgroundColor: "white",
    },
    image1:{
      borderRadius:10,
      //height:"100%",
      // marginBottom:"3%",
      // marginTop:"3%",
      alignItems:"center",

    },

    textWelcome: {
      alignSelf: "center",
      fontSize: 50,
      textAlign: "center",
      padding:"16%",
      color: "#fff",
      fontFamily: FONTS.vanSansBlack,
    },
    text1: {
      fontSize: 14,
      margin: 15,
      marginHorizontal: 10,
      textAlign: "center",
      fontFamily: FONTS.vanSansRegular,
      fontWeight: "bold",
    },
    styletext: {
      fontSize: 16,
      marginHorizontal: 20,
      marginTop: 10,
      fontFamily: FONTS.vanSansSemiBold,
    },
    styleTT: {
      flexDirection: "row",
      borderWidth: 1,
      marginTop: 10,
      //height: 45,
      marginHorizontal: 20,
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    text24: {
      marginLeft: 10,
      width: "100%",
      fontSize: 14,
    },
    btnForgot: {
      alignSelf: "center",
      marginTop: 15,
      marginRight: "3%",
      fontWeight: "100",
    },
    text23: {
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
      marginRight: "3%",
    },
    checkbox: {
      fontFamily: FONTS.vanSansMedium,
      width: "42%",
      //backgroundColor:"red"
    },
    btn2: {
      width: 350,
      height: "6%",
      alignSelf: "center",
      marginHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#7445f6",
      marginTop: 15,
    },
    text22: {
      fontSize: 20,
      width: 350,
      padding: 5,
      //backgroundColor: "#7445f6",
      height: "100%",
      color: "#FFFFFF",
      textAlign: "center",
      fontFamily: FONTS.vanSansBold,
    },
  });

export default createStyles;
