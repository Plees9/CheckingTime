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
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import AlarmClock from "react-native-alarm-clock";

import { LinearGradient } from "expo-linear-gradient";
import { Checkbox } from "react-native-paper";

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
  {
    id: 3,
    name: "Nguyen Van C",
    time_task: "10:00",
    status: "Done",
  },
];

const Add_Todo = () => {
  const styles = useMemo(() => createStyles(), []);
  const [todo, setTodo] = useState("");
  const [userName, setUserName] = useState("");

  const [date, setDate] = useState(moment());

  const [time_task, setTime_Task] = useState(moment());
  const [value_TodoStaff, setValue_TodoStaff] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  // save data todo
  const saveTodo = async () => {
    if (todo == "") {
      Alert.alert("Thông báo", "Bạn chưa nhập nội dung công việc");
    } else {
    }
  };

  return (
    <View style={styles.viewAdd_todo}>
      <View>
        <Text>Tên task:</Text>
        <View style={styles.text_Content_Todo}>
          <TextInput
            onChangeText={(text) => setTodo(text)}
            value={todo}
            placeholder="Nhập tên task"
          ></TextInput>
        </View>
        <View>
          <Text>Mức độ ưu tiên:</Text>
          <View style={styles.checkbox}>
            
            <Checkbox
              status={checked1 ? "checked" : "unchecked"}
              color="#ff0000"
              onPress={() => setChecked1(!checked1)}
            />
            <Text>Khẩn cấp và quan trọng</Text>
          </View>
          <View style={styles.checkbox}>
            {/* checkbox hinh tron */}

            <Checkbox
              status={checked2 ? "checked" : "unchecked"}
              color="#FFC300"
              
              onPress={() => setChecked2(!checked2)}
            />
            <Text>Quan trọng nhưng không khẩn cấp</Text>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              status={checked3 ? "checked" : "unchecked"}
              color="#3AB4F2"
              onPress={() => setChecked3(!checked3)}
            />
            <Text>Khẩn cấp nhưng không quan trọng</Text>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              status={checked4 ? "checked" : "unchecked"}
              color="#E900FF"
              onPress={() => setChecked4(!checked4)}
            />
            <Text>Không khẩn cấp và không quan trọng</Text>
          </View>
        </View>
        <View>
          <Text>Nhân viên phụ trách:</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_TodoStaff}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="name"
            valueField="id"
            placeholder="Nhân viên phụ trách"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={value_TodoStaff}
            onChange={(item) => {
              setValue_TodoStaff(item.id);
              setIsFocus(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.iconStyle}
                color="orange"
                name={isFocus ? "up" : "down"}
                size={20}
              />
            )}
          />
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
