import { View, Text, Pressable } from 'react-native'
import React, { useMemo, useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { Checkbox } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
import createStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import DateTimePicker from "@react-native-community/datetimepicker";
import { checkingTask, deleteTask, loadAllTask, loadTaskContributor, loadTaskManager } from '../../../redux/action';
import PopupModal from '../../component/PopupModal';
const Task_Manager = ( {item}) => {
    const dispatch = useDispatch()
    const [completed, setCompleted] = useState(false);
    const styles = useMemo(() => createStyles(), []);
    const navigation = useNavigation<any>();
    const [show_1, setShow_1] = useState(false);
    const handleCheckbox = () => {
        setCompleted(!completed);
    }
    const [visible,setVisible] = useState(false);
    const Edit = async (
      name: any,
      _id:any ,
      description :any,

      deadline :any ,
    ) => {
      navigation.navigate("Cập nhật công việc quản lý", {name , _id ,description,deadline});
    };
    return (
      <View style={styles.render}>
        <View
          style={{ flexDirection: "row", backgroundColor: "#f2f2f2", flex: 1 }}
        >
          <View style={styles.view3}>
            <View style={styles.checkbox}>
            <Checkbox
                color="#8f73f6"
                status={completed ? "checked" : "unchecked"}
                onPress={handleCheckbox}
              />
            </View>
            <View style={styles.colomn1}>
              <Text style={styles.task}>{item.name}</Text>
              <View style={styles.textTime}>
              <Pressable>
                <View
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Text>
                    {moment(item.deadline, "HH:mm, DD/MM/YYYY").format("HH:mm, DD/MM/YYYY")}
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
              name="trash"
              color="#8f37f6"
              size={20}
              style={styles.trash}
              onPress={() => setVisible(true)
              }
            />
            <Icon
              name="pencil"
              color="#8f37f6"
              size={20}
              style={styles.pencil}
              onPress={() => {
                Edit(
                 item.name , item._id , item.description , item.deadline
                 
                );
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
              await dispatch<any>(loadTaskManager());
              dispatch<any>(loadAllTask());
              dispatch<any>(loadTaskContributor())
            }}
            onCancel={() => {
              setVisible(false);
            }}
          />
      </View>
    );
    }  

export default Task_Manager