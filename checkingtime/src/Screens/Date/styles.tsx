import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
   flex : {
      flex: 1,
   },
    datePicker: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginLeft: 20,
      width: "90%",
      //height: "100%",
      borderWidth: 1,
      },
      style1: {
         flex: 1,
         //marginTop: 40,
         flexDirection: "row",
         alignItems: "flex-end",
      },
      style2 : {
         backgroundColor: "white",
         overflow: "hidden",
         height:250,
      },
      btnText : {
         position: "absolute",
         top: 0,
         height: 42,
         paddingHorizontal: 20,
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center",
      },
      btnCannel : {
         left: 0,
      },
      btnDone : {
         right: 0,
      },
  });

export default createStyles;
