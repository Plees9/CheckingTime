import {
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import createStyles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "@rneui/themed";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { loadAllTask, loadAlluser, queryUser, registerTask } from "../../../redux/action";
import Contributor_Add_Task from "./Contributor_Add_Task";
import Loader from "../../navigation/Loader";
import { useRoute } from "@react-navigation/native";

const Add_Todo = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); //Mô tả task
  const [deadline, setDeadline] = useState(moment()); //Deadline của task\
  const [time_task, setTime_Task] = useState(moment());
  const [date, setDate] = useState(moment());
  const [status, setStatus] = useState(""); //Trạng thái của task
  const [manager, setManager] = useState(""); //Trạng thái của task
  const [contributors, setContributors] = useState([]); //Trạng thái của task

  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState(user.avatar.url);
  const route = useRoute () 
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);
  const { allTask } = useSelector<any, any>((state) => state.task);
  const { task } = useSelector<any, any>((state) => state.task);
  if (typeof allTask == "undefined") {
    return <Loader />;
  }

  const dispatch = useDispatch();
  const registerHandlerTask = () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("description", description);
    const deadline_1 = moment(deadline);
    myForm.append("deadline", deadline_1.format("HH:mm, DD/MM/YYYY"));
    const time_task_1 = moment(time_task);
    myForm.append("time_task", time_task_1.format("HH:mm, DD/MM/YYYY"));
    const date_1 = moment(date);
    myForm.append("date", date_1.format("HH:mm, DD/MM/YYYY"));
    myForm.append("status", status);
    myForm.append("manager", manager);
    myForm.append("contributors", JSON.stringify(contributors));
    dispatch<any>(registerTask(myForm));
    dispatch<any>(loadAllTask());
    dispatch<any>(loadAlluser());
  };

  useEffect(() => {
    dispatch<any>(loadAlluser());
  }, []);
  const { message, error } = useSelector<any, any>((state) => state.message);
  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
    if (message == "Tạo tài khoản thành công") {
      setName("");
      setDescription("");
      setDeadline(moment());
      setTime_Task(moment());
      setDate(moment());
      setStatus("");
      setManager("");
      setContributors([]);
    }
  }, [alert, dispatch, error, message]);

 
  return (
    <View style={styles.viewAdd_todo}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center",  marginLeft:10,
      marginRight:10 }}>
          <Text >Tên công việc: </Text>
          <TextInput
            placeholder="Nhập tên công việc"
            returnKeyType="done"
            value={name}
            secureTextEntry={false}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.text_Content_Todo}>
          <TextInput
            placeholder="Mô tả nội dung công việc"
            returnKeyType="done"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.text_Description}
          ></TextInput>
        </View>
        <View>
          <Text style={{ marginLeft:10,
      marginRight:10,}}>Thời gian cần hoàn thành:</Text>
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
                      }}
                    />
                  )}
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        <View>
          <Text style={{ marginLeft:10,
      marginRight:10,}}>Nhân viên phụ trách:</Text>
          <View style={styles.icon_add_task}>
            <Icon
              name="search"
              size={20}
              color="#8f73f6"
              style={styles.icon3}
            />
            <TextInput
              style={styles.text}
              placeholder="Tìm kiếm"
              returnKeyType="done"
              onChangeText={(text) => { 
                if (route.params) {
                dispatch<any>(queryUser(text, route.params.value_4, route.params.value_5, route.params.value_6, route.params.value_7))
                } else {
                dispatch<any>(queryUser(text, "", "", "", ""))
                }
                setSearch(text)}}
                value={search}
            ></TextInput>
          </View>
          <ScrollView style={styles.style_add_task}>
            {allUser &&
              allUser.array.map((item: any) => (
                <Contributor_Add_Task key={item._id} item={item}  />
              ))}
          </ScrollView>
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btnFab_add_task}
      >
        <TouchableOpacity onPress={registerHandlerTask}>
          <Text style={styles.textComfirm}>Thêm Task</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default React.memo(Add_Todo);
