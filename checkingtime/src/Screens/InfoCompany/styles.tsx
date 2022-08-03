import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    container: {
      fontSize: 8,
      flex: 1,
    },
    khoiInfo: {
      flexDirection: "column",
      marginTop: "-6%",
      flex: 1,
    },
    user: {
      fontFamily: FONTS.vanSansSemiBold,
      fontSize: 18,
      marginTop: "5%",
      marginLeft: "3%",
      alignItems: "flex-start",
      
    },
    user_1: {
      fontFamily: FONTS.vanSansSemiBold,
      fontSize: 18,
      marginLeft: "3%",
      alignItems: "flex-start",
    },

    btnForgot: {
      fontWeight: "200",
      borderRadius: 10,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      margin: 15,
      flex: 1,
    },
    textend: {
      textAlign: "center",
      color: "#FEB139",
      padding: 5,
      fontFamily: FONTS.vanSansMedium,
    },

    kengang: {
    
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: "100%",
    },
    kengang1: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: 300,
    },
    hang: {
      marginTop: "3%",
      width: "99%",
     
      flexDirection: "row",
      
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    texta: {
      fontSize: 15,
      color: "black",
      marginTop: "1%",
      marginLeft: "3%",
    },
    header: {
      fontSize: 30,
      width: "100%",
      fontFamily: FONTS.vanSansSemiBold,
    },
  });

export default createStyles;
