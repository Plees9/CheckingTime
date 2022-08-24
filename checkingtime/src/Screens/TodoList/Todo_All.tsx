import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useMemo, useState, Component, useEffect } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { FAB, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadAlluser, loadAllTask, queryUser, searchTask } from "../../../redux/action";
import moment from "moment";
import Task_Admin from "./Task_Admin.";
import Loader from "../../navigation/Loader";

const Todo_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const { user} = useSelector<any, any>((state) => state.auth);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState(user.name); //name

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const route = useRoute () 
  const dispatch = useDispatch()
  

  // useEffect(() => {
  //   dispatch<any>(loadAllTask());
    

  // }, []);
  const { allTask, loading } = useSelector<any, any>((state) => state.task);

  if (typeof allTask === "undefined") {
    return <Loader />
  }
  return (
    loading ? <Loader />:
    <View>
      <View style={styles.view}>
      <View style={styles.row}>
        
        <View style={styles.icon1}>
          <Icon name="search" size={20} color= "#8f73f6" style={styles.icon3} />
          <TextInput
            style={styles.text}
            placeholder="Tìm kiếm"
            returnKeyType="done"
            onChangeText={(text) => { 
            dispatch<any>(searchTask(text))
            setSearch(text)}}
            value={search}
          ></TextInput>
        </View>
      </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Danh sách công việc:</Text>
        </View>
        <View style={styles.kengang}></View>
        
        <ScrollView>
        {allTask && allTask.tasks.map((item : any) => (
                            <Task_Admin key={item._id} item={item}/>
                        ))} 

        </ScrollView>
      </View>
        <FAB
          title="Thêm công việc"
          
          size="small"
          color="#8f73f6"
          style={styles.fab}
          onPress={() => navigation.navigate("Thêm công việc quản quản trị viên")}
        />
      
    </View>
  );
};

export default Todo_All;