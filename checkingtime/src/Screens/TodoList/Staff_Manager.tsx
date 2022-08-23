import {
  Text,
  
  View,
  
  Alert,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { FAB, Input } from "react-native-elements";

import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadAllTask, loadAlluser, loadTaskManager } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Task_Manager from "./Task_Manager";
import Loader from "../../navigation/Loader";

const Staff_Manager = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();

 
  const [show_1, setShow_1] = useState(false);
  const { message, error } = useSelector<any, any>(
    (state) => state.taskMessage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(loadTaskManager());
  }, []);
  const { taskManager, loading } = useSelector<any, any>((state) => state.task);
  //console.log(taskManager);
  let data_manager: any = [];
  if (typeof taskManager !== "undefined") {
    for (var i = 0; i < taskManager.tasks.length; i++) {
      let task_user = {
        id: i + 1,
        _id: taskManager.tasks[i]._id + 1,
        name: taskManager.tasks[i].name,
        description: taskManager.tasks[i].description,
        deadline: moment(taskManager.tasks[i].deadline, "HH:mm, DD/MM/YYYY"),
        status: taskManager.tasks[i].status,
        date: moment(new Date(taskManager.tasks[i].date)).format("DD/MM/YYYY"),
        manager: taskManager.tasks[i].manager,
      };
      // console.log(task_user);
      data_manager.push(task_user);
    }
  }

  const [data_manager3, setdata_manager3] = useState(data_manager);

  let workDone = 0;
  let workNotDone = 0;
  
  if (typeof taskManager !== "undefined") {
    for (let i = 0; i < taskManager.tasks.length; i++) {
      if (taskManager.tasks[i].status === "Đã hoàn thành" ) {
        workDone++;
      } else  {
        workNotDone++;
     
    }
  }
}

  const onChangeValue = (item: { id: any }, index: any, newValue: boolean) => {
    const newData = data_manager3.map((newItem: { id: any }) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setdata_manager3(newData);
  };
  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [alert, dispatch, error, message]);
  return loading ? (
    <Loader />
  ) : (
    <View>
      <SafeAreaView style={styles.view}>
        <View style={styles.view1}>
          <Icon
            name="list"
            size={18}
            color="#8f37f6"
            style={styles.icon}
          ></Icon>
          <Text style={styles.text}> Quản lý công việc:</Text>
        </View>
        <AnimatedCircularProgress
          size={85}
          width={5}
          fill={Math.round((workDone / data_manager.length) * 100)}
          tintColor="#3EC70B"
          style={{ alignSelf: "center", marginTop: 10, marginBottom: 10 }}
          backgroundColor="#3d5875"
        >
          {() => (
            <Text style={styles.points}>
              <Text style={{ color: "#3EC70B" }}>
                {workDone} {""}
              </Text>
              /<Text style={{ color: "#3d5875" }}> {data_manager.length}</Text>
            </Text>
          )}
        </AnimatedCircularProgress>

        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#3EC70B",
                  borderRadius: 100,
                  height: 10,
                  width: 10,
                  alignSelf: "center",
                }}
              />
              <Text style={styles.text_processTask}>
                Tổng số công việc đã phê duyệt:
              </Text>
            </View>
            <Text style={styles.num_done}>{workDone}</Text>
          </View>

          <View style={styles.view1_2}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#3d5875",
                  borderRadius: 100,
                  height: 10,
                  width: 10,
                  alignSelf: "center",
                }}
              />
              <Text style={styles.text_processTask}>
                Công việc đang chờ phê duyệt:
              </Text>
            </View>
            <Text style={styles.num_rest}>{workNotDone}</Text>
          </View>
        </View>
        <View style={styles.kengang}></View>

        {taskManager &&
          taskManager.tasks.map((item: any) => (
            <Task_Manager key={item._id} item={item} />
          ))}
      </SafeAreaView>
      <View style={styles.btnFab}>
        <FAB
          title="Completed"
          size="small"
          color="#8f73f6"
          style={styles.fab}
          onPress={() => Alert.alert("thành công")}
        />
        <FAB
          title="Thêm công việc"
          size="small"
          color="#8f73f6"
          style={styles.fab}
          onPress={() => navigation.navigate("Thêm công việc Manager")}
        />
      </View>
    </View>
  );
};;

export default Staff_Manager;