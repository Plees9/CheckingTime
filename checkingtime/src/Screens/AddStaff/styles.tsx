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
      flexDirection: "row",
      backgroundColor: "#f2f2f2",
      marginTop: "3%",
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },
    text24: {
      width: "100%",
      marginLeft: 10,
      fontSize: 14,
    },
    textExemple: {
      color: "#EB1D36",
      fontSize: 12,
      marginHorizontal: 25,
      fontFamily: FONTS.vanSansBold,
    },
    text23: {
      fontSize: 16,
      fontFamily: FONTS.vanSansMedium,
      marginRight: "3%",
      width: "90%",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "3%",
    },
    row3: {
      width: 150,
      height: 40,
      borderRadius: 5,
    },
    row2: {
      flexDirection: "row",
      textAlign: "center",
      justifyContent: "space-around",
      width: 150,
      height: 40,
      marginRight: "5%",
      marginTop: "1%",
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 5,
    },
    styleIcon: {
      alignSelf: "center",
      justifyContent: "flex-end",
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

    dropdown: {
      margin: "3%",
      //height: 50,
      width: 150,
      height: 40,
      backgroundColor: "white",
      borderRadius: 5,
      borderColor: "#CFD2CF",
      borderWidth: 1,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default createStyles;