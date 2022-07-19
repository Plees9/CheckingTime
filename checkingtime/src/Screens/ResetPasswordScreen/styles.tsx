import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      marginTop: 30,
      //marginHorizontal: 40,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "white",
    },
    viewbgr: {
      backgroundColor: "#F9F9F9",
      flex: 1,
    },
    textWelcome: {
      alignSelf: "center",
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#FF4949",
    },
    text: {
      width: 320,
      height: 35,
      alignSelf: "center",
      borderRadius: 5,
      marginTop: 8,
      padding: 5,
      backgroundColor: "#F9F9F9",
    },
    btn: {
      alignSelf: "center",
      justifyContent: "center",
      width: 250,
      marginTop: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    textTop: {
      marginTop: 10,
      color: "#413F42",
    },
    btn22: {
      width: 120,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#7445f6",
    },
    size: {
      fontSize: 18,
      color: "#FFFFFF",
      textAlign: "center",
    },
  });

export default createStyles;