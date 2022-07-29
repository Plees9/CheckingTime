import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: "#f2f2f2",
      //paddingTop: StatusBar.currentHeight,
    },
    user: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "3%",
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
      fontSize: 40,
      margin: 4,
    },
    hang: {
      flexDirection: "row",
    },
    cot: {
      flexDirection: "column",
    },
    khoangcach: {
      marginTop: 15,
      marginBottom: 15,
    },
    chu: {
      fontFamily: FONTS.vanSansSemiBold,
    },
    chu1: {
      fontSize: 24,
      width: "98%",
      backgroundColor: "#DDDDDD",
      textAlign: "center",
      padding: 8,
      borderRadius: 10,
      color: "#F32424",
      fontFamily: FONTS.vanSansBold,
    },
    text1: {
      textAlign: "center",
      fontFamily: FONTS.vanSansMedium,
      color: "#00092C",
    },
    textHeader: {
      fontSize: 20,
      fontFamily: FONTS.vanSansMedium,
    },
    Touch1: {
      backgroundColor: "white",
      marginTop: 5,
      flexDirection: "row",
    },
    Touch2: {
      backgroundColor: "white",

      marginTop: 10,
      marginBottom: 5,

      flexDirection: "row",
    },
    viewText: {
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: 20,
    },
  });

export default createStyles;
