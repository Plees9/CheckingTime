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
      fontSize: 28,
      fontWeight: "bold",
      color: "#FF4949",
    },
    text: {
      width: 300,
      height: 30,
      alignSelf: "center",
      borderRadius: 5,
      borderWidth: 1,
      margin: 20,
    },
    btn: {
      width: 80,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      backgroundColor: "#FAEA48",
    },
    size: {
      fontSize: 18,
      fontWeight: "bold",
    },
    size1: {
      fontSize: 16,
      alignSelf: "center",
      marginTop: 10,
    },
  });

export default createStyles;
