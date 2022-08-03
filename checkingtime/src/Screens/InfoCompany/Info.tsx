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
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "react-native-paper";

const InfoScreen = () => {
  const { company, loading } = useSelector<any, any>((state) => ({
    ...state.company,
  }));
  const { user } = useSelector<any, any>((state) => ({ ...state.auth }));
  console.log(company);
  console.log(user);
  const styles = useMemo(() => createStyles(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#DDDDDD", padding: 10 }}>
        <Text style={styles.header}>Trụ sở chính</Text>
      </View>
      <View style={{ marginLeft: 10 }}>
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

          <View style={styles.khoiInfo}>
             <Text style={styles.user}>{company.company.name}</Text> 
            <Text style={styles.texta}>{company.company.size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.kengang}></View>
      <View style={{ marginLeft: 10 }}>
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
            <Text style={styles.user_1}>Hotline</Text>

            <Text style={styles.texta}>{company.company.hotline}</Text>
            <View style={styles.kengang1}></View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert(company.company.introduction)}
        >
          <Text style={styles.textend}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => Alert.alert("")}
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
