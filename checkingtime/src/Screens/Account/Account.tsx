import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState, useMemo, useEffect } from "react";

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
import { logout, loadUser, updateAvatar } from "../../../redux/action";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import moment from "moment";
const Account = () => {
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);
  const [userId, setuserId] = useState(String(user.userId));
  const [avatar, setAvatar] = useState(user.avatar.url);
  const [date, setDate] = useState(moment(user.startWorkingDate).format("DD/MM/YYYY"));
  const [privilege, setPrivilege] = useState(user.privilege);
  const [typeOfEmployee, setTypeOfEmployee] = useState(user.typeOfEmployee);
  const [role, setRole] = useState(user.role);
  const [contractStatus, setContractStatus] = useState(user.contractStatus);
  const { message, error } = useSelector<any, any>((state) => state.message);
  const [flag1, setFlag1] = useState();
  const logoutHandler = () => {
    dispatch<any>(logout());
  };
  const cameraHandler = () => {
    navigation.navigate("Đổi ảnh đại diện");
  };
  console.log(user.avatar.url)
  const route = useRoute();
  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
        setFlag1(route.params.flag);
      }
    }
    
  }, [route]);
  const imageHandler = async () => {
    const myForm = new FormData();
    myForm.append(
      "avatar",
      JSON.parse(
        JSON.stringify({
          uri: avatar,
          type: mime.getType(avatar),
          name: avatar.split("/").pop(),
        })
      )
    );
    console.log(myForm);
    await dispatch<any>(updateAvatar(myForm));
    await dispatch<any>(loadUser())
  };
  if (flag1 == 1) {
    imageHandler();
    setFlag1(0);
  }
  useEffect(() => {
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hang}>
        <Avatar
          size={70}
          rounded
          source={{ uri: avatar }}
          containerStyle={{ backgroundColor: "orange" }}
          onPress={cameraHandler}
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
            color="#f49218"
            style={styles.icon}
          />

          <View style={styles.cot}>
            <Text style={styles.user}>Email</Text>
            <Text style={styles.user}>{email}</Text>
            
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon1 name="call" size={40} color="#f49218" style={styles.icon} />
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
          <Icon1 name="card" size={35} color="#f49218" style={styles.icon} />
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
            color="#f49218"
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
            color="#f49218"
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
          <Icon1 name="people" size={40} color="#f49218" style={styles.icon} />
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

        <TouchableOpacity onPress={logoutHandler}>
          <Text style={styles.chu1}> Đăng xuất </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;
