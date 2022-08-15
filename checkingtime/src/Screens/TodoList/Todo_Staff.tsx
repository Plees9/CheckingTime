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
import { loadAlluser } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from 'react-native';

const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();
  const [checked, setChecked] = useState(false);
  const [time_task, setTime_Task] = useState(moment());

  const [task, setTask] = useState(user.task);
  const [sumWork, setSumWork] = useState(10);
  const [workDone, setworkDone] = useState(4);
  const [workOvertime, setworkOvertime] = useState(6);
  const [show_1, setShow_1] = useState(false);
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
        checked_1: checked,
        task_1: allUser.array[i].task,
        sumWork_1: allUser.array[i].sumWork,
        workDone_1: allUser.array[i].workDone,
        workNotDone_1: allUser.array[i].workNotDone,
      };
      console.log(object);
      data.push(object);
    }
  }
  const [data_1, setData] = useState([
    {
      id: 1,
      task: "Task 1",
      checked: false,
    },
    {
      id: 2,
      task: "Task 2",
      checked: false,
    },
  ]);
  const onChangeValue = (item, index, newValue) => {
    const newData = data_1.map((newItem) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setData(newData);
  };

  const ItemRender = ({item, index}) => (
    <View style={styles.render}>
      <View
        style={{ flexDirection: "row", backgroundColor: "#f2f2f2", flex: 1 }}
      >
        <View style={styles.view3}>
          <View style={styles.checkbox}>
            <CheckBox
               color= "#00a8ff"
               value={item.selected}
               disabled={false}
               onValueChange={(newValue) => onChangeValue(item, index,newValue)}

             
             

             
            ></CheckBox>
          </View>

          <View style={styles.colomn1}>
            <Text style={styles.task}>{user.task} ten task</Text>
            <View style={styles.textTime}>
              <Pressable onPress={() => setShow_1(true)}>
                <View
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Text>{time_task.format("HH:mm")}</Text>
                  {show_1 && (
                    <DateTimePicker
                      value={new Date(time_task.format("YYYY/MM/DD"))}
                      mode={"time"}
                      display="default"
                      is24Hour={true}
                      onChange={(event, selectedDate) => {
                        setTime_Task(moment(selectedDate));
                        setShow_1(false);
                        console.log(selectedDate);
                      }}
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
          fill={Math.round((workDone / sumWork) * 100)}
          tintColor="#3EC70B"
          style={{ alignSelf: "center", marginTop: 10 }}
          backgroundColor="#3d5875"
        >
          {() => (
            <Text style={styles.points}>
              <Text style={{ color: "#3EC70B" }}>
                {" "}
                {workDone} {""}
              </Text>
              /<Text style={{ color: "#3d5875" }}> {sumWork}</Text>
            </Text>
          )}
        </AnimatedCircularProgress>
        <View >
          <View style={styles.note_staff}/>
          
            
          </View>

        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            <Text>Tổng số công việc hôm nay:</Text>
            <Text>{data.length}</Text>
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
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </SafeAreaView>
      <View style={styles.btnFab}>
        <FAB
          title="Completed"
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

export default Todo_Staff;
