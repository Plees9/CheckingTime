import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "@rneui/themed";
import { FAB, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const Todo_Staff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [checked, setChecked] = useState(false);
  const [time_task, setTime_Task] = useState(moment());

  const [show_1, setShow_1] = useState(false);

  const [data, setData] = useState([
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
  const trash = () => {
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn xóa không?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        onPress: () => setData(data.filter((item) => item.id !== 1)),
      },
    ]);
  };

  const ItemRender = ({}) => (
    <View style={styles.render}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.view3}>
          <View style={styles.checkbox}>
            <CheckBox  
              checkedColor="#f49218"
              checked={checked}    
              onIconPress={() => setChecked(!checked)}
              onPress={() => console.log("onPress")}
            ></CheckBox>
          </View>

          <View style={styles.colomn1}>
            <Text style={styles.task}>"Task cua ban"</Text>
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
        <View style={styles.view1_1}>
          <View style={styles.view1_2}>
            <Text>Tổng số công việc hôm nay:</Text>
            <Text>{data.length}</Text>
          </View>

          <View style={styles.view1_2}>
            <Text>Công việc đã hoàn thành:</Text>
            <Text>{data.length}</Text>
          </View>

          <View style={styles.view1_2}>
            <Text>Công việc chưa hoàn thành:</Text>
            <Text>{data.length}</Text>
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
