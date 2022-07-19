import { StyleSheet, StatusBar } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "white",
    },
    view1: {
      backgroundColor: "#f2f2f2",
      height: "100%",
    },
    view2: {
      flexDirection: "column",
       backgroundColor: "#FFFFFF",
       height: "100%",
        margin:"3%",
        borderRadius:10,
    },
    view3: {
      borderWidth: 1,
      borderRadius: 5,
      //justifyContent: "center",
      height:"70%",
      textAlign: "center",
      color: "orange",
      padding: "2%",
      borderColor: "orange",

    },
   
    row: {
      flexDirection: "row",
      marginTop: 8,
    },
    icon: {
      margin: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#f2f2f2",
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
      color:"gray",
    },
    text: {
      alignItems: "center",
      marginLeft: 10,
      fontSize: 14,
    },
   
    hang: {
      flexDirection: "row",
      borderRadius: 5,
      margin: "3%",
      width: "95%",
    },
    hang2: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "45%",
      marginLeft: "3%",
      borderColor: "orange",
    },
    user: {
      fontSize: 16,
      flexDirection: "column",
      width: "100%",
      fontWeight: "bold",
      marginLeft: "10%",
      marginTop: "2%",
    },
    iconPhone: {
      marginLeft: "50%",
      marginTop: "3%",
      color: "orange",
    },
    avt: {
      marginTop: "1%",
    },


  });

export default createStyles;