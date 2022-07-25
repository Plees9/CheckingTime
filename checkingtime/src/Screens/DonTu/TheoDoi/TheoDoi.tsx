import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo } from "react";
import createStyles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const TheoDoi = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name="bars"
            size={20}
            onPress={() => navigation.navigate("Bộ lọc")}
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
            uri: "https://image-us.24h.com.vn/upload/1-2020/images/2020-02-13/1581553713-66-midu1-1581498876-width660height825.jpg",
          }}
        />
        <Text style={styles.text1}> Không tìm thấy đơn nào!</Text>
      </ScrollView>
    </View>
  );
};

export default TheoDoi;
