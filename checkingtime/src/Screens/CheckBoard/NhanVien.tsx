import { View, Text, Image } from "react-native";
import React, { useMemo, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";

import { useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import { useSelector } from "react-redux";

const BangCong_NhanVien = () => {
  const styles = useMemo(() => createStyles(), []);
  const image = require("../../../assets/images/bn.jpg");
  const navigation = useNavigation<any>();

  const { user, loading } = useSelector<any, any>((state) => state.auth);

  const [userName, setUserName] = useState(user.name); //name
  const [userId, setUserId] = useState(user.userId); //MaNV
  const [number, setNumber] = useState(user.number); //SoGio

  const [data, setData] = useState([
    {
      id: 1,
      name_1: userName,
      userId_1: userId,
      number_1: number,
    },
  ]);
  const ItemRender = ({}) => (
    <View style={styles.render}>
      <Text style={styles.userID_1}>{userId}</Text>
      <Text style={styles.userName_1}>{userName}</Text>
      <Text style={styles.Board_1}>{number}30</Text>
    </View>
  );

  return (
    <View style={styles.bgr}>
      <View>
        <View style={styles.icon4}>
          <Icon name="search" size={20} />
          <TextInput
            style={styles.text2}
            placeholder="Nhập tên nhân viên của bạn"
            returnKeyType="done"
          ></TextInput>
        </View>
      </View>

      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.textDSNV}>Danh sách nhân viên của tôi</Text>
          <Text style={styles.text_selectNv}>
            {" "}
            Chọn nhân viên để xem bảng công tương ứng
          </Text>
        </View>

        <ItemRender />
      </View>
    </View>
  );
};
export default BangCong_NhanVien;
