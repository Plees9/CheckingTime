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
      marginBottom: 20,
      color: "#FF4949",
    },
    text: {
      width: 300,
      height: 30,
      alignSelf: "center",
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 10,
    },
    btn: {
      alignSelf: "center",
      justifyContent: "center",
      marginTop: 20,
      borderRadius: 10,
    },
  });

export default createStyles;
