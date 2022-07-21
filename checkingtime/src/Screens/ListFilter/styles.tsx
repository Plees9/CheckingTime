import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      margin: "6%",
    },
    viewbgr: {
      backgroundColor: "#FFFFFF",

    },
    textTop: {
      fontSize: 14,
      color: "#413F42",
    },
    textTop2: {
      marginTop: "3%",
      fontSize: 14,
      color: "#413F42",
    },
    text22: {
      fontSize: 18,
      color: "#FFFFFF",
      width: 250,
      height: 45,
      padding: 8,
      //backgroundColor: "#7445f6",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    btn2: {
      width: 250,
      height: 45,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: "#7445f6",
      marginTop: 30,
    },
    style : {
      marginTop: "3%",
      marginLeft: "8%",
      marginRight: "8%",
      width: "100%",
      backgroundColor: "#f2f2f2",
      borderRadius: 10,
      fontSize: 8,
      justifyContent: "center",
      alignSelf: "center",
    },
  });

export default createStyles;
