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
      
    
     
      //height: "100%",
      borderWidth: 0.1,
    },
    style1: {
      flex: 1,
      //marginTop: 40,
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
    btnCannel: {
      left: 0,
    },
    btnDone: {
      right: 0,
    },
  });

export default createStyles;
