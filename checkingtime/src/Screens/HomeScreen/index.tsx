import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from "react-native";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
import { IconButton } from "react-native-paper";
import styles from "./styles";
import TodoModal from "../../component/TodoModal";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {
  checking,
  loadTask,
  loadTimesheetPoint,
  loadUser,
  ranking,
} from "../../../redux/action";
import { FAB, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getmyrank, loadTimesheet, loadCompany } from "../../../redux/action";
import { LinearGradient } from "expo-linear-gradient";

import publicIP from "react-native-public-ip";
import * as Device from "expo-device";
import moment from "moment";
const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const HomeScreen = () => {
  const { user } = useSelector<any, any>((state) => state.auth);
  const [networkIp, setNetworkIp] = useState("");
  let processBoard : number = 0
  let deviceId: any;
  if (typeof user != undefined) {
    deviceId = Device.deviceName + user.userId + Device.modelName;
  }
  publicIP()
    .then((ip: React.SetStateAction<string>) => {
      // '47.122.71.234'
      setNetworkIp(ip);
    })
    .catch((error: any) => {
      // 'Unable to get IP address.'
    });
  const { message, error } = useSelector<any, any>((state) => state.timesheet);
  const dispatch = useDispatch();
  let actualPoint: any;
  let maxPoint: any;
  let timeLate;
  let checkout;
  let checkin;
  let numberstr;
  let avatar1;
  let userName1;
  let checkin1;
  let avatar2;
  let userName2;
  let checkin2;
  let avatar3;
  let userName3;
  let checkin3;
  let avatar4;
  let userName4;
  let checkin4;
  let avatar5;
  let userName5;
  let checkin5;
  const navigation = useNavigation<any>();
  const { timesheet, number, array } = useSelector<any, any>(
    (state) => state.timesheet
  );

  const { timesheetPoint } = useSelector<any, any>((state) => state.timesheet);
  if (typeof timesheetPoint !== "undefined" && timesheetPoint !== null) {
    actualPoint = timesheetPoint.point.actualPoint;
    maxPoint = timesheetPoint.point.maxPoint;
    processBoard  = (actualPoint / maxPoint) * 100;
  }

  if (
    typeof timesheet !== "undefined" &&
    typeof number !== "undefined" &&
    timesheet !== null &&
    number !== null
  ) {
    checkin = timesheet.checking.checkinTime;
    checkout = timesheet.checking.checkoutTime;
    numberstr = number.rank;
  }
  if (typeof array !== "undefined" && array !== null) {
    if (typeof array.ranking[0] !== "undefined") {
      avatar1 = array.ranking[0].avatar.url;
      userName1 = array.ranking[0].name;
      checkin1 = array.ranking[0].checkinTime;
    }
    if (typeof array.ranking[1] !== "undefined") {
      avatar2 = array.ranking[1].avatar.url;
      userName2 = array.ranking[1].name;
      checkin2 = array.ranking[1].checkinTime;
    }
    if (typeof array.ranking[2] !== "undefined") {
      avatar3 = array.ranking[2].avatar.url;
      userName3 = array.ranking[2].name;
      checkin3 = array.ranking[2].checkinTime;
    }
    if (typeof array.ranking[3] !== "undefined") {
      avatar4 = array.ranking[3].avatar.url;
      userName4 = array.ranking[3].name;
      checkin4 = array.ranking[3].checkinTime;
    }
    if (typeof array.ranking[4] !== "undefined") {
      avatar5 = array.ranking[4].avatar.url;
      userName5 = array.ranking[4].name;
      checkin5 = array.ranking[4].checkinTime;
    }
  }
  const [userName, setUserName] = useState(user.name);
  const [avatar, loading] = useState(user.avatar.url);
  const [refreshing, setRefreshing] = React.useState(false);
  const companyHandler = async () => {
    navigation.navigate("Thông tin Công Ty");
  };
  useEffect(() => {
    if (
      typeof actualPoint !== "undefined" &&
      actualPoint !== null &&
      maxPoint !== "undefined" &&
      maxPoint !== null
    ) {

    }
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [alert, dispatch, error, message]);
  const pressHandler = async () => {
    await dispatch<any>(checking(networkIp, deviceId));
    dispatch<any>(loadTimesheet());
    dispatch<any>(getmyrank());
    dispatch<any>(ranking());
    dispatch<any>(loadTimesheetPoint())

    //show toast android and ios
    if (Platform.OS === "android") {
      ToastAndroid.show(userName + " " + "đã chấm công!", ToastAndroid.SHORT);
    } else {
      Alert.alert(userName + " " + "đã chấm công!");
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch<any>(loadTimesheet());
      dispatch<any>(getmyrank());
      dispatch<any>(ranking());
    dispatch<any>(loadTimesheetPoint())
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            colors={["#8f73f6", "#8f73f6"]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Tài khoản")}>
            <View style={styles.row}>
              <Avatar rounded source={{ uri: avatar }} size={40}></Avatar>
              <View>
                <Text style={styles.text1}>Xin chào,</Text>
                <Text style={styles.text1}>{userName}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Icon name="eye" />
        </View>
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#8f73f6", "#8f73f6"]}
            style={styles.icon2}
          >
            <View style={styles.box_check}>
              <Text style={styles.text}>Nhật ký hôm nay</Text>
              <View>
                <View style={styles.textIcon23}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      flex: 1,
                    }}
                  >
                    <Icon
                      name="check"
                      size={13}
                      color="#8f73f6"
                      style={styles.boder}
                    />

                    <Text style={styles.text2}>Checkin: </Text>
                  </View>
                  <View style={{ justifyContent: "flex-end", flex: 1 }}>
                    <Text style={styles.text4}>{checkin}</Text>
                  </View>
                </View>
                <View style={styles.textIcon23}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "flex-end",
                      flex: 1,
                    }}
                  >
                    <Icon1
                      name="log-out-outline"
                      size={13}
                      color="#8f73f6"
                      style={styles.boder}
                    />

                    <Text style={styles.text2}>Checkout:</Text>
                  </View>
                  <View style={{ justifyContent: "center", flex: 1 }}>
                    <Text style={styles.text4}>{checkout}</Text>
                  </View>
                </View>

                <View style={styles.textIcon23}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "flex-end",
                      flex: 1,
                    }}
                  >
                    <Icon
                      name="line-chart"
                      size={13}
                      color="#8f73f6"
                      style={styles.boder}
                    />

                    <Text style={styles.text2}>Xếp hạng:</Text>
                  </View>
                  <View style={{ justifyContent: "center", flex: 1 }}>
                    <Text style={styles.text4}>{numberstr}</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.box_job}>
            <View
              style={{
                marginTop: 10,
                height: 180,
              }}
            >
              <Text style={styles.title_job}>Công tháng</Text>

              <AnimatedCircularProgress
                size={85}
                width={5}
                fill={processBoard}
                tintColor="#6cc8f1"
                style={{ alignSelf: "center", marginTop: 10 }}
                backgroundColor="#3d5875"
              >
                {() => (
                  <Text style={styles.points}>
                    {actualPoint} / {maxPoint}
                  </Text>
                )}
              </AnimatedCircularProgress>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.text_late}>{timeLate} lần đi muộn !</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={companyHandler}>
            <View style={styles.btn1}>
              <Icon
                name="building"
                size={18}
                color="#8f73f6"
                style={styles.icon1}
              />
              <Text style={styles.text5}>Thông tin Công Ty</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Công việc của tôi")}
          >
            <View style={styles.btn1}>
              <Icon
                name="clipboard"
                size={20}
                color="#8f73f6"
                style={styles.icon1}
              />
              <Text style={styles.text6}>Công việc hôm nay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <View style={styles.row_rank}>
            <Text style={styles.text7}>Top 5 hôm nay</Text>
          </View>

          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar1 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName1}</Text>
            <Text style={styles.checkin2}>{checkin1}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar2 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName2}</Text>
            <Text style={styles.checkin2}>{checkin2}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar3 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName3}</Text>
            <Text style={styles.checkin2}>{checkin3}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar4 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName4}</Text>
            <Text style={styles.checkin2}>{checkin4}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar5 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName5}</Text>
            <Text style={styles.checkin2}>{checkin5}</Text>
          </View>
        </View>
        <View style={{ height: 60, justifyContent: "center" }}>
          
        </View>
      </ScrollView>
      <FAB
        title="Chấm công"
        placement="right"
        size="small"
        color="#8f73f6"
        buttonStyle={styles.fab}
        onPress={pressHandler}
      />
    </View>
  );
};

export default HomeScreen;
