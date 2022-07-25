import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      marginHorizontal: 20,
      flex: 1,
      backgroundColor: "white",
    },
    textWelcome: {
      marginTop: "10%",
      alignSelf: "center",
      fontSize: 40,
      color: "#FF4949",
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
    text23: {
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
      marginRight: "3%",
    },
    row : {
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
      borderColor: "gray",
      borderRadius: 5,
    },
    row3: {
      
      width: 150,
      height: 40,
      borderRadius: 5,
    },
    row2 : {
      flexDirection: "row",
      textAlign: "center",
      marginTop: "3%",
      width: 150,
      borderWidth: 1,
      borderRadius: 5,
      
    },
    styleIcon: {
      marginLeft: "5%",
    },
    
  });

export default createStyles;
