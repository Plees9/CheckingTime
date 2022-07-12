import { BackHandler } from "react-native";
import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
  SafeAreaView,
} from "react-native";
import { IconButton } from "react-native-paper";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const NhatKyDiem = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, marginTop: 30 }}>
          <IconButton
            icon={() => <Icon name="arrow-left" size={20} color="black" />}
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Nhat ky diem</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <IconButton
            icon={() => <Icon name="user" size={40} color="black" />}
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 15 }}> name</Text>

            <Text style={{ fontSize: 15 }}> ten</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            borderRadius: 10,
            marginRight: 20,
          }}
        >
          <IconButton
            icon="gift-open"
            size={30}
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          <Text>name </Text>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 10,
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text> sddka</Text>
            <Text> 0</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 10,
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text>adadas</Text>
            <Text> 0</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 10,
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text> sddka</Text>
            <Text> 0</Text>
          </View>
        </View>

        <ScrollView style={{ flex: 2 }}>
          <Text> lich su diem thuong</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default NhatKyDiem;
