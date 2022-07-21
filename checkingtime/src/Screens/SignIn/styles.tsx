import { StyleSheet } from "react-native";
import { CheckBox } from '@rneui/themed';

const createStyles = () =>
  StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      marginTop: 80,
      alignSelf: "center",
      borderRadius: 200 / 2,
      marginBottom: 20,
    },
    view: {
      //marginTop: 60,
      marginHorizontal: 20,
      flex: 1,
      alignSelf: "center",
      backgroundColor: "white",
    },
    textWelcome: {
      marginTop: 100,
      marginBottom: 20,
      alignSelf: "center",
      fontSize: 40,
      fontWeight: "bold",
      color: "#FF4949",
    },
    colorBgr: {
      backgroundColor: "#6E85B7",
      width: "100%",
      height: "100%",
    },
    btn: {
      marginVertical: 10,
      fontSize: 12,
    },
    icon: {
      width: 50,
      height: 50,
      padding: 10,
      borderRadius: 50 / 2,
      marginHorizontal: 15,
      backgroundColor: "#3B5998",
      alignSelf: "center",
      alignItems: "center",
    },
    icon1: {
      width: 50,
      height: 50,
      padding: 10,
      borderRadius: 50 / 2,
      //marginHorizontal: 15,
      backgroundColor: "#FF0063",
      alignSelf: "center",
      alignItems: "center",
    },
    icon2: {
      width: 50,
      height: 50,
      padding: 12,
      borderRadius: 50 / 2,
      marginHorizontal: 15,
      backgroundColor: "#937DC2",
      alignSelf: "center",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
      marginTop: 15,
      alignSelf: "center",
    },
    text: {
      fontSize: 15,
      color: "#F32424",
      alignSelf: "center",
      marginTop: 20,
    },
    styleIcon: {
      flexDirection: "row",
    },
    styleTT: {
      flexDirection: "row",
      borderWidth: 1,
      marginTop: 6,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    styletext: {
      fontSize: 15,
      marginHorizontal: 10,
      marginTop: 10,
      fontWeight: "bold",
    },
    textInput: {
      color: "#F32424",
    },
    text1: {
      fontSize: 12,
      margin: 15,
      marginHorizontal: 20,
      textAlign: "center",
      //fontFamily: "VanSans-SemiBold",
      //fontWeight: "bold",
    },
    
    btnNext: {
      width: 100,
      height: 50,
      alignSelf: "center",
      borderRadius: 20,
    },
    btnForgot: {
      alignSelf: "flex-end",
      marginTop: 15,
      marginRight: "3%",
      fontWeight: "100",
    },
    btn2: {
      width: 330,
      height: "5%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#7445f6",
      marginTop: 15,
    },
    text22: {
      fontSize: 18,
      color: "#FFFFFF",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      
    },
    text23: {
      fontSize: 16,
    },
    text24: {
      marginLeft: 10,
      width: "100%",
      fontSize: 14,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
  });

export default createStyles;
