import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      marginRight: "6%",
      marginLeft: "6%",
      marginTop: "3%",
    },
    viewbgr: {
      backgroundColor: "#FFFFFF",
    },
    textTop: {
      fontSize: 16,
      //color: "#413F42",
      fontFamily: FONTS.vanSansSemiBold,
    },
    textTop2: {
      marginTop: "3%",
      fontSize: 16,
      //color: "#413F42",
      fontFamily: FONTS.vanSansSemiBold,
    },
    text22: {
      fontSize: 20,
      color: "#FFFFFF",
      width: 250,
      height: 45,
      padding: 8,
      fontFamily: FONTS.vanSansSemiBold,
      textAlign: "center",
    },
    btn2: {
      width: 300,
      height: 45,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginTop: 30,
    },
    style : {
      marginTop: "3%",
      marginLeft: "8%",
      marginRight: "8%",
      width: "100%",
      justifyContent: "center",
      alignSelf: "center",
    },
    dropdown: {
      //margin: 16,
      height: 50,
      backgroundColor: "#f2f2f2",
      borderRadius: 10,
      padding: 12,
      shadowColor: '#000',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
