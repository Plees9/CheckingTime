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
import { loadAlluser } from "../../../redux/action";



const Add_Todo = () => {
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
        name_1: allUser.array[i].name,
        avatar_1: allUser.array[i].avatar.url,
        sumWork_1: allUser.array[i].sumWork,
        workDone_1: allUser.array[i].workDone,
      };
      console.log(object);
      data.push(object);
    }
  }

  
  const [data_2, setData_2] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]); //Danh sách người được chọn
  const [selectedItems_1, setSelectedItems_1] = useState([]); // nguoi giao viec
 //onSelectedItemsChange 
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
    for (let i = 0; i < selectedItems.length; i++) {
      var tempItem = data.find((item: { id: any; }) => item.id === selectedItems[i]);
      console.log(tempItem);
    }
  }
  const onSelectedItemsChange_1 = (selectedItems_1) => {
    setSelectedItems_1(selectedItems_1);
    for (let i = 0; i < selectedItems_1.length; i++) {
      var tempItem = data.find((item: { id: any; }) => item.id === selectedItems_1[i]);
      console.log(tempItem);
    }
  }
 
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
          <MultiSelect
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
        />
        </View>
        <View>
          <Text style={{marginTop:"2%"}}>Người giao việc:</Text>
          <MultiSelect
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
        />

          
        </View>
       
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#f12711", "#f5af19"]}
        style={styles.btnFab_1}
      >
        <TouchableOpacity onPress={saveTodo}>
          <Text style={styles.textComfirm}>Thêm Task</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Add_Todo;
