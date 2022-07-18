import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Button,
  Pressable,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../../assets/images/ah.jpg")}
          style={styles.imagebgr}
        >
          <TouchableOpacity onPress={() => Alert.alert("image clicked")}>
            <View style={styles.row}>
              <Icon name="user" size={26} color="white" style={styles.icon} />
              <Text style={styles.text1}> Xin chao, "userName"</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.icon2}>
              <Text style={styles.text}>Home</Text>
            </View>
            <View style={styles.icon2}>
              <Text style={styles.text}>Jobs</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text>Workspace của bạn</Text>
        <View style={styles.item}>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Icon name="home" size={30} color="black" />
          </View>
          <View>
            <Text>Home1</Text>
            <Text>Home2</Text>
          </View>

          <Pressable
            style={{
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 100,
              backgroundColor: "lightblue",
            }}
          >
            <Icon
              name="reload1"
              size={20}
              onPress={() => Alert.alert("phucleedepzai")}
            />
          </Pressable>
        </View>
        <Text>Top 5 hôm nay</Text>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <View>
            <View style={styles.item2}>
              <Text>01</Text>
              <Text>Person1</Text>
              <Text>Xephang</Text>
            </View>

            <View style={styles.item2}>
              <Text>02</Text>
              <Text>Person2</Text>
              <Text>Xephang</Text>
            </View>

            <View style={styles.item2}>
              <Text>03</Text>
              <Text>Person3</Text>
              <Text>Xephang</Text>
            </View>

            <View style={styles.item2}>
              <Text>04</Text>
              <Text>Person4</Text>
              <Text>Xephang</Text>
            </View>

            <View style={styles.item2}>
              <Text>05</Text>
              <Text>Person5</Text>
              <Text>Xephang</Text>
            </View>
            <Pressable onPress={() => Alert.alert("chưa có gì cả")}>
              <Text
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  color: "orange",
                }}
              >
                Xem thêm
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
