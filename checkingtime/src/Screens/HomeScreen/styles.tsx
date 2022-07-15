
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
    },
    scrollView: {
      marginTop: 10,
      
    },
    text: {
      fontSize: 20,
      padding: 20,
      justifyContent: "center",

      
    },
    separate: {
      backgroundColor: '#DFF6FF',
      fontSize: 30,
      padding: 10,
      borderRadius: 25,
    },
    btn: {
        backgroundColor: 'pink',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 200,
        height: 50,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "space-between",
      },
      item2: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        marginHorizontal: 20,
        backgroundColor: "pink",
        borderRadius: 10,
        justifyContent: "space-between",
      },
      image: {
        width: "100%",
        height: 150,
        alignItems: "center",
      },
      body: {
        backgroundColor: "dff6ff",
        flex: 1,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
      },
  });

  export default styles;