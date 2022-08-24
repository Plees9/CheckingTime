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
import Toast from "react-native-toast-message";
const Account = () => {
  const { message, error } = useSelector<any, any>((state) => state.message);
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
    if (message) {
      ToastAlertMessage(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      ToastAlertError(error);
      dispatch({ type: "clearError" });
    }
  }, [ToastAlertMessage, ToastAlertError, dispatch, error, message]);
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
  
 
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container_2}>
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
            onPress={() => navigation.navigate("Cập nhật thông tin cá nhân")}
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
            onPress={() => {
              updateId();
            }}
          >
            <Text style={styles.chu}> Thay đổi mã thiết bị</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.khoangcach}
            onPress={() => {
              companyIpHandler();
            }}
          >
            <Text style={styles.chu}> Thay đổi IP Công ty</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.khoangcach}
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
      </ScrollView>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default Account;