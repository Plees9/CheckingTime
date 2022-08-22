import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { loadAlluser, loadTaskById, queryUser } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";

import Loader from "../../navigation/Loader";
import createStyles from "./styles_board";

const BangCong_NhanVien = () => {
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [search, setSearch] = useState("");
  const serverUrl = "https://timekeeper-01.herokuapp.com/api/v1";
  const route = useRoute () 

  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(loadAlluser());
  }, []);
  let data: any = [];
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      let object = {
        id: i + 1,
        _id: allUser.array[i]._id,
        userId_1: allUser.array[i].userId,
        name_1: allUser.array[i].name,
        avatar_1: allUser.array[i].avatar.url,
      };
      data.push(object);
    }
  }
  // const { timesheetFilter } = useSelector<any, any>((state) => state.timesheet);
  // console.log(timesheetFilter);
  // if (typeof timesheetFilter !== "undefined" && timesheetFilter !== null)
  // {
  //   for (var i = 0; i < timesheetFilter.timesheetTable.length; i++) {
  //     let object = {
  //     lateNumber: timesheetFilter.timesheetData[i].checkinLate.number,
  //     earlyNumber: timesheetFilter.timesheetData[i].checkoutEarly.number,
  //     otNumber: timesheetFilter.timesheetData[i].overtime.number,
  //     actualPoint: timesheetFilter.timesheetData[i].point.actual,
  //     maxPoint: timesheetFilter.timesheetData[i].point.max,
  //   };
  //   data.push(object);
  // }
  const ItemRender = ({ id, userId_1, _id, name_1, avatar_1 }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Công việc của nhân viên", { name_1, _id });
        }}
      >
        <View style={styles.view_staff2}>
          <View style={styles.row1_staff}>
            <View style={styles.avatar_staff}>
              <Avatar rounded source={{ uri: avatar_1 }} size={36} />
            </View>
            <View >
              <Text style={styles.user_staff}>{name_1}</Text>
              <Text style={styles.id_staff}>ID: {userId_1}</Text>
            </View>
          </View>

          <View style={styles.row2_staff}>
            <View>
              <Text>OT: 03 lần</Text>
              <Text>Về sớm: 02 lần</Text>
              <Text>Đi muộn: 02 lần</Text>
              <Text>Công tháng: 01/22 </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  if (typeof allUser === "undefined") {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{flex: 1,}}>
      
      <View style={styles.icon4}>
          <Icon name="search" size={20} />
          <TextInput
            style={styles.text2}
            placeholder="Nhập tên nhân viên của bạn"
            returnKeyType="done"
            onChangeText={(text) => { 
            if (route.params) {
            dispatch<any>(queryUser(text, route.params.value_4, route.params.value_5, route.params.value_6, route.params.value_7))
            } else {
            dispatch<any>(queryUser(text, "", "", "", ""))
            }
            setSearch(text)}}
            value={search}
          ></TextInput>
        </View>
      
      
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ItemRender
              id={item.id}
              _id={item._id}
              userId_1={item.userId_1}
              name_1={item.name_1}
              avatar_1={item.avatar_1}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      
    </SafeAreaView>
  );
};
export default BangCong_NhanVien;