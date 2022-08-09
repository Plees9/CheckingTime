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
import Icon1 from "react-native-vector-icons/Ionicons"
import styles from "./styles";
import TimekeepModal from "../../component/TimekeepModal";
import { loadUser } from "../../../redux/action";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { FAB, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getmyrank,  loadTimesheet,  loadCompany } from "../../../redux/action";
const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch<any>(loadCompany())
    dispatch<any>(loadTimesheet())
    dispatch<any>(getmyrank())
}, [dispatch])
  const navigation = useNavigation<any>();
  const [showTimekeep, setShowTimekeep] = useState(false);
  const { user } = useSelector<any, any>((state) => state.auth);
  const { timesheet, number } = useSelector<any, any>((state) => state.timesheet)
  const maxPoint = 25;
  const currentProcess = 20.5;
  let checkout 
  let checkin
  let numberstr
  if (typeof timesheet !== 'undefined' && typeof number !== 'number' && timesheet !== null && number !== null) {
    checkin = timesheet.Object.checkinTime;
    checkout = timesheet.Object.checkoutTime;
    numberstr = number.number
}
  const [userName, setUserName] = useState(user.name);
  const [avatar, loading] = useState(user.avatar.url);
  const [refreshing, setRefreshing] = React.useState(false);
  const companyHandler = async () => {
    navigation.navigate("Thông tin Công Ty");
  };
  const pressHandler = () => {
    ToastAndroid.show(
      "Bạn" + " " + userName + " " + "đã chấm công!",
      ToastAndroid.SHORT
    );
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
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
            <Avatar 
                       
            rounded source={{ uri: avatar }} 
            size={40}
            ></Avatar>
            <Text style={styles.text1}> Xin chào, {userName}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ alignItems: "center"  }}>
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
          <TouchableOpacity onPress={() => setShowTimekeep(true)}>
            <View style={styles.btn1}>
              <Text style={styles.text6}> Công Tháng</Text>
              <View style={styles.vongtron}><AnimatedCircularProgress
              size={35}
              width={4}
              fill={Math.round((currentProcess/maxPoint) * 100)}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            />
              
            </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <Text style={styles.text7}>Top 5 hôm nay</Text>
          
          <View style={styles.row1}>
            <View style={styles.avt2} >
            <Avatar rounded source={{ uri: avatar }} size={40}  />
            </View>
            
            <Text style={styles.name2}>Đặng Phan T Công</Text>
            <Text style={styles.checkin2}>00:22:11</Text>
            
          </View>

          <View style={styles.row1}>
            <View style={styles.avt2} >
            <Avatar rounded source={{ uri: avatar }} size={40}  />
            </View>
            <Text style={styles.name2}>Đặng Phan Thành Công nhe</Text>
            <Text style={styles.checkin2}>00:22:11</Text>
          </View>

          <View style={styles.row1}>
            <View style={styles.avt2} >
            <Avatar rounded source={{ uri: avatar }} size={40}  />
            </View>
            <Text style={styles.name2}>Đặng Thành Công</Text>
            <Text style={styles.checkin2}>00:22:11</Text>
          </View>

          <View style={styles.row1}>
            <View style={styles.avt2} >
            <Avatar rounded source={{ uri: avatar }} size={40}  />
            </View>
            <Text style={styles.name2}>Đặng  Thành Công</Text>
            <Text style={styles.checkin2}>00:22:11</Text>
          </View>

          <View style={styles.row1}>
            <View style={styles.avt2} >
            <Avatar rounded source={{ uri: avatar }} size={40}  />
            </View>
            <Text style={styles.name2}>Đặng Phan </Text>
            <Text style={styles.checkin2}>00:22:11</Text>
          </View>

          
         
        </View>
      </ScrollView>
      <FAB
        title="Chấm công"
        placement="right"
        size="small"
        color="#FF8C32"
        buttonStyle={styles.fab}
        onPress={pressHandler}
      />
      <TimekeepModal
      visible={showTimekeep}
      maxPoint={maxPoint}
      title='Bảng công'
      fill={currentProcess}
      cancelText='Đóng'
      onCancel={() => setShowTimekeep(false)}
      size={70}
      process={10}
      width={4}/>
    </View>
  );
};

export default HomeScreen;
