import {
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import createStyles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import MultiSelect from 'react-native-multiple-select';
import { loadAllTask, loadAlluser, registerTask } from "../../../redux/action";


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
  

  
  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);
  const {task} = useSelector<any, any>((state) => state.task);


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


  let data: any = [];
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      
      let object = {
        id: i + 1,
        name_1: allUser.array[i].name,
        description_1: allUser.array[i].description,
        deadline: moment(allUser.array[i].deadline, "HH:mm, DD/MM/YYYY"),
        status: allUser.array[i].status,
        date: moment(new Date(allUser.array[i].date)).format("DD/MM/YYYY"),
        manager: allUser.array[i].manager,
        contributors: allUser.array[i].contributors, 
        
      };
      console.log(object);
      data.push(object);
    }
  }

  
//   const [data_2, setData_2] = useState(data);
//   const [selectedItems, setSelectedItems] = useState([]); //Danh sách người được chọn
//   const [selectedItems_1, setSelectedItems_1] = useState([]); // nguoi giao viec
//  //onSelectedItemsChange 
//   const onSelectedItemsChange = (selectedItems) => {
//     setSelectedItems(selectedItems);
//     for (let i = 0; i < selectedItems.length; i++) {
//       var tempItem = data.find((item: { id: any; }) => item.id === selectedItems[i]);
//       console.log(tempItem);
//     }
//   }
//   const onSelectedItemsChange_1 = (selectedItems_1) => {
//     setSelectedItems_1(selectedItems_1);
//     for (let i = 0; i < selectedItems_1.length; i++) {
//       var tempItem = data.find((item: { id: any; }) => item.id === selectedItems_1[i]);
//       console.log(tempItem);
//     }
//   }
 
  const saveTodo = async () => {
    if (task == "") {
      Alert.alert("Thông báo", "Bạn chưa nhập nội dung công việc");
    } else {
    }
  };


  return (
    <View style={styles.viewAdd_todo}>
      <View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{marginRight:"3%"}}>Tên task:</Text>
        <TextInput
        placeholder="Nhập tên task"
        returnKeyType="done"
            value={name}
            secureTextEntry={false}
            onChangeText={(text) => setName(text)}
        >
        </TextInput>
        </View>

        <View style={styles.text_Content_Todo}>
          <TextInput
            placeholder="Nhập nội dung công việc"
            returnKeyType="done"
            value={description}
            onChangeText={(text) => setDescription(text)}
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
            {/* <Icon
              style={styles.iconClock}
              name="clock-o"
              size={20}
              color="orange"
            /> */}
          </View>
        </View>

        <View>
          <Text style={{marginTop:"2%"}}>Nhân viên phụ trách:</Text>
          <TextInput 
          placeholder="Nhập tên nhân viên phụ trách"
          returnKeyType="done"
          value={manager}
          onChangeText={(text) => setManager(text)}
          >

          </TextInput>
          {/* <MultiSelect
          hideTags
          items={data_2}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText= "Chọn nhân viên phụ trách"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#FFB200"
          selectedItemIconColor="#FFB200"
          itemTextColor="#000"
          displayKey="name_1"
          searchInputStyle={{ color: '#CCC', padding: 10 }}
          submitButtonColor="#f5af19"
          submitButtonText="Submit"
        /> */}
        </View>
        <View>
          <Text style={{marginTop:"2%"}}>Người giao việc:</Text>
          <TextInput 
          placeholder="Nhập tên nhân viên giao việc"
          returnKeyType="done"
          
          >
          </TextInput>
          {/* <MultiSelect
          hideTags
          items={data_2}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange_1}
          selectedItems={selectedItems_1}
          selectText= "Chọn người giao việc"
          searchInputPlaceholderText="Search Items Here..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#FFB200"
          selectedItemIconColor="#FFB200"
          itemTextColor="#000"
          displayKey="name_1"
          searchInputStyle={{ color: '#CCC', padding: 10 }}
          submitButtonColor="#f5af19"
          submitButtonText="Submit"
        /> */}

          
        </View>
       
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btnFab_1}
      >
        <TouchableOpacity onPress={registerHandlerTask}>
          <Text style={styles.textComfirm}>Thêm Task</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default React.memo(Add_Todo);
