import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, backgroundColor:'lightblue',borderWidth:1, padding: 10,marginVertical:30,marginLeft:40, borderRadius:8}}>
                        <Text style={styles.text}>Home</Text>
                    </View>
                    <View style={{flex:1,marginLeft:4, backgroundColor:'lightblue',borderWidth:1,padding: 10,marginVertical:30,marginRight:40,borderRadius:8}}>
                        <Text style={styles.text}>Jobs</Text>
                    </View>
                </View>
                <Text>Workspace của bạn</Text>
                <View style={styles.item}>
                    <Icon name="home" size={30} color="black" />
                    <View>
                        <Text>Home1</Text>
                        <Text>Home2</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;