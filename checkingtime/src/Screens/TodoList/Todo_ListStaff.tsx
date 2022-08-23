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
import { findIndex } from 'lodash';
const Todo_ListStaff = () => {
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [search, setSearch] = useState("");
  const serverUrl = "https://timekeeper-01.herokuapp.com/api/v1";
  
  const route = useRoute () 

  const { allUser, taskContributor } = useSelector<any, any>(
    (state) => state.allUser
  );
  console.log(taskContributor);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch<any>(loadAlluser());
  }, []);
  // let datatask = [] ;
  // if (typeof taskContributor !== "undefined"  ) {
  //     for (var i = 0; i < taskContributor.tasks.length; i++) {
  //       for (var i = 0; i < allUser.array.length; i++) {
        
  //       let workDone = 0 ;
  //       let index = taskContributor.tasks.contributorIds.findIndex(x => x.equals(allUser.array[i]._id))
  //        for (var j = 0; j < taskContributor.tasks.contributors.length; i++) {
  //         if(allUser.array[i].name === taskContributor.tasks[i].contribu ) {

  //         }


  // 
  let data: any = [];
  if (typeof allUser !== "undefined"  ) {
    for (var i = 0; i < allUser.array.length; i++) {
      
      let object = {
        id: i + 1,
        _id: allUser.array[i]._id,
        name_1: allUser.array[i].name,
        avatar_1: allUser.array[i].avatar.url,
      };
      data.push(object);
    }
  }  const ItemRender = ({ id,_id, name_1, avatar_1 } : any) => (
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
          <Text style={styles.text_processTotal}>{name_1}</Text>
          <Text style={styles.num_rest}>Mã nhân viên: {id}</Text>
        </View>
        <View style={styles.icon_staff}>
          <Icon
            name="angle-double-right"
            size={34}
            color="#8f37f6"
            
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