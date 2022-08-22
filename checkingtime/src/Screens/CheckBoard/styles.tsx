import { StyleSheet, StatusBar, Platform } from 'react-native';
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    bgr: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    icon1: {
      flexDirection: "row",
      width: 150,
      marginLeft: 10,
      borderRadius: 10,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ebe0ea",
    },
    icon2: {
      marginTop: "2%",
      marginLeft: "3%",
      borderRadius: 15,
      padding: 10,
      width: "45%",
      backgroundColor: "#ebe0ea",
    },
    icon4: {
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      alignSelf: "center",
      marginTop: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#f2f2f2",
    },
    text2: {
      alignItems: "center",
      padding: 5,
      width: "90%",
      marginLeft: 10,
      fontSize: 14,
    },
    view: {
      backgroundColor: "white",
    },
    view1: {
      marginTop: "3%",
      backgroundColor: "#f2f2f2",
    },
    view2: {
      marginTop: "3%",
      width: "100%",
      padding: "3%",
      backgroundColor: "#FFFFFF",
    },
    textDSNV: {
      marginLeft: "3%",
      fontSize: 16,
      fontFamily: FONTS.vanSansSemiBold,
    },
    text_selectNv: {
      marginLeft: "3%",
      marginTop: "2%",
      fontSize: 16,
    },
    icon5: {
      marginTop: "2%",
      marginLeft: 15,
      borderRadius: 15,
      padding: 10,
      width: "45%",
      backgroundColor: "#ebe0ea",
    },
    icon3: {
      padding: 5,
      color: "#9469d7",
    },
    text: {
      color: "#9469d7",
      alignItems: "center",
      marginLeft: 5,
      fontSize: 17,
      fontFamily: FONTS.vanSansSemiBold,
    },
    view_staff2: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      width: "96%",
      padding: "3%",
      marginLeft: "2%",
      marginTop: "2%",
      marginRight: "2%",
    },
    chu11: {
      fontWeight: "bold",
      fontSize: 18,
      width: "100%",
      marginLeft: 10,
    },
    chu1: {
      fontSize: 14,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 5,
      textAlign: "center",
    },
    chu3: {
      fontSize: 14,
      width: 100,
      alignSelf: 'center',
      backgroundColor: "#ebe0ea",
      padding: 10,

      fontFamily: FONTS.vanSansMedium,
    },
    chu5: {
      fontSize: 14,
      width: "100%",
      fontFamily: FONTS.vanSansMedium,
      textAlign: "center",
    },
    chu2: {
      textAlign: "center",
      fontSize: 14,
      width: "115%",
      backgroundColor: "#ebe0ea",
      padding: 5,
      fontFamily: FONTS.vanSansMedium,
    },
    chu4: {
      textAlign: "center",
      alignSelf:'center',
      fontSize: 14,
      width: "100%",
      fontFamily: FONTS.vanSansMedium,
      padding: 5,
    },
    row: {
      flexDirection: "row",
    },
    row2: {
      flexDirection: "row",
      marginTop: "1%",
    },
    column: {
      flexDirection: "column",
    },
    textTop2: {
      marginTop: 10,
      fontSize: 15,
      color: "#413F42",
      fontFamily: FONTS.vanSansSemiBold,
    },
    textTop3: {
      marginTop: 10,
      alignSelf: "flex-end",
      fontSize: 15,
      color: "#ff8c00",
    },
    textTop4: {
      fontSize: 15,
      color: "#9469d7",
      fontFamily: FONTS.vanSansSemiBold,
    },
    image: {
      height: 250,
      width: 250,
      alignSelf: "center",
    },
    no_sreach: {
      color: "#ff8c00",
      textAlign: "center",
      fontSize: 14,
    },
    avatar_staff: {
      justifyContent: "center",
      marginLeft: "3%",
      width: "10%",
    },
    text_staff: {
      flexDirection: "column",
      justifyContent: "center",
      width: "75%",
      marginLeft: "3%",
    },
    icon_staff: {
      width: "10%",
    },
    render: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      alignSelf: "center",
      width: "96%",
      marginTop: "3%",
    },
    userID_1: {
      marginLeft: "3%",
      width: "15%",
      alignItems: "center",
      alignSelf: "center",
    },
    userName_1: {
      width: "60%",
      alignSelf: "center",
    },
    Board_1: {
      width: "12%",
      alignSelf: "center",
    },
    // Table_Board 
    with_id : {
      width: "10%",
      marginLeft: "1%"
    },
    with_name : {
      width: "30%",
      marginLeft: "1%"
    },
    with_lateValue : {
      width: "10%",
      marginLeft: "1%"
    },
    with_earlyValue : {
      width: "10%",
      marginLeft: "1%"
    },
    with_otValue : {
      width: "10%",
      marginLeft: "1%"
    },
    with_point : {
      width: "10%",
      marginLeft: "1%"
    },


   
  });

export default createStyles;