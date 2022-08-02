import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "white",
    },
    row: {
      flexDirection: "row",
      marginTop: "3%",
    },
    icon: {
      margin: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#f2f2f2",
    },
    iconPlus: {
      margin: 10,
      // borderRadius: 10,
      // padding: 10,
      // backgroundColor: "#f2f2f2",
    },
    icon1: {
      flexDirection: "row",
      flex: 1,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
    icon3: {
      padding: 5,
      color: "gray",
    },
    text: {
      alignItems: "center",
      marginLeft: 10,
      fontSize: 14,
    },

    view1: {
      backgroundColor: "#f2f2f2",
      height: "100%",
    },
    view2: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      //height: "10%",
      marginTop: "3%",
      marginLeft: "3%",
      marginRight: "3%",
      borderRadius: 10,
    },
    hang: {
      flexDirection: "row",
      borderRadius: 5,
      margin: "3%",
      width: "95%",
    },
    avt: {
      marginTop: "1%",
    },
    user: {
      fontSize: 16,
      flexDirection: "column",
      width: "100%",
      fontWeight: "bold",
      marginLeft: "10%",
      marginTop: "2%",
    },
    iconPhone: {
      marginLeft: "45%",
      marginTop: "3%",
      color: "orange",
    },
    hang2: {
      flexDirection: "row",
      //justifyContent: "space-between",
      width: "45%",
      marginLeft: "3%",
      borderColor: "orange",
    },
    view3: {
      borderWidth: 1,
      borderRadius: 5,
      margin: "3%",
      height: "70%",
      textAlign: "center",
      color: "orange",
      padding: "2%",
      borderColor: "orange",
    },
    hang3: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    cot1: {
      flexDirection: "column",
    },
    textInfo: {
      fontFamily: FONTS.vanSansSemiBold,
    },
    kengang: {
      borderBottomColor: "#f2f2f2",
      borderBottomWidth: 3,
      width: "100%",
      marginTop: "3%",
      marginBottom: "1.5%",
    },

    text1: {
      textAlign: "center",
      fontSize: 14,
      marginBottom: "2%",
      marginTop: "1%",
      color: "orange",
    },
  });

export default createStyles;
