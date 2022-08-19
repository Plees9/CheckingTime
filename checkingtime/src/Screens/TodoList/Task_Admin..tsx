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
const Task_Admin = ( {item}) => {
    const {user} = useSelector<any, any>(state => state.auth)
    const dispatch = useDispatch()
    let index = 0
    const [completed, setCompleted] = useState(false);
    const styles = useMemo(() => createStyles(), []);
    const navigation = useNavigation<any>();
    const [show_1, setShow_1] = useState(false);
    console.log(item._id)
    const handleCheckbox = () => {
        setCompleted(!completed);
    }


    return (
        <View style={styles.render}>
        <View style={{ flexDirection: "row", backgroundColor: "#f2f2f2" }}>
          <View style={styles.view2}>
            <View style={styles.checkbox}>
            <Checkbox
                color="#FFC23C"
                status={completed ? "checked" : "unchecked"}
                onPress={handleCheckbox}

              />
            </View>
            <View style={styles.colomn}>
              <Text style={styles.task}>{item.name}</Text>
              <Text style={styles.text1}>{ item.contributors + " "  } </Text>
            </View>
  
            <Icon
              name="trash"
              color="#f49218"
              size={20}
              style={styles.trash}
              onPress={() => {dispatch<any>(deleteTask(item._id))
                                dispatch<any>(loadAllTask())}}
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

export default Task_Admin