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
  });

export default createStyles;
