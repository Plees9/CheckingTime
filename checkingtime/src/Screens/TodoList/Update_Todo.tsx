import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import createStyles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllTask,
  loadAlluser,
  queryUser,
  registerTask,
  search
} from "../../../redux/action";
import Toast from "react-native-toast-message";
import Contributor_Add_Task from "./Contributor_Add_Task";
import Loader from "../../navigation/Loader";
import { useRoute } from "@react-navigation/native";
import BadgeModal from "../../component/BadgeModal";
import { FONTS } from "../../../constants/theme";


const Update_Todo = () => {
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  const styles = useMemo(() => createStyles(), []);
  const { user, loading } = useSelector<any, any>((state) => state.auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); //Mô tả task
  const [deadline, setDeadline] = useState(moment()); //Deadline của task\
  const [time_task, setTime_Task] = useState(moment());
  const [date, setDate] = useState(moment());
  const [status, setStatus] = useState(""); //Trạng thái của task
  const [manager, setManager] = useState(""); //Trạng thái của task
  const [contributors, setContributors] = useState(""); //Trạng thái của task
  const [avatar, setAvatar] = useState(user.avatar.url);
  const route = useRoute();
  const [searchUser, setSearch] = useState("");
  const [userName, setUserName] = useState([]);
  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [show_1, setShow_1] = useState(false);
  const { allUser } = useSelector<any, any>((state) => state.allUser);
  const { allTask } = useSelector<any, any>((state) => state.task);
  const { task } = useSelector<any, any>((state) => state.task);
  if (typeof allTask == "undefined") {
    return <Loader />;
  }

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
    myForm.append("contributors", contributors);
    dispatch<any>(registerTask(myForm));
    dispatch<any>(loadAllTask());
    dispatch<any>(loadAlluser());
  };

  const ToastAlertMessage = (message: any) => {
    Toast.show({ text1: message, type: "success" });
  };
  const ToastAlertError = (error: any) => {
    Toast.show({ text1: error, type: "error" });
  };
  const configToast = {
    success: (internal: any) => (
      <View
        style={{
          width: "95%",
          height: 40,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
      </View>
    ),
    error: (internal: any) => (
      <View
        style={{
          width: "95%",
          height: 40,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}> {internal.text1}</Text>
      </View>
    ),
  };

  useEffect(() => {
    dispatch<any>(loadAlluser());
  }, []);
  const { message, error } = useSelector<any, any>((state) => state.message);

  useEffect(() => {
    if (message == "Tạo thành công") {
      setName("");
      setDescription("");
      setDeadline(moment());
      setTime_Task(moment());
      setDate(moment());
      setContributors("");
    }
    if (error == "Tạo thất bại") {
      ToastAlertError(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      ToastAlertMessage(message);
      dispatch({ type: "clearMessage" });
    }
  }, [ToastAlertError, ToastAlertMessage, message, error]);

  return (
    <View style={styles.viewAdd_todo}>
      <View style={{height:"92%"}}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              borderRadius: 5,
              backgroundColor: "#ffffff", 
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <TextInput
              placeholder="Nhập tên công việc"
              returnKeyType="done"
              value={name}
              secureTextEntry={false}
              onChangeText={setName}
              style={{ marginLeft: 10, padding: 5, fontFamily:FONTS.vanSansRegular}}
            ></TextInput>
          </View>
        </View>
       
        <View style={styles.text_Content_Todo}>
          <TextInput
            placeholder="Mô tả nội dung công việc"
            returnKeyType="done"
            value={description}
            onChangeText={setDescription}
            style={styles.text_Description}
          ></TextInput>
        </View>
        <View>
          <Text style={{ marginLeft: 10, marginRight: 10, marginTop:10 , fontFamily:FONTS.vanSansBold}}>
            Thời gian cần hoàn thành:
          </Text>
          <View style={styles.viewTime}>
            <View style={styles.textTime}>
              <Pressable onPress={() => setShow_1(true)}>
                <View
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <Text style={{fontFamily:FONTS.vanSansRegular}}>{time_task.format("HH:mm")}</Text>
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
                  <Text style={{fontFamily:FONTS.vanSansRegular}}>{date.format("DD/MM/YYYY")}</Text>
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
          </View>
        </View>

        <View>
          <Text style={{ marginLeft: 10, marginRight: 10, fontFamily:FONTS.vanSansBold }}>
            Nhân viên phụ trách:
          </Text>
          <View style={styles.icon_add_task}>
            <Icon
              name="search"
              size={20}
              color="#8f73f6"
              style={styles.icon3}
            />
            <TextInput
              style={styles.text}
              placeholder="Tìm kiếm"
              returnKeyType="done"
              onChangeText={(text) => {
                if (route.params) {
                  dispatch<any>(search(text))
                setSearch(text);
              }}}
              value={searchUser}
            ></TextInput>
          </View>
        {userList &&
              userName.map((item: any) => (
                <BadgeModal key={item._id} item={item} userList={userList} setUserList={setUserList} userName={userName} setUserName={setUserName}  />
              ))}
          <ScrollView style={styles.style_add_task}>
            {allUser &&
              allUser.array.map((item: any) => (
                <Contributor_Add_Task key={item._id} item={item} userList={userList} setUserList={setUserList} userName={userName} setUserName={setUserName} />
              ))}
          </ScrollView>
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#8f73f6", "#8f73f6"]}
        style={styles.btnFab_add_task}
      >
        <TouchableOpacity onPress={registerHandlerTask}>
          <Text style={styles.textComfirm}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Toast config={configToast} ref={(ref: any) => Toast.setRef(ref)} />
    </View>
  );
};

export default React.memo(Update_Todo);
