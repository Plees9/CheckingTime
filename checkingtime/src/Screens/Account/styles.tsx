import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";
import {Color_Icon} from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      marginTop: "3%",
      marginLeft: 10,
      marginBottom: 15,
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
      fontFamily: FONTS.vanSansSemiBold,
    },
  });

export default createStyles;
