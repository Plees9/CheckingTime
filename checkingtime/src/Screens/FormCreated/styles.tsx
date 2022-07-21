import {StyleSheet} from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    chu11: {
      fontWeight: "bold",
      fontSize: 20,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop: 10,
    },
    scrollView: {
      width: "100%",
      marginTop: 20,
    },
    textContainer: {
      flexDirection: "row",
      margin: 10,
    },
    arrow: {
      marginLeft: "auto",
    },
    kengang: {
      borderBottomColor: "#F0EBE3",
      borderBottomWidth: 0.5,
      width: 400,
      marginTop: "1.5%",
      marginBottom: "1.5%",
    },
    views: {
      backgroundColor: "#F0EBE3",
      width: "100%",
      height: "100%",
    },
    view1: {
      backgroundColor: "#FFFFFF",
      marginTop: 60,
      borderRadius: 5,
    },
    text1: {
      fontSize: 18,
      fontWeight: "bold",
      margin: 10,
    },
    text2: {
      margin: 10,
      color: "#666666",
    },
    btn: {
      alignSelf: "center",
      width: "80%",
      borderRadius: 10,
      paddingTop: "100%",
    },
  });

export default createStyles;
