import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";

import { IconButton } from "react-native-paper";

const InfoScreen = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#DDDDDD", padding: 10 }}>
        <Text style={styles.header}>Trụ sở chính</Text>
      </View>
      <View style={{ marginLeft: 15 }}>
        <View style={styles.hang}>
          <IconButton
            icon="office-building"
            size={30}
            color="#f49218"
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
      <View style={{ marginLeft: 15 }}>
        <View style={styles.hang}>
          <IconButton
            icon="phone"
            size={20}
            color="#f49218"
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
            <View style={styles.kengang1}></View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple")}
        >
          <Text style={styles.textend}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple Button")}
        >
          <Text style={styles.textend}>Website </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.textend}>Fanpage</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;
