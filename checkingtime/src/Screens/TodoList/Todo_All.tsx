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

const Todo_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState(user.name); //name

  const [checked, setChecked] = useState(false);

  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();
  let data: any = [];
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      // let strAvatar = allUser.array[i].avatar.url;
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
      console.log(object);
      data.push(object);
    }
  }

  useEffect(() => {
    dispatch<any>(loadAllTask());
  }, []);
  const { allTask } = useSelector<any, any>((state) => state.task);

  let data_2: any = [];
  if (typeof allTask !== "undefined") {
    for (var i = 0; i < allTask.tasks.length; i++) {
      
      let task = {
        _id: allTask.tasks[i]._id,
        name: allTask.tasks[i].name,
        description: allTask.tasks[i].description,
        deadline: moment(new Date(allTask.tasks[i].deadline)).format(
          "DD/MM/YYYY"
        ),
        status: allTask.tasks[i].status,
        date: moment(new Date(allTask.tasks[i].date)).format("DD/MM/YYYY"),
        manager: allTask.tasks[i].manager,
      };
      console.log(task);
      data_2.push(task);
    }
  }

  const [data_1, setData] = useState(data_2);

  const onChangeValue = (item: { _id: any }, index: any, newValue: boolean) => {
    const newData = data_1.map((newItem: { _id: any }) => {
      if (newItem._id == item._id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setData(newData);
  };
  const trash = () => {
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn xóa không?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        onPress: () =>
          setData(data_1.filter((item: { _id: string }) => item._id !== "")),
      },
    ]);
  };

  const ItemRender = ({ item, index }) => (
    <View style={styles.render}>
      <View style={{ flexDirection: "row", backgroundColor: "#f2f2f2" }}>
        <View style={styles.view2}>
          <View style={styles.checkbox}>
            <CheckBox
              color="#00a8ff"
              value={item.selected}
              disabled={false}
              onValueChange={(newValue) => onChangeValue(item, index, newValue)}
            />
          </View>
          <View style={styles.colomn}>
            <Text style={styles.task}>{item.name}</Text>
            <Text style={styles.text1}>{item.description}</Text>
          </View>

          <Icon
            name="trash"
            color="#f49218"
            size={20}
            style={styles.trash}
            onPress={() => trash()}
          />
          <Icon
            name="pencil"
            color="#f49218"
            size={20}
            style={styles.pencil}
            onPress={() => navigation.navigate("Cập nhật công việc")}
          />
        </View>
      </View>
    </View>
  );

  return (
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
        <FlatList
          data={data_1}
          renderItem={ItemRender}
          keyExtractor={(item) => item._id}
        ></FlatList>
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
