import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
    checkingApporved,
  checkingTask,
  deleteTask,
  loadAllTask,
  loadTaskContributor,
  loadTaskManager,
} from "../../../redux/action";
import PopupModal from "../../component/PopupModal";
const Task_Admin = ({ item }) => {
  const { user } = useSelector<any, any>((state) => state.auth);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [completed, setCompleted] = useState(item.isApproved);
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [show_1, setShow_1] = useState(false);
  console.log(item._id);
  const handleCheckbox = async() => {
    setCompleted(!completed);
    await dispatch<any>(checkingApporved(item._id))
    await dispatch<any>(loadAllTask())

  };
  const Edit = async (
    name: any,
    _id: any,
    description: any,

    deadline: any
  ) => {
    navigation.navigate("Cập nhật công việc Admin", {
      name,
      _id,
      description,
      deadline,
    });
  };

  return (
    <View style={styles.render}>
      <View style={{ flexDirection: "row", backgroundColor: "#f2f2f2" }}>
        <View style={styles.view2}>
          <View style={styles.checkbox}>
            <Checkbox
              color="#8f37f6"
              status={completed ? "checked" : "unchecked"}
              onPress={handleCheckbox}
            />
          </View>
          <View style={styles.colomn}>
            <Text style={styles.task}>{item.name}</Text>
            <Text style={styles.text1}>{item.contributors + " "} </Text>
            <Text style={styles.text1}>Manager: {item.manager}</Text>
          </View>

          <Icon
            name="trash"
            color="#8f37f6"
            size={20}
            style={styles.trash}
            onPress={() => setVisible(true)}
          />
          <Icon
            name="pencil"
            color="#8f37f6"
            size={20}
            style={styles.pencil}
            onPress={() => {
              Edit(item.name, item._id, item.description, item.deadline);
            }}
          />
        </View>
      </View>
      <PopupModal
        visible={visible}
        title="Xóa công việc"
        message="Bạn có chắc chắn muốn xóa không?"
        confirmText={"Xóa"}
        cancelText={"Hủy"}
        onConfirm={async () => {
          await dispatch<any>(deleteTask(item._id));
          await dispatch<any>(loadAllTask());
          dispatch<any>(loadTaskContributor())
          dispatch<any>(loadTaskManager())
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

export default Task_Admin;
