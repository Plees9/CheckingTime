import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
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
                <View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;