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
const Task_Manager = ( {item}) => {
    const dispatch = useDispatch()
    const [completed, setCompleted] = useState(false);
    const styles = useMemo(() => createStyles(), []);
    const navigation = useNavigation<any>();
    const [show_1, setShow_1] = useState(false);
    const handleCheckbox = () => {
        setCompleted(!completed);
    }


    return (
        <View style={styles.render}>
        <View
          style={{ flexDirection: "row", backgroundColor: "#f2f2f2", flex: 1 }}
        >
          <View style={styles.view3}>
            <View style={styles.checkbox}>
            <Checkbox
                color="#FFC23C"
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
              color="#f49218"
              size={20}
              style={styles.trash}
              onPress={async () => {await dispatch<any>(deleteTask(item._id))
                                await dispatch<any>(loadTaskManager())}}
            />
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
    }  

export default Task_Manager