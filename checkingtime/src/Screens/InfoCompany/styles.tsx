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
      flex :1,
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
      marginTop: 10,
      marginRight: 50,
      fontWeight: "200",
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
      width: 400,
      marginTop: "4%",
      marginBottom: "1.5%",
    },
    hang: {
      marginTop: 16,
      flexDirection: "row",
    },
    texta: {
      
      fontSize: 15,
      color: "black",
      marginTop: "3%",
      marginLeft: 16,
      alignItems: "flex-start",
    },
    header : {
      fontSize: 30,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 5,
      marginTop: 10,
    },
  });

export default createStyles;
