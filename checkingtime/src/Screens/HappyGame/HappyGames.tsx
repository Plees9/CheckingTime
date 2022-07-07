import React , { useMemo ,useState}  from "react";  
import {View , Text, Image,ScrollView ,ImageBackground,Alert ,useWindowDimensions }   from "react-native";
import { IconButton } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import DoiQua from "../DoiQua/DoiQua";
import NhatKyDiem from '../NhatKyDiem/NhatKyDiem';

import HappyGameNavigation from "../../navigation";






const HappyGame = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();



  // const NhatKyDiem = () => {
  //   console.warn("NhatKyDiem");
  //   navigation.navigate('NhatKyDiem');
  // }

    const styles = useMemo(() => createStyles(), []);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <View style={{ flex: 3, backgroundColor: "pink" }}>
            <View
              style={{ flex: 2, flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="user" size={30} color="#46b5ff" />
              <View style={{ flexDirection: "column" }}>
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
              color="#46b5ff"
              onPress={() =>
                navigation.navigate("NhatKyDiem")}
            />
            <Text style={styles.text}> Nhat ky diem</Text>
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
              color="#46b5ff"
              onPress={() => navigation.navigate("DoiQua")}
              
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
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderLeftWidth: 1,
            }}
          >
            <Text>diem cao nhat</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.text}>Danh sach Game </Text>
        </View>
        <View style={styles.footer}>
          <ImageBackground source={require("../../../assets/icon.png")}>
            <View>
              <Text style={styles.text}>xin chao</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
}
export default HappyGame;
