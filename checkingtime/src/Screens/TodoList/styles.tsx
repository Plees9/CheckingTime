import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "#FFFFFF",
      height: "90%",
    },
    view1: {
      marginTop: "3%",
      flexDirection: "row",
      alignItems: "center",
    },
    view1_1: {
      marginTop: "1%",
      marginHorizontal: "3%",
    },
    view1_2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
    },
    view2: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      borderBottomColor: "#f2f2f2",
      borderBottomWidth: 1,
      
    },
    view3: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomColor: "#f2f2f2",
      borderBottomWidth: 1,
      width: "100%",
    },
   
    colomn: {
      flexDirection: "column",
      width: "74%",
    },
    colomn1: {
      width: "75%",
      
    },
    text1: {
      marginLeft: "3%",
      width: "75%",
      fontSize: 12,
      
    },
    render: {
      flexDirection: "row",
      width: "100%",
    },
    icon: {
      marginLeft: "3%",
    },
    text: {
      fontSize: 18,
      marginLeft: "3%",
    },
    kengang: {
      marginTop: "3%",
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      width: "100%",
    },
    checkbox: {
      width: "10%",
      marginRight: "2%",
     
    },
    checkbox_1: {
      color: "#f49218",
     
    },
    checkbox1: {
      width: "10%",
      borderRadius: 20,
      padding: "5%",
      borderWidth: 1,
      borderColor: "#f49218",

    },
    checkbox1_1: {
      width: "10%",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#f49218",
      height: "94%",
      
    },
    checkbox_text: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "2%",
      
    },
    checkbox2: {
      borderRadius: 20,
      height: "90%",
      marginRight: "2%",
      borderColor: "#f49218",
      borderWidth: 1,
    },
    task: {
      width: "76%",
      marginLeft: "1%",
      
    },
    trash: {
      width: "8%",
      marginLeft: "-5%",
    },
    pencil: {
      width: "10%",
      marginLeft: "3%",
    },

    fab: {
      marginLeft: "4%",
    },
    btnFab: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: "3%",
      marginRight: "5%",
    },
    btnFab_1: {
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      marginTop: "3%",
      borderRadius: 20,
      height: "10%",
      width: "70%",
    },
    textComfirm: {
      fontSize: 18,
      textAlign: "center",
      padding: "3%",
      width: 255,
      height: 45,
      
    },
    viewAdd_todo: {
      marginHorizontal: "1%",
      marginTop: "3%",
    },
    text_Content_Todo: {
      marginTop: "3%",
      marginBottom: "2%",
      alignSelf: "center",
      width: "100%",
      height: "20%",
      borderColor: "#CFD2CF",
      borderWidth: 1,
      borderRadius: 10,
    },
    
    viewTime: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "3%",
      borderColor: "#A2B5BB",
      borderWidth: 1,
      padding: "2%",
      width: "100%",
    },
    textTime: {
      width: "15%",
      marginLeft: "3%",
    },
    kedoc: {
      marginLeft: "2%",
      marginRight: "2%",
      borderColor: "#A2B5BB",
      borderWidth: 0.5,
    },
    textDate: {
      width: "70%",
    },
    iconClock: {
      width: "18%",
    },
    text_Description: {
      width: "100%",
      height: "100%",
      
    },
  });

export default createStyles;
