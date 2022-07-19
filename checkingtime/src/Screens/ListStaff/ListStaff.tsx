import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import createStyles from "./styles";

const ListStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name="bars" size={20} />
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
      
      
    </View>
  );
};

export default ListStaff;
