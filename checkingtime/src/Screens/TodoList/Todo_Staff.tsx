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
import { CheckBox } from "@rneui/themed";
import { FAB, Input } from "react-native-elements";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";

import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadAlluser } from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";

const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();
  const [checked, setChecked] = useState(false);
  const [time_task, setTime_Task] = useState(moment());

  const [task, setTask] = useState(user.task);
  const [sumWork, setSumWork] = useState("");
  const [workDone, setworkDone] = useState(0);
  const [workNotDone, setworkNotDone] = useState(0);

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
        checked_1 : checked,
        task_1: allUser.array[i].task,
        sumWork_1: allUser.array[i].sumWork,
        workDone_1: allUser.array[i].workDone,
        workNotDone_1: allUser.array[i].workNotDone,
      };
      console.log(object);
      data.push(object);
    }
  }

  const ItemRender = ({}) => (
    <View style={styles.render}>
      <View style={{ flexDirection: "row", backgroundColor:"#f2f2f2", flex:1, }}>
        <View style={styles.view3}>
          <View style={styles.checkbox}>
            <CheckBox  
              checkedColor="#f49218"
              checked={checked} 
              onIconPress={() => setChecked(!checked)}
              
              // onPress={() => console.log("onPress")}
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
        <View>
        <AnimatedCircularProgress
                  size={85}
                  width={5}
                  fill={Math.round((workDone/ data.length) * 100)}
                  tintColor="#72da43"
                  style={{alignSelf:'center', marginTop: 10}}
                  backgroundColor="#3d5875"
                >{() => (
                  <Text>
                    {workDone}/{data.length}
                  </Text>
                )}
              </AnimatedCircularProgress>
        </View>
        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            <View style={{flexDirection:'row'}}>
            <Text>Tổng số công việc hôm nay:</Text>
            </View>
            <Text>{data.length}</Text>
          </View>

          <View style={styles.view1_2}>
            <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#72da43', borderRadius:100, height: 10, width:10, alignSelf: 'center'}} />
            <Text style={{marginLeft: 5}}>Công việc đã hoàn thành:</Text>
            </View>
            <Text>{workDone}</Text>
          </View>

          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3d5875', borderRadius:100, height: 10, width:10, alignSelf: 'center'}} />
            <Text style={{marginLeft: 5}}>Công việc chưa hoàn thành:</Text>
            </View>
            <Text>{workNotDone}</Text>
          </View>
        </View>
        <View style={styles.kengang}></View>

        <FlatList
          data={data}
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
