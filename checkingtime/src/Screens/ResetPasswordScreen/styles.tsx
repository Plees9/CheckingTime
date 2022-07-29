import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    viewbgr: {
      backgroundColor: "#fff",
      flex: 1,
    },
    view: {
      marginTop: 20,
      marginHorizontal: 10,
      backgroundColor: "white",
    },
    textTop: {
      fontSize: 17,
      marginTop: 13,
      fontFamily: FONTS.vanSansSemiBold,
      color: "#413F42",
    },
    textOTP: {
      fontSize: 15,
      marginTop: 10,
      alignSelf: "center",
      color: "orange",
      fontFamily: FONTS.vanSansExtraBold,
    },
    textnote: {
      fontSize: 13,
      color: "red",
      fontFamily: FONTS.vanSansBold,
    },
    text: {
      height: 45,
      fontSize: 16,
      width: "90%",
      fontFamily: FONTS.vanSansMedium,
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
    confirmPassword: {
      flexDirection: "row",
      width: 320,
      height: 45,
      borderRadius: 5,
      marginTop: 8,
      paddingLeft: 5,
      backgroundColor: "#F9F9F9",
      alignItems: 'center'
    },
    icon_confirmPassword: {
      width: "10%",
      alignItems: "center",
      justifyContent: "center",
    },
    inputBox: {
      backgroundColor: '#F9F9F9',
      paddingLeft: 5,
    },
  });

export default createStyles;
