import { StyleSheet } from 'react-native';


const createStyles = () =>
  StyleSheet.create({
    image : {
      width: 200,
      height: 200,
      marginTop: 80,
      alignSelf: 'center',
      borderRadius: 200 / 2,
      marginBottom: 20,
    },
    view: {
      marginTop: 80,
      marginHorizontal: 20,
      alignSelf: 'center',
    },
    textWelcome: {
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FF4949',
    },
    colorBgr: {
      backgroundColor: '#6E85B7',
      width: '100%',
      height: '100%',
    },
    container: {
      marginLeft: 30,  
      fontSize: 8,
      marginHorizontal: 40,
      
    },
    btn: {
      marginVertical: 10,
      fontSize: 12,
    },
    icon : {
      width:50,
      height: 50,
      padding: 10,
      borderRadius: 50 / 2,
      marginHorizontal: 15,
      backgroundColor: '#3B5998',
      alignSelf: 'center',
      alignItems: 'center',
    },
    icon1 : {
      width:50,
      height: 50,
      padding: 10,
      borderRadius: 50 / 2,
      //marginHorizontal: 15,
      backgroundColor: '#FF0063',
      alignSelf: 'center',
      alignItems: 'center',
    },
    icon2 : {
      width:50,
      height: 50,
      padding: 12,
      borderRadius: 50 / 2,
      marginHorizontal: 15,
      backgroundColor: '#937DC2',
      alignSelf: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      marginTop: 15,
      alignSelf: 'center',
    },
    text: {
      fontSize: 15,
      color: '#F32424',
      alignSelf: 'center',
      marginTop: 20,
    },
    styleIcon: {
      flexDirection: 'row',
    },
    styleTT:{
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 50,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    textInput: {
      color: '#F32424',
    },
    text1:{
      fontSize: 12,
      margin: 15,
    },
    btnNext : {
      width: 100,
      height: 50,
      alignSelf: 'center',
      borderRadius: 20,
    },
    btnForgot : {
      alignSelf: 'flex-end',
      marginTop: 10,
      marginRight: 50,
      fontWeight: '200',
    },
  });

export default createStyles;