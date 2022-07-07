import { StyleSheet } from 'react-native';


const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    textHeader: {
      fontSize: 30,
      fontStyle: "italic",
    },

    header: {
      flex: 1,
      marginTop: 20,
      marginLeft: 20,
    },
    body: {
      backgroundColor: "dff6ff",
      flex: 1,
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 20,
    },
    body2: {
      flex: 1,
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      borderWidth: 1,
      borderRadius: 10,
      padding: 5,
    },

    text: {
      fontSize: 15,
      justifyContent: "flex-end",
    },
    text1: {
      fontSize: 15,
    },
    image: {
      width: "100%",
      height: 250,
      alignItems: "center",
    },
    footer: {
      flex: 3,
      justifyContent: "flex-end",
      resizeMode: "center",
    },
    text2: {
      fontSize: 15,
      alignSelf: "center",
    },
  });

export default createStyles;