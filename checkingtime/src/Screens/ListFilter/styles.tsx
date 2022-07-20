import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      margin: "8%",
    },
    viewbgr: {
      //backgroundColor: "#FFFFFF",

    },
    textTop: {
      marginTop: "8%",
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
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    btn2: {
      width: 300,
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
      marginLeft: "3%",
      width: "100%",
      backgroundColor: "#f2f2f2",
      borderRadius: 15,
      fontSize: 8,
    },
  });

export default createStyles;
