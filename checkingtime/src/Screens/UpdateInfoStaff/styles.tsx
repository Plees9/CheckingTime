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
    avatar: {
      alignItems: "center",
      marginTop: "3%",
      marginBottom: "3%",
    },
    textuserName: {
      alignItems: "center",
    },
    khoi: {
      marginLeft: "1%",
      marginRight: "3%",
    },
    khoi_2: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin: "3%",
      
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
    },
    text23_1: {
      fontSize: 18,
      textAlign: "center",
      width: "100%",
      fontFamily: FONTS.vanSansBoldItalic,
    },
    text23_2: {
      fontSize: 14,
      textAlign: "center",
      width: "100%",
      fontFamily: FONTS.vanSansMedium,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "3%",
     
    },
    row1: {
      flexDirection: "row",
      textAlign: "center",
      width: 150,
      height: 40,
      marginTop: "1%",
      marginLeft: "3%",
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 5,
    },
    
    row2: {
      flexDirection: "row",
      textAlign: "center",
      width: 150,
      height: 40,
      marginRight: "3%",
      marginTop: "1%",
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
      width: "80%",
      height: "7%",
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginTop: "8%",
      marginRight: "5%",
      marginLeft: "5%",
    },
    dropdown: {
      marginLeft: "1%",
      marginRight: "5%",
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
    dropdown_1: {
      marginLeft: "5%",
    
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
