import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';
import { t } from "react-native-tailwindcss";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#fff',
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
<<<<<<< HEAD
<<<<<<< HEAD
      fontSize: 42,
      fontWeight: 'bold',
      color: "#1363DF",
=======
      fontSize: 220,
      fontStyle:"italic",
>>>>>>> b8831ad88b4261cad91cbc1ea37e126667a9c507
=======
      fontSize: 42,
      fontWeight: 'bold',
>>>>>>> 0e1183785781c606a832d35c281f54371a47baf3
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
  });

  export default styles;