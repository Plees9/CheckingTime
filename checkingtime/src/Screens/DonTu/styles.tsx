import { StyleSheet, StatusBar } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "white",
    },
    scrollview: {
      backgroundColor: "#f2f2f2",
      width: "100%",
      height: "100%",
      marginTop: 10,
    },
    row: {
      flexDirection: "row",
      marginTop: 50,
    },
    icon: {
      margin: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#f2f2f2",
    },
    icon1: {
      flexDirection: "row",
      flex: 1,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#f2f2f2",
    },
    icon3: {
      padding: 5,
      color:"gray",
    },
    text: {
      alignItems: "center",
      marginLeft: 10,
      fontSize: 14,
    },
    tinyLogo: {
      width: 400,
      height: 550,
      alignSelf: "center",
    },
    text1: {
      textAlign: "center",
      fontSize: 14,
    },

  });

export default createStyles;