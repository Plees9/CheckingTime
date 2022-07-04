import React , { useMemo }  from "react";  
import {View , Text, Image,ScrollView ,ImageBackground,Alert }   from "react-native";
import { IconButton } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";
import createStyles from "./styles";




const HappyGame = () => {
    const styles = useMemo(() => createStyles(), []);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Happy Game</Text>
        </View>
        <View style={styles.body}>
          <View style={{ flex: 3 }}>
            <View style={{ flex: 2, flexDirection: "row" }}>
              <Icon name="user" size={30} />
              <View style={{ flexDirection:'column' }}>
                <Text style={styles.text1}>baby </Text>
               
                <Text style={styles.text}>baby </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <IconButton
              icon="playlist-star"
              size={30}
              onPress={() => Alert.alert("Simple Button pressed")}
            />
            <Text style={styles.text}> Nhat ki diem</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <IconButton
              icon="gift-open"
              size={30}
              onPress={() => Alert.alert("Simple Button pressed")}
            />
            <Text style={styles.text}> Doi qua</Text>
          </View>
        </View>
        <View style={styles.body2}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>diem hien tai</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center",borderLeftWidth:1  }}
          >
            <Text>diem cao nhat</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.text}>Danh sach Game </Text>
        </View>

        <View style={styles.footer}>
          <ImageBackground source={require("../../../assets/icon.png")}>
            <Text style={styles.text}>xin chao</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    );
}
export default HappyGame;
