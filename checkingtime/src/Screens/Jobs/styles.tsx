import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';
import { t } from "react-native-tailwindcss";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight,
      backgroundColor: '#fff',
    },
    scrollView: {
      marginLeft: 10,
    },
    text: {

      fontSize: 42,
      fontWeight: 'bold',
      color: "#1363DF",
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
    chu11: {
      //fontWeight: "bold",
      fontSize: 30,
      width: "100%",
      backgroundColor: "#DDDDDD",
      padding: 5,
      marginTop: 10,
      
    },
    scrollView1: {
      flexDirection: "row",
      marginLeft: 10,
    },
    text1: {
      textAlign: "center",
      
    },
    iconbtn: {
       alignContent: "center",
        marginLeft: 15,
    },
  });

  export default styles;