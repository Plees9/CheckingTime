import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignSelf: "flex-start",
      marginTop: "20%",
      margin: 30,
    },
    user: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "3%",
      marginLeft: 15,
      alignItems: "flex-start",
    },
    kengang: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: 400,
      marginTop: "4%",
      marginBottom: "1.5%",
    },
    text: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 8,
    },
    icon: {
      fontSize: 40,
      margin: 4,
    },
    hang: {
      flexDirection: "row",
    },
    cot: {
      flexDirection: "column",
    },
    hang2: {
      flexDirection: "row",
      marginTop: "2%",
    },
  });

export default createStyles;
