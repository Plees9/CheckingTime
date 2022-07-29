import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  Button,
} from "react-native";
import React, { useMemo, useEffect, useState } from "react";

import { Avatar } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "react-native-paper";
import { logout } from "../../../redux/action";

import { LinearGradient } from "expo-linear-gradient";

const Account = () => {
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch<any>(logout());
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={{ backgroundColor: "#f2f2f2", marginTop: 10 }}>
        <View
          style={{
            flexDirection: "column",

            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Avatar
            size={70}
            rounded
            source={{
              uri: "https://image2.tin247.news/pictures/2021/09/23/bcd1632409191.jpg",
            }}
            containerStyle={{ backgroundColor: "orange" }}
          >
            <Avatar.Accessory size={24} />
          </Avatar>

          <TextInput style={styles.user} placeholder="Username" />
          <TextInput style={styles.user} placeholder=" vị trí" />
        </View>

        <Picker
          selectedValue={selectedValue}
          style={styles.Touch1}
          mode="dropdown"
          itemStyle={styles.Touch1}
        >
          {/* <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={30} />
          </View> */}
          <Picker.Item label="Thông tin cá nhân" value="email" />
          <Picker.Item label="Email" value="email" />
          <Picker.Item label="Số điện thoại" value="phone" />
        </Picker>

        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={30} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Thông tin công việc</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={30} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Thay đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Touch1}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={30} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Thay đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Touch1} onPress={logoutHandler}>
          <View style={{ alignContent: "center" }}>
            <IconButton icon="calendar-account" color="#f49218" size={30} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>

        {/* tạo kẻ ngang */}

        {/* <View>
          <Text style={styles.text}>Thông tin cá nhân</Text>
          <View style={{ backgroundColor: "white" }}>
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
                  //value={userName}
                  secureTextEntry={false}
                  //onChangeText={setUserName}
                />
                <Text style={styles.user}> Email </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ marginTop: 5, backgroundColor: "white" }}>
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
                    //value={userName}
                    secureTextEntry={false}
                    //onChangeText={setUserName}
                  />
                  <Text style={styles.user}> Số điện thoại </Text>
                </View>
              </View>
            </View>
          </View>
          {/* tạo kẻ ngang */}
        {/* <View style={styles.kengang} />
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
                  //value={userName}
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
                  //value={userName}
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
                  //value={userName}
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
                  //value={userName}
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
          {/*  */}
        {/* <View>
            {/* tạo kẻ ngang */}
        {/* <View style={styles.kengang} />
            <View>
              <Text style={styles.text}>Lần đăng nhập cuối</Text>
              <View style={styles.hang}>
                <Icon
                  name="cube"
                  size={35}
                  color="#f49218"
                  style={styles.icon}
                />
                <View>
                  <TextInput
                    style={styles.user}
                    keyboardType="default"
                    placeholder="Tên thiết bị"
                    returnKeyType="done"
                    maxLength={4}
                    //value={userName}
                    secureTextEntry={false}
                    //onChangeText={setUserName}
                  />
                  <TextInput
                    style={styles.user}
                    keyboardType="default"
                    placeholder="18:01 - 01/01/2020"
                    returnKeyType="done"
                    maxLength={20}
                    //value={userName}
                    secureTextEntry={false}
                    //onChangeText={setUserName}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.khoangcach}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={styles.chu}>Thay đổi mật khẩu</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={logoutHandler}>
              <Text style={styles.chu1}> Đăng xuất </Text>
            </TouchableOpacity>
          </View>
        </View>   */}
      </ScrollView>
    </ScrollView>
  );
};

export default Account;
