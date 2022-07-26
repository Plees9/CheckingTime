import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: "white",
    },
    textWelcome: {
      marginTop: "3%",
      alignSelf: "center",
      fontSize: 35,
      color: "#FF9F29",
      fontFamily: FONTS.vanSansBlack,
    },
    styleTT: {
      backgroundColor: "#f2f2f2",
      marginTop: "3%",
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },
    text24: {
      marginLeft: 10,
      width: "100%",
      fontSize: 14,
    },
    textExemple: {
      color:"#EB1D36", 
      fontSize: 12,
      marginHorizontal: 25,
      fontFamily: FONTS.vanSansBold,
    },
    text23: {
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
      marginRight: "3%",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "3%",
    },
    row1: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      width: 150,
      height: 40,
      marginTop: "3%",
      borderWidth: 1,
      borderColor: "#CFD2CF",
      borderRadius: 5,
    },
    row3: {
      width: 150,
      height: 40,
      borderRadius: 5,
    },
    row2: {
      flexDirection: "row",
      textAlign: "center",
      marginTop: "3%",
      
      width: 150,
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 5,
    },
    styleIcon: {
      marginTop: "5%",
      marginRight: "5%",
      marginBottom: "5%",
      
    },
    text22: {
      fontSize: 20,
      padding: 5,
      width: "100%",
      color: "#FFFFFF",
      textAlign: "center",
      fontFamily: FONTS.vanSansBold,
    },
    btn2: {
      width: "90%",
      height: "6%",
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 10,
       marginTop: "10%",
    },
  });

export default createStyles;
