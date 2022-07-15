import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    press: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 15,
    },
    hang: {
      flexDirection: "row",
    },
    user: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "3%",
      marginLeft: 15,
      alignItems: "flex-start",
    },
  });

export default createStyles;
