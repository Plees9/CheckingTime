import { StyleSheet, Platform, StatusBar } from 'react-native';
import { FONTS } from "../../../constants/theme";

const createStyles = () =>
  StyleSheet.create({
    view_staff1:{
      backgroundColor: "#f2f2f2",
      
      
    },
    view_staff2:{
      backgroundColor: "#fff",
      flexDirection: "row",
      borderRadius:10,
      width:"96%",
      alignItems:"center",
      alignSelf:"center",
      textAlign:"center",
      padding:10,
      marginLeft:"2%",
      marginTop:"2%",
      marginRight:"2%",
     
    },
    row1_staff:{
      width:"50%" , 
    },
    row2_staff:{
      width:"50%" , 
      alignItems:"center",
      alignSelf:"center",
      textAlign:"center",
      justifyContent:"center",
    },
    avatar_staff:{
      justifyContent:"center",
      alignItems:"center",
      marginBottom:"3%",
    },
    text_staff:{
      
    },
    text2_staff:{
      width:"50%",
      padding:"2%",
    },
    user_staff:{
      width:"90%",
      alignItems:"center",
      alignSelf:"center",
      textAlign:"center",
      
    },
    id_staff:{
      width:"30%",
      alignItems:"center",
      alignSelf:"center",
      
    },
    icon4: {
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      alignSelf: "center",
      marginTop: 10,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#ffffff",
    },
    text2: {
      alignItems: "center",
      padding: 5,
      width: "90%",
      marginLeft: 10,
      fontSize: 14,
    },

    


  });

export default createStyles;
