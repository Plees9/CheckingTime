import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useMemo, useState, Component, useEffect } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { FAB, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadAlluser, loadAllTask } from "../../../redux/action";
import moment from "moment";
import Task_Admin from "./Task_Admin.";
import Loader from "../../navigation/Loader";

const Todo_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user} = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState(user.name); //name

  const [checked, setChecked] = useState(false);

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

  const onChangeValue = (item: { id: any }, index: any, newValue: boolean) => {
    const newData = data_allTask.map((newItem: { id: any }) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setData_all(newData);
  };
  const trash = () => {
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn xóa không?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        onPress: () =>
          setData_all(data_allTask.filter((item: { id: string }) => item.id !== "")),
      },
    ]);
  };
  return (
    loading ? <Loader /> :
    <View>
      <SafeAreaView style={styles.view}>
        <View style={styles.view1}>
          <Icon
            name="list"
            size={18}
            color="#f49218"
            style={styles.icon}
          ></Icon>
          <Text style={styles.text}>Task List:</Text>
        </View>
        <View style={styles.kengang}></View>
        {allTask && allTask.tasks.map((item : any) => (
                            <Task_Admin key={item._id} item={item}/>
                        ))} 
      </SafeAreaView>
      <View style={styles.btnFab}>
        <FAB
          title="Save"
          size="small"
          onPress={() => Alert.alert("Add Task")}
        />
        <FAB
          title="Add Task"
          size="small"
          color="#FF8C32"
          style={styles.fab}
          onPress={() => navigation.navigate("Thêm công việc")}
        />
      </View>
    </View>
  );
};

export default Todo_All;