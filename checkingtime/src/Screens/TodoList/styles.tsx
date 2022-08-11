import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "#FFFFFF",
      height: "90%",
      marginHorizontal: 10,
      marginTop: "5%",
    },
    view1: {
      flexDirection: "row",
      alignItems: "center",
    },
    view2: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "-1%",
      width: "100%",
    },
    view3: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
   
    colomn: {
      flexDirection: "column",
      width: "74%",
    },
    colomn1: {
      flexDirection: "column",
      marginLeft: "3%",
      width: "85%",
    },
    text1: {
      marginLeft: "3%",
      fontSize: 12,
    },
    render: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",

      marginTop: "3%",
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
      flexDirection: "row",
      alignItems: "center",

      
    },
    checkbox1: {
      width: "10%",
    },
    task: {
      width: "74%",
      marginLeft: "1%",
    },
    trash: {
      width: "10%",
      marginLeft: "1%",
    },
    pencil: {
      width: "10%",
      marginLeft: "1.5%",
    },

    fab: {
      marginLeft: "4%",
    },

    btnFab: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: "5%",
    },
    btnFab_1: {
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
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
      marginHorizontal: "3%",
      marginTop: "10%",
    },
    text_Content_Todo: {
      marginTop: "3%",
      //marginBottom: "3%",
      alignSelf: "center",
      width: "100%",
      height: "30%",
      borderColor: "#f2f2f2",
      borderWidth: 1,
    },
    dropdown: {
      marginTop: "3%",
      marginBottom: "3%",
      height: 40,
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
   
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: "1%",
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
    viewTime: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "3%",
      borderColor: "#EEEEEE",
      borderWidth: 1,
      padding: "2%",
      width: "100%",
    },
    textTime: {
      width: "15%",
    },
    kedoc: {
      marginLeft: "2%",
      marginRight: "2%",
      borderColor: "#EEEEEE",
      borderWidth: 0.5,
    },
    textDate: {
      width: "70%",
    },
    iconClock: {
      width: "18%",
     
    },
  });

export default createStyles;
