import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
import styles from "./styles";

import { checking, loadUser, ranking } from "../../../redux/action";

import { FAB, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getmyrank, loadTimesheet, loadCompany } from "../../../redux/action";
const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  let checkout;
  let checkin 
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
  useEffect(() => {
    dispatch<any>(loadCompany());
    dispatch<any>(loadTimesheet());
    dispatch<any>(getmyrank());
    dispatch<any>(ranking());
  }, [dispatch]);
  const navigation = useNavigation<any>();
  const { user } = useSelector<any, any>((state) => state.auth);
  const { timesheet, number, array } = useSelector<any, any>(
    (state) => state.timesheet
  );
  console.log(timesheet)
  console.log(number)
  if (
    typeof timesheet !== "undefined" &&
    typeof number !== "undefined" &&
    timesheet !== null &&
    number !== null 
  ) {
    checkin = timesheet.Object.checkinTime;
    checkout = timesheet.Object.checkoutTime;
    numberstr = number.number;
  }
  if (
  typeof array !== "undefined" &&
  array !== null ) {
    if (typeof array.array[0] !== "undefined") {
      avatar1 = array.array[0].avatar.url;
      userName1 = array.array[0].name;
      checkin1 = array.array[0].checkinTime;
     }
    if (typeof array.array[1] !== "undefined") {
      avatar2 = array.array[1].avatar.url;
      userName2 = array.array[1].name;
      checkin2 = array.array[1].checkinTime;
    }
    if (typeof array.array[2] !== "undefined") {
    avatar3 = array.array[2].avatar.url;
    userName3 = array.array[2].name;
    checkin3 = array.array[2].checkinTime;
    }
    if (typeof array.array[3] !== "undefined") {
    avatar4 = array.array[3].avatar.url;
    userName4 = array.array[3].name;
    checkin4 = array.array[3].checkinTime;
    }
    if (typeof array.array[4] !== "undefined") {
    avatar5 = array.array[4].avatar.url;
    userName5 = array.array[4].name;
    checkin5 = array.array[4].checkinTime;
    }
  }
  const [userName, setUserName] = useState(user.name);
  const [avatar, loading] = useState(user.avatar.url);
  const [refreshing, setRefreshing] = React.useState(false);
  const companyHandler = async () => {
    navigation.navigate("Thông tin Công Ty");
  };
  const pressHandler = async () => {

    await dispatch<any>(checking());
    dispatch<any>(loadTimesheet());
    dispatch<any>(getmyrank());
    dispatch<any>(ranking());
    ToastAndroid.show(
      "Bạn" + " " + userName + " " + "đã chấm công!",
      ToastAndroid.SHORT
    );
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {setRefreshing(false);
      dispatch<any>(loadTimesheet());
      dispatch<any>(getmyrank());
      dispatch<any>(ranking());});
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TouchableOpacity onPress={() => navigation.navigate("Tài khoản")}>
          <View style={styles.row}>
            <Avatar rounded source={{ uri: avatar }} size={40}></Avatar>
            <Text style={styles.text1}> Xin chào, {userName}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <View style={styles.icon2}>
            <Text style={styles.text}>Nhật ký hôm nay</Text>
            <View>
              <View style={styles.textIcon23}>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-end",
                    flex: 1,
                  }}
                >
                  <Icon
                    name="check"
                    size={18}
                    color="#f49218"
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
                    size={20}
                    color="#f49218"
                    style={styles.boder}
                  />

                  <Text style={styles.text2}>Checkout: </Text>
                </View>
                <View style={{ justifyContent: "flex-end", flex: 1 }}>
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
                    size={18}
                    color="#f49218"
                    style={styles.boder}
                  />

                  <Text style={styles.text2}>Xếp hạng: </Text>
                </View>
                <View style={{ justifyContent: "flex-end", flex: 1 }}>
                  <Text style={styles.text4}>{numberstr}</Text>
                </View>
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
                color="#f49218"
                style={styles.icon1}
              />
              <Text style={styles.text5}>Thông tin Công Ty</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("image clicked")}>
            <View style={styles.btn1}>
              <Text style={styles.text6}> Công Tháng</Text>
              <View style={styles.vongtron}></View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <Text style={styles.text7}>Top 5 hôm nay</Text>

          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar1 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName1}</Text>
            <Text style={styles.checkin2}> {checkin1}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar2 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName2}</Text>
            <Text style={styles.checkin2}> {checkin2}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar3 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName3}</Text>
            <Text style={styles.checkin2}> {checkin3}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar4 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName4}</Text>
            <Text style={styles.checkin2}> {checkin4}</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.avt2}>
              <Avatar rounded source={{ uri: avatar5 }} size={40} />
            </View>
            <Text style={styles.name2}>{userName5}</Text>
            <Text style={styles.checkin2}> {checkin5}</Text>
          </View>
        </View>
      </ScrollView>
      <FAB
        // onPress={() => {
        //   setIsCheckin(!isCheckin);
        //   {
        //     isCheckin == true
        //       ? Alert.alert("Checkin thành công")
        //       : Alert.alert("Checkout thành công");
        //   }
        // }}
        // title={isCheckin ? "Checkin" : "Checkout"}
        // color={isCheckin ? "#FF8C32" : "#F55353"}
        title="Chấm công"
        placement="right"
        size="small"
        color="#FF8C32"
        buttonStyle={styles.fab}
        onPress={pressHandler}
      />
    </View>
  );
};

export default HomeScreen;
