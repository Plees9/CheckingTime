import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    bgr: {
      backgroundColor: "#FFFFFF",
    },
    icon1: {
      flexDirection: "row",
      marginTop: 10,
      marginRight: "60%",
      borderRadius: 20,
      padding: 10,
      backgroundColor: "#FDFCE5",
    },
    icon2: {
      marginTop: "2%",
      marginLeft: "3%",
      borderRadius: 15,
      padding: 10,
      width: "45%",
      backgroundColor: "#DDDDDD",
    },
    icon4: {
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      alignSelf: "center",
      marginTop: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#f2f2f2",
    },
    text2: {
      alignItems: "center",
      padding: 5,
      width: "90%",
      marginLeft: 10,
      fontSize: 14,
    },
    view: {
      backgroundColor: "white",
    },
    view1: {
      marginTop: "3%",
      backgroundColor: "#f2f2f2",
    },
    view2: {
      marginTop: "3%",
      width: "100%",
      padding: "3%",
      backgroundColor: "#FFFFFF",
    },
    textDSNV: {
      marginLeft: "3%",
      fontSize: 16,
      fontFamily: FONTS.vanSansSemiBold,
    },
    text_selectNv: {
      marginLeft: "3%",
      marginTop: "2%",
      fontSize: 16,
    },
    icon5: {
      marginTop: "2%",
      marginLeft: 15,
      borderRadius: 15,
      padding: 10,
      width: "45%",
      backgroundColor: "#DDDDDD",
    },
    icon3: {
      padding: 5,
      color: "#ff8c00",
    },
    text: {
      color: "#ff8c00",
      alignItems: "center",
      marginLeft: 10,
      fontSize: 18,
    },
    chu11: {
      fontWeight: "bold",
      fontSize: 18,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 15,
      marginTop: 10,
    },
    chu1: {
      fontSize: 14,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 5,
      textAlign: "center",
    },
    chu3: {
      fontSize: 14,
      width: "100%",
      backgroundColor: "#FDFCE5",
      padding: 10,
      textAlign: "center",
    },
    chu5: {
      fontSize: 14,
      width: "100%",

      padding: 5,
      textAlign: "center",
    },
    chu2: {
      textAlign: "center",
      fontSize: 14,
      width: "125%",
      backgroundColor: "#FDFCE5",
      padding: 5,
    },
    chu4: {
      textAlign: "center",
      fontSize: 14,
      width: "125%",

      padding: 5,
    },
    row: {
      flexDirection: "row",
    },
    row2: {
      flexDirection: "row",
      marginTop: "1%",
    },
    column: {
      flexDirection: "column",
    },
    textTop2: {
      marginTop: "3%",
      fontSize: 14,
      color: "#413F42",
    },
    textTop3: {
      marginTop: "3%",
      marginLeft: "50%",
      fontSize: 15,
      color: "#ff8c00",
    },
    textTop4: {
      fontSize: 15,
      color: "#ff8c00",
    },
    image: {
      height: 250,
      width: 250,
      alignSelf: "center",
    },
    no_sreach: {
      color: "#ff8c00",
      textAlign: "center",
      fontSize: 14,
    },
    render: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      alignSelf: "center",
      width: "96%",
      marginTop: "3%",
    },
    userID_1: {
      marginLeft: "3%",
      width: "15%",
      alignItems: "center",
      alignSelf: "center",
    },
    userName_1: {
      width: "60%",
      alignSelf: "center",
    },
    Board_1: {
      width: "12%",
      alignSelf: "center",
    },
  });

export default createStyles;
