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
import {
  loadAllTask,
  loadAlluser,
  loadTask,
  loadTaskContributor,
} from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Loader from "../../navigation/Loader";
import Task from "./Task";

const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  // const [checked, setChecked] = useState(false);
  const [time_task, setTime_Task] = useState(moment());

  const [sumWork, setSumWork] = useState(10);
  const [workDone, setworkDone] = useState(0);
  const [workOvertime, setworkOvertime] = useState(6);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);

  const dispatch = useDispatch();
  const { taskContributor, loading } = useSelector<any, any>((state) => state.task);
  useEffect(() => {
  dispatch<any>(loadTaskContributor());
  }, []);
  console.log(taskContributor)
  if (typeof taskContributor == "undefined" ) {
    return <Loader />
  }
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
          <Text style={styles.text}>Your Task List:</Text>
        </View>
        <AnimatedCircularProgress
          size={85}
          width={5}
          fill={Math.round((workDone / taskContributor.tasks.length) * 100)}
          tintColor="#3EC70B"
          style={{ alignSelf: "center", marginTop: 10 }}
          backgroundColor="#3d5875"
        >
          {() => (
            <Text style={styles.points}>
              <Text style={{ color: "#3EC70B" }}>
                {workDone} {""}
              </Text>
              /
              <Text style={{ color: "#3d5875" }}>
                {" "}
                {taskContributor.tasks.length}
              </Text>
            </Text>
          )}
        </AnimatedCircularProgress>

        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            
            <Text>Tổng số công việc hôm nay:</Text>
            <Text>{taskContributor.tasks.length}</Text>
          </View>

          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3EC70B', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={styles.text_processTask}>Công việc đã hoàn thành:</Text>
            </View>
            <Text style={styles.num_done}>{workDone}</Text>
          </View>
          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#e35b45', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={styles.text_processTask}>Công việc đã quá hạn:</Text>
            </View>
            <Text style={styles.num_overtime}>{workDone}</Text>
          </View>
          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3d5875', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={styles.text_processTask}>Công việc chưa hoàn thành:</Text>
            </View>
            <Text style={styles.num_rest}>{workDone}</Text>
          </View>
        </View>
        <View style={styles.kengang}/>

        {taskContributor && taskContributor.tasks.map((item : any) => (
                            <Task key={item._id} item={item}/>
                        ))}
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