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
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadUser, updateAvatar } from "../../../redux/action";
import * as ImagePicker from "expo-image-picker";
import mime from "mime"
const Account = () => {
  const { user, loading } = useSelector<any, any>(state => state.auth)
  const styles = useMemo(() => createStyles(), []);
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);
  const [userId, setuserId] = useState(String(user.userId));
  const [avatar, setAvatar] = useState(user.avatar.url)
  const [date, setDate] = useState(user.startWorkingDate);
  const [privilege, setPrivilege] = useState(user.privilege);
  const [typeOfEmployee, setTypeOfEmployee] = useState(user.typeOfEmployee);
  const [role, setRole] = useState(user.role)
  const [contractStatus, setContractStatus] = useState(user.contractStatus);
  const logoutHandler = () => {
    dispatch<any>(logout());
  };
   const imageHandler = async () => {
    const myForm = new FormData() 
    myForm.append("avatar", {
      uri: avatar ,
      type: mime.getType(avatar),
      name: avatar.split("/").pop()
    })
    console.log (myForm)
    await dispatch<any>(updateAvatar(myForm))
    dispatch<any>(loadUser())
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
    imageHandler()
  };
  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    //Permissions.askAsync (Permissions.CAMERA_ROLL)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });


    if (!result.cancelled) {
      setAvatar(result.uri);
    }
    imageHandler()
  };

  const addAvatar = () => {
    Alert.alert(
      "Thay đổi ảnh đại diện",
      "Bạn có muốn thay đổi ảnh đại diện không?",
      [
        {
          text: "Chụp ảnh",
          onPress: takeImage,
        },
        {
          text: "Chọn ảnh",
          onPress: pickImage,
        },
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hang}>
        <Avatar
          size={70}
          rounded
          source={{ uri: avatar }}
          containerStyle={{ backgroundColor: "orange" }}
          onPress={() => addAvatar()}
        ></Avatar>
        <View>
          <TextInput style={styles.user} placeholder="Username" value = {userName} />
          <TextInput style={styles.user} placeholder=" vị trí" value = {role} />
        </View>
      </View>
      {/* tạo kẻ ngang */}
      <View style={styles.kengang} />

      <View>
        <Text style={styles.text}>Thông tin cá nhân</Text>
        <View style={styles.hang}>
          <Icon
            name="envelope-square"
            size={40}
            //color={Color_Icon.options}
            color="#f49218"
            style={styles.icon}
          />
          <View style={styles.cot}>
            <TextInput
              style={styles.user}
              keyboardType="email-address"
              placeholder="abc@gmail.com"
              returnKeyType="done"
              maxLength={60}
              value={email}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}> Email </Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="phone-square"
              size={40}
              color="#f49218"
              style={styles.icon}
            />
            <View>
              <TextInput
                style={styles.user}
                keyboardType="number-pad"
                placeholder="+84 987 654 321"
                returnKeyType="done"
                maxLength={12}
                value={numberPhone}
                secureTextEntry={false}
                //onChangeText={setUserName}
              />
              <Text style={styles.user}> Số điện thoại </Text>
            </View>
          </View>
        </View>
      </View>
      {/* tạo kẻ ngang */}
      <View style={styles.kengang} />
      <View>
        <Text style={styles.text}>Thông tin công việc</Text>
        <View style={styles.hang}>
          <Icon
            name="github-square"
            size={35}
            color="#f49218"
            style={styles.icon}
          />
          <View>
            <TextInput
              style={styles.user}
              keyboardType="number-pad"
              placeholder="1234"
              returnKeyType="done"
              maxLength={4}
              value={userId}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}>Mã nhân viên </Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.hang}>
          <Icon
            name="steam-square"
            size={40}
            color="#f49218"
            style={styles.icon}
          />
          <View>
            <TextInput
              style={styles.user}
              keyboardType="default"
              placeholder="01/01/2022"
              returnKeyType="done"
              maxLength={10}
              value={date}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}>Ngày bắt đầu làm việc </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.hang}>
          <Icon
            name="reddit-square"
            size={40}
            color="#f49218"
            style={styles.icon}
          />
          <View>
            <TextInput
              style={styles.user}
              keyboardType="default"
              placeholder="Đang làm việc/Đã nghỉ"
              returnKeyType="done"
              maxLength={100}
              value={contractStatus}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}>Trạng thái hợp đồng </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.hang}>
          <Icon
            name="snapchat-square"
            size={40}
            color="#f49218"
            style={styles.icon}
          />
          <View>
            <TextInput
              style={styles.user}
              keyboardType="default"
              placeholder="Nhân viên chính thức/ thử việc/ TTS"
              returnKeyType="done"
              maxLength={100}
              value={typeOfEmployee}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}>Loại hình nhân sự </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.hang}>
          <Icon
            name="xing-square"
            size={40}
            color="#f49218"
            style={styles.icon}
          />
          <View>
            <TextInput
              style={styles.user}
              keyboardType="default"
              placeholder="123AB - 456CD- 789EF"
              returnKeyType="done"
              maxLength={100}
              //value={userName}
              secureTextEntry={false}
              //onChangeText={setUserName}
            />
            <Text style={styles.user}>Device ID </Text>
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
          onPress={() => navigation.navigate("Cài lại mật khẩu")}
        >
          <Text style={styles.chu}>Thay đổi mật khẩu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logoutHandler}>
          <Text style={styles.chu1}> Đăng xuất </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;