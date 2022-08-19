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
import { checkingTask, loadTaskContributor } from '../../../redux/action';
import Loader from '../../navigation/Loader';
const Task = ( {item}) => {
    const {user} = useSelector<any, any>(state => state.auth)
    const dispatch = useDispatch()
    let index = 0
    for (var i = 0; i < item.contributors.length ; i++ ) {
    if (item.contributors[i] == user.name) {
        index=i
    }
    }
    const [completed, setCompleted] = useState(item.isDone[index]);
    const styles = useMemo(() => createStyles(), []);
    const navigation = useNavigation<any>();
    const [show_1, setShow_1] = useState(false);
    const handleCheckbox =  async() => {
        setCompleted(!completed);
        await dispatch<any>(checkingTask(item._id))
        await dispatch<any>(loadTaskContributor())
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
            name="pencil"
            color="#f49218"
            size={20}
            style={styles.pencil}
            onPress={() => navigation.navigate("Cập nhật công việc")}
          />
        </View>
      </View>
    </View>

    )
}

export default Task