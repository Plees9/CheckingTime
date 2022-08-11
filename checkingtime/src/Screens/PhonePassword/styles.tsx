import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      marginTop: 45,
      marginHorizontal: 20,
      alignSelf: "center",
    },
    textWelcome: {
      alignSelf: "center",
      fontSize: 24,
      color: "#FC4F4F",
      fontFamily: FONTS.vanSansBlack,
    },
    text: {
      width: 320,
      height: 45,
      alignSelf: "center",
      borderRadius: 5,
      marginTop: 25,
      padding: 5,
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
      backgroundColor: "#EEEEEE",

      margin: 20,
    },
    btn: {
      width: 120,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    size: {
      fontSize: 18,
      width: 120,
      height: 40,
      padding: 6,
      color: "#FFFFFF",
      textAlign: "center",
      fontFamily: FONTS.vanSansBold,
    },
    size1: {
      fontSize: 16,
      alignSelf: "center",
      marginTop: 10,
      fontWeight: "bold",
    },
    image: {
      borderRadius:100,
      height: 200,
      width: 200,
      alignSelf: "center",
    },
    textnote: {
      marginTop: 25,
      fontSize: 15,
      fontFamily: FONTS.vanSansMedium,
      alignSelf: "center",
    },
  });

export default createStyles;
