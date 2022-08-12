import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "react-native-paper";
const InfoScreen = () => {

  const { company, loading } = useSelector<any, any>((state) =>state.company)
  const styles = useMemo(() => createStyles(), []);
const openUrl = async (url: string) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) { 
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`); 
    }
  }

  // CALL phone number
  const dialCall = (hotline: any) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${hotline}`; }
    else {phoneNumber = `telprompt:${hotline}`; }
    Linking.openURL(phoneNumber);
 };
 
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
            color="#716DF2"
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
            color="#716DF2"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#eee9f5",
            }}
          />
          <View>
            <Text style={styles.user_1}>Hotline</Text>

            
            <TouchableOpacity>
              <Text style={styles.texta} onPress={() => dialCall(company.company.hotline)}>{company.company.hotline}</Text>
            </TouchableOpacity>
            <View style={styles.kengang1}></View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => openUrl(company.company.introduction)}
        >
          <Text style={styles.textend}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => openUrl(company.company.website)}
        >
          <Text style={styles.textend}>Website </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnForgot}
          onPress={() => openUrl(company.company.fanpage)}
        >
          <Text style={styles.textend}>Fanpage</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;
