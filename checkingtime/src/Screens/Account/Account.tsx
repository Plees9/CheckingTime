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
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadUser, updateAvatar } from "../../../redux/action";
import * as ImagePicker from "expo-image-picker";
import mime from "mime"
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

const Account = () => {
  const { user, loading } = useSelector<any, any>(state => state.auth)
  const styles = useMemo(() => createStyles(), []);
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();
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
  const { message, error } = useSelector<any, any>((state) => state.message);
   const imageHandler =  async () => {
    const myForm = new FormData() 
    myForm.append("avatar", JSON.parse(JSON.stringify({
      uri: avatar ,
      type: mime.getType(avatar),
      name: avatar.split("/").pop()
    })) )
    console.log (myForm)
    await dispatch<any>(updateAvatar(myForm))
    //dispatch<any>(loadUser())

  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });
    console.log(result)
    if (!result.cancelled) {
      setAvatar(result.uri);
      imageHandler()
    }

    ////navigation.navigate("Account")
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
      imageHandler()
    }
    
    //navigation.navigate("Account");
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
  
  useEffect(() => {
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [alert, dispatch, error]);

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
          <Text style={styles.user}>{userName}</Text>
          <Text style={styles.user_1}>{role}</Text>
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
            <Text style={styles.user}> Email </Text>
            <Text style={styles.user_1}>{email}</Text>
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
              <Text style={styles.user}> Số điện thoại </Text>
              <Text style={styles.user_1}>{numberPhone} </Text>
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
            <Text style={styles.user}>Mã nhân viên </Text>
            <Text style={styles.user_1}>{userId}</Text>
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
            <Text style={styles.user}>Ngày bắt đầu làm việc </Text>
            <Text style={styles.user_1}>{date}</Text>
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
            <Text style={styles.user}>Trạng thái hợp đồng </Text>
            <Text style={styles.user_1}>{contractStatus}</Text>
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
            <Text style={styles.user}>Loại hình nhân sự </Text>
            <Text style={styles.user_1}>{typeOfEmployee}</Text>
          </View>
        </View>
      </View>
      <View></View>

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