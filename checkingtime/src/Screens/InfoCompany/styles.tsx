import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    container: {
      fontSize: 8,
      flex: 1,
    },
    user: {
      fontFamily: FONTS.vanSansSemiBold,
      fontSize: 20,
      marginTop: "3%",
      marginLeft: "2%",
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
      marginTop: "3%",
    },
    kengang1: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: 300,
    },
    hang: {
      marginTop: "3%",
      flexDirection: "row",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    texta: {
      fontSize: 15,
      color: "black",
      marginTop: "3%",
      marginLeft: "2%",
      alignItems: "flex-start",
      
    },
    header: {
      fontSize: 30,
      width: "100%",
      fontFamily: FONTS.vanSansSemiBold,
    },
  });

export default createStyles;
