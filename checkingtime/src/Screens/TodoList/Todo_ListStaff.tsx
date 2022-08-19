import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useMemo, useState } from "react";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {  useNavigation, useRoute } from "@react-navigation/native";
import { loadAlluser, loadTaskById, queryUser } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";

import Loader from '../../navigation/Loader';
const Todo_ListStaff = () => {
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
      let strAvatar = allUser.array[i].avatar.url;
      let object = {
        id: i + 1,
        _id: allUser.array[i]._id,
        name_1: allUser.array[i].name,
        avatar_1: allUser.array[i].avatar.url,
        // sumWork_1: allUser.array[i].sumWork,
        // workDone_1: allUser.array[i].workDone,
      };
      data.push(object);
    }
  }  const ItemRender = ({ id,_id, name_1, avatar_1 }) => (
    <View>
      {/* <Link to={`${serverUrl}/user/${_id}`} > */}
      <TouchableOpacity onPress={() => { 
        navigation.navigate("Công việc của nhân viên", {name_1, _id})
        }}>
      
      <View style={styles.view_staff2}>
        <View style={styles.avatar_staff}>
          <Avatar rounded source={{ uri: avatar_1 }} size={36} />
        </View>
        <View style={styles.text_staff}>
          <Text>{name_1}</Text>
          <Text>Hoàn thành: 3/5</Text>
        </View>
        <View style={styles.icon_staff}>
          <Icon
            name="angle-double-right"
            size={34}
            color="#f49218"
            
          />
        </View>
      </View>
     
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
  if (typeof allUser === "undefined") {
    return <Loader />
}
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.row}>
        <View style={styles.icon_NV}>
          <Icon
            name="bars"
            size={20}
            color="#8f73f6"
            onPress={() => {
              if  (route.params) {
              let name = route.params.value_Name
              let workDone =  route.params.value_WorkDone // workDone chua xong
             
              navigation.navigate("Bộ lọc công việc hoàn thành", {name, workDone})
            }
              else {
                let name = "" 
                let workDone =  "" 
                navigation.navigate("Bộ lọc công việc hoàn thành", {name, workDone})
              }
            }}
              
          />
        </View>
        <View style={styles.icon1}>
          <Icon name="search" size={20} color= "#8f73f6" style={styles.icon3} />
          <TextInput
            style={styles.text}
            placeholder="Tìm kiếm"
            returnKeyType="done"
            onChangeText={(text) => { 
            if (route.params) {
            dispatch<any>(queryUser(text, route.params.value_Name, route.params.value_WorkDone)) // workDone chua xong
            } else {
            dispatch<any>(queryUser(text, "", "", "", ""))
            }
            setSearch(text)}}
            value={search}

          ></TextInput>
          
        </View>
       
      </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ItemRender
              id={item.id}
              _id={item._id}
              name_1={item.name_1}
              avatar_1={item.avatar_1}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      
    </SafeAreaView>
  );
};

export default Todo_ListStaff;