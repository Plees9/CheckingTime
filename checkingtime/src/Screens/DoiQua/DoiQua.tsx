
import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
  SafeAreaView,
  Pressable

} from "react-native";
import { IconButton } from "react-native-paper";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const DoiQua = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={{ flex: 2, flexDirection: "row" }}>
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
            <Text style={styles.text}> name</Text>

            <Text style={styles.text}> ten</Text>
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
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          borderRadius: 10,
          borderWidth: 1,
          backgroundColor: "white",

        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Pressable
            style={styles.press}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text> diem hien tai</Text>
          </Pressable>

          <Pressable
            style={styles.press}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text> diem </Text>
          </Pressable>
          <Pressable
            style={styles.press}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <Text> hien tai</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>
        <Text>Chua co du lieu</Text>
      </View>
    </SafeAreaView>
  );
};
export default DoiQua;
