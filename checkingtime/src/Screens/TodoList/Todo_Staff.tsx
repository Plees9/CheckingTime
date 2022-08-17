import {
  Text,
  StyleSheet,
  View,
  ScrollView,
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
import { loadAllTask, loadAlluser, loadTask } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";


const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();
  const [checked, setChecked] = useState(false);
  const [time_task, setTime_Task] = useState(moment());

  
  const [sumWork, setSumWork] = useState(10);
  const [workDone, setworkDone] = useState(4);
  const [workOvertime, setworkOvertime] = useState(6);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch<any>(loadTask());
  }, []);
  const { task } = useSelector<any, any>((state) => state.task);

  let data_2: any = [];
  if (typeof task !== "undefined") {
    for (var i = 0; i < task.tasks.length; i++) {
      
      let task_user = {
        _id: task.tasks[i]._id,
        name: task.tasks[i].name,
        description: task.tasks[i].description,
        deadline: moment(task.tasks[i].deadline, "HH:mm, DD/MM/YYYY"),
        status: task.tasks[i].status,
        date: moment(new Date(task.tasks[i].date)).format("DD/MM/YYYY"),
        manager: task.tasks[i].manager,
      };
      console.log(task_user);
      data_2.push(task_user);
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

  const ItemRender = ({ item, index }) => (
    <View style={styles.render}>
      <View
        style={{ flexDirection: "row", backgroundColor: "#f2f2f2", flex: 1 }}
      >
        <View style={styles.view3}>
          <View style={styles.checkbox}>
            <CheckBox
              color="#FFC23C"
              value={item.selected}
              disabled={false}
              onValueChange={(newValue) => onChangeValue(item, index, newValue)}
            ></CheckBox>
          </View>

          <View style={styles.colomn1}>
            <Text style={styles.task}>{item.name}</Text>
            <View style={styles.textTime}>
              <Pressable >
                <View
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Text>{moment(item.deadline).format("HH:mm, DD/MM/YYYY")}</Text>
                  {show_1 && (
                    <DateTimePicker
                      value={new Date(item.deadline.format("YYYY/MM/DD"))}
                      mode={"time"}
                      display="default"
                      is24Hour={true}
                      
                    />
                  )}
                </View>
              </Pressable>
            </View>
          </View>
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
          <Text style={styles.text}>Your Task List:</Text>
        </View>
        <AnimatedCircularProgress
          size={85}
          width={5}
          fill={Math.round((workDone / data_2.length) * 100)}
          tintColor="#3EC70B"
          style={{ alignSelf: "center", marginTop: 10 }}
          backgroundColor="#3d5875"
        >
          {() => (
            <Text style={styles.points}>
              <Text style={{ color: "#3EC70B" }}>
              
                {workDone} {""}
              </Text>
              /<Text style={{ color: "#3d5875" }}> {data_2.length}</Text>
            </Text>
          )}
        </AnimatedCircularProgress>
        <View>
          <View style={styles.note_staff} />
        </View>

        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            <Text>Tổng số công việc hôm nay:</Text>
            <Text>{data_2.length}</Text>
          </View>

          <View style={styles.view1_2}>
            <Text>Công việc đã hoàn thành:</Text>
            <Text>{workDone}</Text>
          </View>
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
          title="Completed"
          size="small"
          color="#FF8C32"
          style={styles.fab}
          onPress={() => Alert.alert("Completed")}
        />
      </View>
    </View>
  );
};

export default Todo_Staff;
