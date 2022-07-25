import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo } from "react";
import createStyles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const QuanLy = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name="bars"
            size={20}
            onPress={() => navigation.navigate("Bộ lọc đơn từ")}
          />
        </View>
        <View style={styles.icon1}>
          <Icon name="search" size={20} style={styles.icon3} />
          <TextInput
            style={styles.text}
            placeholder="Mã đơn, lý do tạo đơn"
            returnKeyType="done"
          ></TextInput>
        </View>
      </View>
      <ScrollView style={styles.scrollview}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/2/16/880654/Midu10.jpg",
          }}
        />
        <Text style={styles.text1}> Không tìm thấy đơn nào!</Text>
      </ScrollView>
    </View>
  );
};

export default QuanLy;
