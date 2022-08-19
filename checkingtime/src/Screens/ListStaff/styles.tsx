import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";
import MaskedView from '@react-native-masked-view/masked-view';

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "white",
      flex: 1,
    },
    row: {
      flexDirection: "row",
      marginTop: "3%",
    },
    icon: {
      margin: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#f2f2f2",
    },
    iconPlus: {
      margin: 10,
    },
    icon1: {
      flexDirection: "row",
      flex: 1,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
    icon3: {
      padding: 5,
      color: "gray",
    },
    text: {
      alignItems: "center",
      marginLeft: 10,
      fontSize: 14,
      width: "80%",
      
    },

    view1: {
      backgroundColor: "#f2f2f2",
      height: "100%",
      
    },
    view2: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      width: "100%",
      marginTop: "1%",
      borderRadius: 10,
    },
    hang: {
      flexDirection: "row",
      borderRadius: 5,
      margin: "3%",
    },
    avt: {
      marginTop: "1%",
    },
    khoiUser: {
      flexDirection: "column",
      textAlign: "flex-start",
      marginLeft: "5%",
      marginRight: "3%",
      width: "70%",
    },
    user: {
      fontSize: 16,
      fontFamily: FONTS.vanSansBold,
      marginTop: "2%",
    },
    iconPhone: {
      marginTop: "3%",
      color: "#8f73f6",
    },
    trash: {
      marginLeft: "10%",
      marginBottom: "3%",
      color: "#8f73f6",
    },
    hang2: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%",
      marginBottom: "3%",
      marginLeft: "3%",
    },
    hang4: {
      flexDirection: "row",
    },
    view3: {
      borderWidth: 1,
      borderRadius: 5,
      width: "25%",
      height: "90%",
      textAlign: "center",
      alignItems: "center",
      fontFamily: FONTS.vanSansMedium,
      //padding: "2%",
      borderColor: "#8f73f6",
      
    },
    view3_1: {
      borderWidth: 1,
      borderRadius: 5,
      fontFamily: FONTS.vanSansMedium,
      width: "20%",
      height: "90%",
      textAlign: "center",
      //padding: "2%",
      borderColor: "#8f73f6",
    },
    view3_2: {
      borderWidth: 1,
      borderRadius: 5,
      width: "40%",
      height: "90%",
      textAlign: "center",
      fontFamily: FONTS.vanSansMedium,
      //padding: "2%",
      borderColor: "#8f73f6",
    },
    hang3: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    cot1: {
      flexDirection: "column",
    },
    textInfo: {
      fontFamily: FONTS.vanSansSemiBold,
    },
    kengang: {
      borderBottomColor: "#f2f2f2",
      borderBottomWidth: 3,
      width: "100%",
      marginTop: "3%",
      marginBottom: "1.5%",
    },

    text1: {
      textAlign: "center",
      fontSize: 14,
      marginBottom: "2%",
      marginTop: "1%",
      color: "#9469d7",
      fontFamily: FONTS.vanSansMedium,
    },
    itemText: {
      fontSize: 26,
      color: 'black',
      textTransform: 'capitalize'
    },
    text_role: {
      fontSize: 14,
      color: "#000",
      fontFamily: FONTS.vanSansMedium,
    },
  });

export default createStyles;
