import { BackHandler, TextInput, useWindowDimensions } from "react-native";
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
import { Avatar } from "@rneui/themed";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const NhatKyDiem = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();
    const styles = useMemo(() => createStyles(), []);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.hang}>
            {/* <Image source={require('../../assets/images/midu.jpg')} /> */}
            {/* <Icon name="user-circle" size={60} color="#DFDFDE" /> */}
            <Avatar
              size={70}
              rounded
              source={{
                uri: "https://image2.tin247.news/pictures/2021/09/23/bcd1632409191.jpg",
              }}
              containerStyle={{ backgroundColor: "orange" }}
            >
              <Avatar.Accessory size={24} />
            </Avatar>
            <View>
              <TextInput style={styles.user} placeholder="Username" />
              <TextInput style={styles.user} placeholder=" vị trí" />
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
              onPress={() => navigation.navigate("Doi Qua")}
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
            <View style={styles.body}>
              <Text> sddka</Text>
              <Text> 0</Text>
            </View>
            <View style={styles.body}>
              <Text>adadas</Text>
              <Text> 0</Text>
            </View>
            <View style={styles.body}>
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
}
export default NhatKyDiem
