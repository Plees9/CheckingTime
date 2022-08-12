import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import { loadAlluser } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import moment from "moment";


const BangCong_NhanVien = () => {
  const styles = useMemo(() => createStyles(), []);
  // const image = require("../../../assets/images/splash.png");
  const navigation = useNavigation<any>();

  const { user, loading } = useSelector<any, any>((state) => state.auth);
  
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch<any>(loadAlluser());
 }, []);
 const { allUser } = useSelector<any, any>((state) => state.allUser);
 let data: any = [];
 if (typeof allUser !== "undefined") {
   for (var i = 0; i < allUser.array.length; i++) {
     let strAvatar = allUser.array[i].avatar.url;
     let object = {
       id: i + 1,
       name_1: allUser.array[i].name,
       role_1: allUser.array[i].role,
       userId_1: allUser.array[i].userId,
       typeOfEmployee_1: allUser.array[i].typeOfEmployee,
       contractStatus_1: allUser.array[i].contractStatus,
       date_1: moment(new Date(allUser.array[i].startWorkingDate)).format(
         "DD/MM/YYYY"
       ),
       date_Birth_1: moment(new Date(allUser.array[i].birth)).format(
         "DD/MM/YYYY"
       ),
       numberPhone_1: allUser.array[i].phoneNumber,
       gender_1: allUser.array[i].gender,
       avatar_1: allUser.array[i].avatar.url,
     };
     console.log(object);
     data.push(object);
   }
 }
  const ItemRender = ({
    id,
    name_1,
    role_1,
    userID_1,
    typeOfEmployee_1,
    contractStatus_1,
    date_1,
    date_Birth_1,
    numberPhone_1,
    gender_1,
    avatar_1,
  }) => (
    <View style={styles.render}>
      <Text style={styles.userID_1}>{id}</Text>
      <Text style={styles.userName_1}>{name_1}</Text>
     
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
        <SafeAreaView>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ItemRender
                id={item.id}
name_1={item.name_1}
                role_1={item.role_1}
                userID_1={item.userId_1}
                typeOfEmployee_1={item.typeOfEmployee_1}
                contractStatus_1={item.contractStatus_1}
                date_1={item.date_1}
                date_Birth_1={item.date_Birth_1}
                numberPhone_1={item.numberPhone_1}
                gender_1={item.gender_1}
                avatar_1={item.avatar_1}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        </SafeAreaView>
      </View>
    </View>
  );
};
export default BangCong_NhanVien;