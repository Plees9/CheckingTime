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
      marginTop: "1%",
      alignItems: "center",
      width: "90%",
    },
    view2: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor:"#FFFFFF" ,
      justifyContent: "center",
      borderRadius: 10,
      width: "98%",
      marginTop: "2%",
      marginBottom: "2%",
      marginHorizontal: "1%",
    },
    view3: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor:"#FFFFFF" ,
      justifyContent: "center",
      borderRadius: 10,
      width: "98%",
      marginTop: "2%",
      marginBottom: "2%",
      marginHorizontal: "1%",

      
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
    // Style man cong viec nhan vien
    view_staff1:{
      backgroundColor: "#f2f2f2",
    },
    view_staff2:{
      backgroundColor: "#ffffff",
      borderRadius:10,
      flexDirection: "row",
      alignItems:"center",
      alignSelf:"center",
      width:"96%",
      padding:"3%",
      marginLeft:"2%",
      marginTop:"2%",
      marginRight:"2%",

    },
    avatar_staff:{
      justifyContent:"center",
      marginLeft:"3%",
      width:"10%",
     
    },
    text_staff:{
      flexDirection:"column",
      justifyContent:"center",
      width:"75%",
      marginLeft:"3%",
    },
    icon_staff:{
      width:"10%",
    },

  });

export default createStyles;
