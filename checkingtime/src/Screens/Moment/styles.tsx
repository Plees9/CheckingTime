import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    flex: {
      flex: 1,
      
    },
    datePicker: {
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 0.1,
      
    },
    style1: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
    },
    style2: {
      backgroundColor: "white",
      overflow: "hidden",
    },
    btnText: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  
  });

export default createStyles;
