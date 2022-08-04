import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CuaToi = () => {
  const styles = useMemo(() => createStyles(), []);
  const [search, setSearch] = useState("");
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
            value={search}
            onChangeText={setSearch}
          ></TextInput>
        </View>
      </View>
      <ScrollView style={styles.scrollview}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://image2.tin247.news/pictures/2021/09/23/bcd1632409191.jpg",
          }}
        />
        <Text style={styles.text1}> Không tìm thấy đơn nào!</Text>
      </ScrollView>
    </View>
  );
};

export default CuaToi;
