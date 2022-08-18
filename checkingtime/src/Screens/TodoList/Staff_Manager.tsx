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
import { loadAllTask, loadAlluser, loadTask, loadTaskManager } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const Staff_Manager = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();
  
  const [workDone, setworkDone] = useState(0);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(loadTask());
    dispatch<any>(loadTaskManager());
  }, []);
  const { task,taskManager } = useSelector<any, any>((state) => state.task);
//console.log(taskManager);
  let data_manager: any = [];
  if (typeof taskManager !== "undefined") {
    for (var i = 0; i < taskManager.tasks.length; i++) {
      let task_user = {
        id : i+1,
        _id: taskManager.tasks[i]._id + 1,
        name: taskManager.tasks[i].name,
        description: taskManager.tasks[i].description,
        deadline: moment(taskManager.tasks[i].deadline, "HH:mm, DD/MM/YYYY"),
        status: taskManager.tasks[i].status,
        date: moment(new Date(taskManager.tasks[i].date)).format("DD/MM/YYYY"),
        manager: taskManager.tasks[i].manager,
      };
      console.log(task_user);
      data_manager.push(task_user);
    }
  }

  const [data_manager3, setdata_manager3] = useState(data_manager);

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
              <Pressable>
                <View
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Text>
                    {moment(item.deadline).format("HH:mm, DD/MM/YYYY")}
                  </Text>
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
          <Text style={styles.text}> Quản lý công việc:</Text>
        </View>
        <AnimatedCircularProgress
          size={85}
          width={5}
          fill={Math.round((workDone / data_manager.length) * 100)}
          tintColor="#3EC70B"
          style={{ alignSelf: "center", marginTop: 10,  marginBottom: 10 }}
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
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3EC70B', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={styles.text_processTask}>Tổng số công việc đã phê duyệt:</Text>
            </View>
            <Text style={styles.num_done}>{data_manager.length}</Text>
          </View>

          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3d5875', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={styles.text_processTask}>Công việc đang chờ phê duyệt:</Text>
            </View>
            <Text style={styles.num_rest}>{workDone}</Text>
          </View>
        </View>
        <View style={styles.kengang}></View>

        <FlatList
          data={data_manager3}
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

export default Staff_Manager;
