import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f6f6f6",
    },
    container_2: {
      flex: 1,
      flexDirection: "column",
      marginTop: "3%",
      marginLeft: 10,
      marginBottom: 15,
    },
    down: {
      flexDirection: "column",
      marginTop: "3%",
      marginLeft: "5%",
    },
    sizeText: {
      fontSize: 18,
    },

    user: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "3%",
      fontFamily: FONTS.vanSansSemiBold,
      marginLeft: 15,
      alignItems: "flex-start",
    },
    user_1: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "1%",
      fontFamily: FONTS.vanSansMedium,
      marginLeft: 15,
      alignItems: "flex-start",
    },

    kengang: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: 400,
      marginTop: "4%",
      marginBottom: "1.5%",
    },

    text: {
      fontSize: 20,
      marginBottom: 8,
      fontFamily: FONTS.vanSansSemiBold,
    },

    icon: {
      fontSize: 35,
      alignSelf: "center",
      margin: 4,
    },

    hang: {
      flexDirection: "row",
    },

    cot: {
      flexDirection: "column",
    },

    khoangcach: {
      marginTop: 10,
    },

    chu: {
      fontFamily: FONTS.vanSansSemiBold,
    },

    chu1: {
      fontSize: 17,
      color: "#F32424",
      fontFamily: FONTS.vanSansSemiBold,
    },

    Touch1: {
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 10,
      flexDirection: "row",
      marginLeft: 10,
    },

    viewText: {
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: 20,
    },

    text1: {
      textAlign: "center",
      fontFamily: FONTS.vanSansMedium,
    },
  });

export default createStyles;
