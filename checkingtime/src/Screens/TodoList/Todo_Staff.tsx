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
import { FAB} from "react-native-elements";

import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {loadTaskContributor} from "../../../redux/action";
import { FlatList } from "react-native-gesture-handler";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Loader from "../../navigation/Loader";

const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();

  const [workDone, setworkDone] = useState(1);
  const [show_1, setShow_1] = useState(false);
  
  const dispatch = useDispatch();

  const { taskContributor, loading } = useSelector<any, any>((state) => state.task);
  useEffect(() => {
  dispatch<any>(loadTaskContributor());
  }, []);
  console.log(taskContributor)
  let data_contributor: any = [];
  if (typeof taskContributor !== "undefined") {
    for (var i = 0; i < taskContributor.tasks.length; i++) {
      let task_user = {
        id : i +1,
        _id: taskContributor.tasks[i]._id,
        name: taskContributor.tasks[i].name,
        description: taskContributor.tasks[i].description,
        deadline: moment(
          taskContributor.tasks[i].deadline,
          "HH:mm, DD/MM/YYYY"
        ),
        status: taskContributor.tasks[i].status,
        date: moment(new Date(taskContributor.tasks[i].date)).format(
          "DD/MM/YYYY"
        ),
        manager: taskContributor.tasks[i].manager,
        checked: false,
      };
      data_contributor.push(task_user);
    }
  }
 // console.log(data_contributor)
  const [data_contributor_Staff, setdata_contributor] = useState(data_contributor);

  const onChangeValue = (item: { id: any }, index: any, newValue: boolean) => {
    const newData = data_contributor_Staff.map((newItem: { id: any }) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setdata_contributor(newData);
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
          fill={Math.round((workDone / data_contributor.length) * 100)}
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
                {data_contributor.length}
              </Text>
            </Text>
          )}
        </AnimatedCircularProgress>

        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            
            <Text>Tổng số công việc hôm nay:</Text>
            <Text>{data_contributor.length}</Text>
          </View>

          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3EC70B', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={{marginLeft: 5}}>Công việc đã hoàn thành:</Text>
            </View>
            <Text>{workDone}</Text>
          </View>
          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#e35b45', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={{marginLeft: 5}}>Công việc đã quá hạn:</Text>
            </View>
            <Text>{workDone}</Text>
          </View>
          <View style={styles.view1_2}>
          <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#3d5875', borderRadius: 100, height:10, width:10,alignSelf:'center'}}/>
            <Text style={{marginLeft: 5}}>Công việc chưa hoàn thành:</Text>
            </View>
            <Text>{workDone}</Text>
          </View>
        </View>
        <View style={styles.kengang}></View>

        <FlatList
          data={data_contributor}
          renderItem={ItemRender}
          keyExtractor={(item) => item.id.toString()}
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