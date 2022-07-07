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
  });

export default createStyles;
