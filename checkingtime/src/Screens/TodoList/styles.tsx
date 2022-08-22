import { StyleSheet, Platform, StatusBar } from 'react-native';
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view: {
      backgroundColor: "#F2F2F2",
      //height: "90%",
      //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
      borderRadius: 10,
      width: "98%",
      height:65,
      marginTop: "2%",
      marginBottom: "1%",
      marginHorizontal: "1%",
      
    },

    view3: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      backgroundColor:"#FFFFFF" ,
      justifyContent: "center",
      borderRadius: 10,
      width: "98%",
      padding:"2%",
      marginTop: "2%",
      marginBottom: "2%",
      marginHorizontal: "1%",
    },

    colomn: {
      flexDirection: "column",
      width: "74%",
      marginRight: "5%",
    },
    colomn1: {
      width: "75%",
      textAlign: "center",
     
    },
    text1: {
     
      width: "75%",
      fontSize: 12,
    },
    render: {
      flexDirection: "row",
      width: "100%",
    },
    render_addtask: {
      width: "100%",
      backgroundColor: "#f2f2f2",
    },
    icon: {
      marginLeft: "3%",
    },
    text: {
      fontSize: 18,
      width: "80%",
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
      marginLeft: "-1%",
    },

    task: {
      width: "76%",
      
    },
    trash: {
      width: "5%",
      marginLeft: "-5%",
    },
    pencil: {
      width: "5%",
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
      //marginHorizontal: "1%",
      paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
      
    text_Content_Todo: {
      marginTop: 5,
      marginLeft:10,
      marginRight:10,
      alignSelf: "center",
      width: "96%",
      height: 100,
      borderRadius: 10,
      backgroundColor: "#FFFFFF",
    },

    viewTime: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1%",
      backgroundColor: "#FFFFFF",
      height:40,
      padding: "2%",
      borderRadius: 10,
      marginTop: 5,
      marginRight: 10,
      marginLeft: 10,
    },
    textTime: {
      width: "50%",
    },
    kedoc: {
      marginLeft: "2%",
      marginRight: "2%",
      height: "100%",
      borderColor: "#7F8487",
      borderWidth: 1,
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
      marginLeft:"1%",
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
    points: {
      textAlign: "center",
      fontFamily: FONTS.vanSansMediumItalic,
      fontSize: 15,
    },
    text_processTask:{
      fontFamily: FONTS.vanSansMedium,
      marginLeft: 5,
    },
    num_total:{
      fontFamily: FONTS.vanSansMedium,
      
    },
    num_done:{
      fontFamily: FONTS.vanSansMedium,
      color:'#3EC70B'
    },
    num_rest:{
      fontFamily: FONTS.vanSansMedium,
      color:'#3d5875'
    },
    
    num_overtime:{
      fontFamily: FONTS.vanSansMedium,
      color:'#e35b45'
    },
    text_processTotal:{
      fontFamily: FONTS.vanSansMedium,
      
    },
    row: {
      flexDirection: "row",
      marginTop: "3%",
    },
    icon_NV: {
      margin: 10,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#ffffff",
    },
    icon1: {
      flexDirection: "row",
      flex: 1,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#ffffff",
      fontWeight: "bold",
    },
    icon_add_task: {
      flexDirection: "row",
      margin: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#ffffff",
      fontWeight: "bold",
    },
    icon3: {
      padding: 5,
      color: "gray",
    },
    // add task
    view_addTask: {
      //width: "100%",
      //flex:1,
    },
    view_btn_add_task: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "1%",
      marginHorizontal: "1%",
      
    },
    style_add_task: {
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      height: "45%",
      backgroundColor: "#ffffff",

    },
    btnFab_add_task: {
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      //marginTop: "5%",
      borderRadius: 20,
      height: "8%",
      width: "70%",
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
    icon_addtask: {
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
    style : {
      marginTop: "3%",
      marginLeft: "8%",
      marginRight: "8%",
      width: "100%",
      justifyContent: "center",
      alignSelf: "center",
    },

  });

export default createStyles;
