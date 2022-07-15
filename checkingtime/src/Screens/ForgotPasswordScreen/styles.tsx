import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      marginTop: 80,
      marginHorizontal: 20,
      alignSelf: "center",
    },
    textWelcome: {
      alignSelf: "center",
      fontSize: 24,
      fontWeight: "bold",
      color: "#FC4F4F",
    },
    text: {
      width: 320,
      height: 35,
      alignSelf: "center",
      borderRadius: 5,
      marginTop: 15,
      padding:5,
      backgroundColor: "#CFD2CF",
      
      margin: 20,
    },
    btn: {
      width: 120,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#7858A6",
    },
    size: {
      fontSize: 18,
      color: "#FFFFFF",
      textAlign: "center",
    },
    size1: {
      fontSize: 16,
      alignSelf: "center",
      marginTop: 10,
      fontWeight: "bold",
    },
  });

export default createStyles;