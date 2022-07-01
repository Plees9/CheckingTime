import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1, backgroundColor:'red',borderWidth:1, marginVertical:30,marginLeft:40}}>
                        <Text style={styles.text}>Home</Text>
                    </View>
                    <View style={{flex:1,marginLeft:4, backgroundColor:'blue',borderWidth:1,marginVertical:30,marginRight:40}}>
                        <Text style={styles.text}>Jobs</Text>
                    </View>
                </View>
                <View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;