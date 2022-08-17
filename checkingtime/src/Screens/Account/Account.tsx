import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import PopupModal from "../../component/PopupModal";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import {
  NavigationHelpersContext,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import createStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadUser, updateAvatar, updateDeviceId, updateCompanyIp } from "../../../redux/action";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import moment from "moment";
import * as Device from 'expo-device';
import publicIP from 'react-native-public-ip';
const Account = () => {
  const [visible, setVisible] = useState(false);
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  const deviceId = Device.deviceName + user.userId + Device.modelName
  const navigation = useNavigation<any>()
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);
  const [userId, setuserId] = useState(String(user.userId));
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [date, setDate] = useState(
    moment(new Date(user.startWorkingDate)).format("DD/MM/YYYY")
  );
  const [privilege, setPrivilege] = useState(user.privilege);
  const [typeOfEmployee, setTypeOfEmployee] = useState(user.typeOfEmployee);
  const [role, setRole] = useState(user.role);
  const [contractStatus, setContractStatus] = useState(user.contractStatus);
  const [flag1, setFlag1] = useState();
  const [networkIp, setNetworkIp] = useState()
  const logoutHandler = () => {
    dispatch<any>(logout());
  };
  publicIP()
.then((ip: React.SetStateAction<string>) => {   
  // '47.122.71.234'
  setNetworkIp(ip)
})
.catch((error: any) => {

  // 'Unable to get IP address.'
})
  const updateId = async() => {
    console.log(deviceId)
    await dispatch<any>(updateDeviceId(deviceId))
  }
  const companyIpHandler = async() => {
    await dispatch<any>(updateCompanyIp(networkIp))
  }
  const { message, error } = useSelector<any, any>((state) => state.message)
  console.log(message)
  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
     }
  }, [alert, dispatch, error, message]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_2}>
        <View style={styles.hang}>
          <Avatar
            size={70}
            rounded
            source={{ uri: avatar }}
            containerStyle={{ backgroundColor: "orange" }}
          />
          <View>
            <Text style={styles.user}>{userName}</Text>
            <Text style={styles.user}>{role}</Text>
          </View>
        </View>
        {/* tạo kẻ ngang */}
        <View style={styles.kengang} />

        <View>
          <Text style={styles.text}>Thông tin cá nhân</Text>
          <View style={styles.hang}>
            <Icon1
              name="mail-unread"
              size={40}
              color="#716DF2"
              style={styles.icon}
            />

            <View style={styles.cot}>
              <Text style={styles.user}>Email</Text>
              <Text style={styles.user}>{email}</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Icon1
                name="call"
                size={40}
                color="#716DF2"
                style={styles.icon}
              />
              <View>
                <Text style={styles.user}>Số điện thoại</Text>
                <Text style={styles.user}>{numberPhone}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* tạo kẻ ngang */}
        <View style={styles.kengang} />
        <View>
          <Text style={styles.text}>Thông tin công việc</Text>
          <View style={styles.hang}>
            <Icon1 name="card" size={35} color="#716DF2" style={styles.icon} />
            <View>
              <Text style={styles.user}>Mã nhân viên </Text>
              <Text style={styles.user}>{userId}</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.hang}>
            <Icon1
              name="calendar"
              size={40}
              color="#716DF2"
              style={styles.icon}
            />
            <View>
              <Text style={styles.user}>Ngày bắt đầu làm việc</Text>
              <Text style={styles.user}>{date}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.hang}>
            <Icon1
              name="hourglass"
              size={40}
              color="#716DF2"
              style={styles.icon}
            />
            <View>
              <Text style={styles.user}>Trạng thái hợp đồng </Text>
              <Text style={styles.user}>{contractStatus}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.hang}>
            <Icon1
              name="people"
              size={40}
              color="#716DF2"
              style={styles.icon}
            />
            <View>
              <Text style={styles.user}>Loại hình nhân sự </Text>
              <Text style={styles.user}>{typeOfEmployee}</Text>
            </View>
          </View>
        </View>
        {/* Tao ke ngang */}
        <View style={styles.kengang} />

        <View>
          <TouchableOpacity
            style={{ marginTop: "2%" }}
            onPress={() => navigation.navigate("Cập nhật thông tin nhân viên")}
          >
            <Text style={styles.chu}> Thay đổi thông tin cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.khoangcach}
            onPress={() => navigation.navigate("Thay đổi mật khẩu")}
          >
            <Text style={styles.chu}> Thay đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.khoangcach}
            onPress={() => {updateId()}}
          >
            <Text style={styles.chu}> Thay đổi DeviceId</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.khoangcach}
            onPress={() => {companyIpHandler()}}
          >
            <Text style={styles.chu}> Thay đổi CompanyIp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}
          >
            <Text style={styles.chu1}> Đăng xuất</Text>
          </TouchableOpacity>

          <PopupModal
            visible={visible}
            title="Đăng xuất"
            message="Bạn có chắc chắn muốn đăng xuất?"
            confirmText={"Đăng xuất"}
            cancelText={"Hủy"}
            onConfirm={() => {
              logoutHandler();
              setVisible(false);
            }}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
