import { StyleSheet } from 'react-native';


const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 15,
    },
    body: {
      flex: 1,
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 10,
      marginHorizontal: 20,
      marginTop: 10,
      marginBottom: 10,
      alignContent: "center",
      justifyContent: "center",
    },
    hang: {
      flexDirection: "row",
    },
    user: {
      fontSize: 14,
      color: "#7F8487",
      marginTop: "3%",
      marginLeft: 15,
      alignItems: "flex-start",
    },
  });

export default createStyles;