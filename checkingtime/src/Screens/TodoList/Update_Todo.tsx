import {
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";

import createStyles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";


const data_TodoStaff = [
  {
    id: 1,
    name: "Nguyen Van A",
    time_task: "10:00",
    status: "Done",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    time_task: "10:00",
    status: "Done",
  },
 
];

const Update_Todo = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  
  const [task, setTask] = useState("");
  const [description, setDescription] = useState(""); //Mô tả task
  
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [date, setDate] = useState(moment());

  const [time_task, setTime_Task] = useState(moment());
  
  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);
  
  const saveTodo = async () => {
    if (task == "") {
      Alert.alert("Thông báo", "Bạn chưa nhập nội dung công việc");
    } else {
    }
  };

  const ItemRender = ({}) => (
    <View style={styles.render}>
      <View style={{ flexDirection: "row" }}>
            <View >
              <Avatar rounded source={{ uri: avatar }} size={36} />
            </View>

            <Text >name1</Text>
      </View>
      
    </View>
  );


  return (
    <View style={styles.viewAdd_todo}>
      <View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{marginRight:"3%"}}>Tên task:</Text>
        <TextInput
        placeholder="Nhập tên task"
        value={task}
        onChangeText={(text) => setTask(text)}
        >
        </TextInput>
        </View>

        <View style={styles.text_Content_Todo}>
          <TextInput
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Mô tả task"
            style={styles.text_Description}
          ></TextInput>
        </View>
        <View>
          <Text>Thời gian cần hoàn thành:</Text>
          <View style={styles.viewTime}>
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
            <View style={styles.kedoc}></View>

            <View style={styles.textDate}>
              <Pressable onPress={() => setShow(true)}>
                <View
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    width: "50%",
                  }}
                >
                  <Text>{date.format("DD/MM/YYYY")}</Text>
                  {show && (
                    <DateTimePicker
                      value={new Date(date.format("YYYY/MM/DD"))}
                      mode={"date"}
                      display="default"
                      onChange={(event, selectedDate) => {
                        setDate(moment(selectedDate));
                        setShow(false);
                        console.log(selectedDate);
                      }}
                    />
                  )}
                </View>
              </Pressable>
            </View>

            <Icon
              style={styles.iconClock}
              name="clock-o"
              size={20}
              color="orange"
            />
          </View>
        </View>

        <View>
          <Text style={{marginTop:"2%"}}>Nhân viên phụ trách:</Text>
          <FlatList 
          data={data_TodoStaff}
          renderItem={ItemRender}
          keyExtractor={item => item.id.toString()}
          >
          </FlatList>
        </View>
        <View>
          <Text style={{marginTop:"2%"}}>Người giao việc:</Text>
          <FlatList 
          data={data_TodoStaff}
          renderItem={ItemRender}
          keyExtractor={item => item.id.toString()}
          >
          </FlatList>
        </View>
       
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btnFab_1}
      >
        <TouchableOpacity onPress={saveTodo}>
          <Text style={styles.textComfirm}>Update</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Update_Todo;
