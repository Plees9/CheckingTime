import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";



const InfoScreen = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{  backgroundColor: "#DDDDDD" ,padding :10}}>
        <Text style={styles.header}>Tru so chinh</Text>
      </View>
      <View style={{ marginLeft: 30 }}>
        <View style={styles.hang}>
          <IconButton
            icon="office-building"
            size={30}
            color="#7858A6"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#eee9f5",
            }}
          />

          <View>
            <Text style={styles.user}> Tên công ty </Text>
            <TextInput
              style={styles.texta}
              keyboardType="default"
              placeholder="25-99 nhân viên   "
              returnKeyType="done"
              maxLength={12}
              //value={userName}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
          </View>
        </View>
      </View>
      <View style={styles.kengang}></View>
      <View style={{ marginLeft: 30 }}>
        <View style={styles.hang}>
          <IconButton
            icon="phone"
            size={20}
            color="#7858A6"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#eee9f5",
            }}
          />
          <View>
            <Text style={styles.user}> Hotline </Text>
            <TextInput
              style={styles.texta}
              keyboardType="number-pad"
              placeholder="+12345678  "
              returnKeyType="done"
              maxLength={12}
              //value={userName}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
          </View>
        </View>
      </View>
      <View style={styles.kengang}></View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple")}
        >
          <Text style={{ color: "#7858A6" }}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple Button")}
        >
          <Text style={{ color: "#7858A6" }}>Website </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={{ color: "#7858A6" }}>Fanpage</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text>Fanpage</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;
