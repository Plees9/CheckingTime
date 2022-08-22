import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useMemo, useState, Component, useEffect } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { FAB, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadAlluser, loadAllTask, queryUser } from "../../../redux/action";
import moment from "moment";
import Task_Admin from "./Task_Admin.";
import Loader from "../../navigation/Loader";

const Todo_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user} = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState(user.name); //name

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const route = useRoute () 


  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();
  let data: any = [];
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      
      let object = {
        id: i + 1,
        name_1: allUser.array[i].name,
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
      data.push(object);
    }
  }

  useEffect(() => {
    dispatch<any>(loadAllTask());
  }, []);
  const { allTask, loading } = useSelector<any, any>((state) => state.task);
  let data_all: any = [];
  if (typeof allTask !== "undefined") {
    for (var i = 0; i < allTask.tasks.length; i++) {
      
      let task_all = {
        id : i+1,
        _id: allTask.tasks[i]._id,
        name: allTask.tasks[i].name, //ten task
        description: allTask.tasks[i].description, //mo ta task
        deadline: moment(allTask.tasks[i].deadline, "HH:mm, DD/MM/YYYY"),
        status: allTask.tasks[i].status, //trang thai task
        date: moment(new Date(allTask.tasks[i].date)).format("DD/MM/YYYY"),
        manager: allTask.tasks[i].manager, //nguoi quan ly task
        contributors: allTask.tasks[i].contributors, //thanh vien task
      };
      data_all.push(task_all);
    }
  }

  const [data_allTask, setData_all] = useState(data_all);

  
  return (
    loading ? <Loader /> :
    <View>
      <SafeAreaView style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon_NV}>
          <Icon
            name="bars"
            size={20}
            color="#8f73f6"
            onPress={() => {
              if  (route.params) {
              let privilege = route.params.value_4  
              let typeOfEmployee =  route.params.value_5 
              let role = route.params.value_6 
              let contractStatus = route.params.value_7
              navigation.navigate("Bộ lọc tất cả công việc", {privilege,typeOfEmployee, role, contractStatus})
            }
              else {
                let privilege = "" 
                let typeOfEmployee =  "" 
                let role = "" 
                let contractStatus = ""
                navigation.navigate("Bộ lọc tất cả công việc", {privilege,typeOfEmployee, role, contractStatus})
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
            dispatch<any>(queryUser(text, route.params.value_4, route.params.value_5, route.params.value_6, route.params.value_7))
            } else {
            dispatch<any>(queryUser(text, "", "", "", ""))
            }
            setSearch(text)}}
            value={search}

          ></TextInput>
          
        </View>
       
      </View>
        

        <View style={styles.view1}>
          <Icon
            name="list"
            size={18}
            color="#8f73f6"
            style={styles.icon}
          ></Icon>
          <Text style={styles.text}>Task List:</Text>
        </View>
        <View style={styles.kengang}></View>
        
        <ScrollView>
        {allTask && allTask.tasks.map((item : any) => (
                            <Task_Admin key={item._id} item={item}/>
                        ))} 

        </ScrollView>

       
        
        
      </SafeAreaView>
      <View style={styles.btnFab}>
        <FAB
          title="Save"
          size="small"
          color="#8f73f6"
          onPress={() => Alert.alert("Lưu thành công")}
        />
        <FAB
          title="Add Task"
          size="small"
          color="#8f73f6"
          style={styles.fab}
          onPress={() => navigation.navigate("Thêm công việc")}
        />
      </View>
    </View>
  );
};

export default Todo_All;