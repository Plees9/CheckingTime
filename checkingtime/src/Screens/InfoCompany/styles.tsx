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
      fontSize: 30,
      fontWeight: "bold",
      color: "#FF4949",
    },

    container: {
      fontSize: 8,
      flex: 1,
    },
    user: {
      fontWeight: "bold",
      fontSize: 20,
      color: "black",
      marginTop: "3%",
      marginLeft: 16,
      alignItems: "flex-start",
    },
    icon: {
      fontSize: 40,
      margin: 4,
      //   width: 50,
      //   height: 50,
      //   borderRadius: 50/2,
    },
    btnForgot: {
      fontWeight: "200",
      borderRadius: 10,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      margin: 15,
      flex: 1,
    },
    textend : {
      textAlign: "center",
      color: "#FEB139",
      padding: 5,
    },
    text: {
      marginTop: 24,
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 8,
    },
    kengang: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: "100%",
      marginTop: "3%",
      //marginBottom: "1.5%",
    },
    kengang1: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: 300,
      //marginTop: "3%",
      //marginBottom: "1.5%",
    },
    hang: {
      marginTop: 16,
      flexDirection: "row",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    texta: {
      fontSize: 15,
      color: "black",
      marginTop: "3%",
      marginLeft: 16,
      alignItems: "flex-start",
    },
    header: {
      fontSize: 30,
      width: "100%",
      fontWeight: "bold",
    },
  });

export default createStyles;
