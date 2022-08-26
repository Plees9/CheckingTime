import {
  View,
  Text,StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
  Modal
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useDispatch, useSelector } from "react-redux";
//import CustomDatePicker from "../Moment/DatePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Avatar } from "@rneui/themed";
import { FONTS } from "../../../constants/theme";

import { loadUser, updateProfile } from "../../../redux/action";
import mime from "mime";
import Toast from "react-native-toast-message";
const data_2 = [
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
];

const UpdateStaff = () => {
  const { user, loading } = useSelector<any, any>((state) => state.auth);
  const styles = useMemo(() => createStyles(), []);
  const [visible,setVisible] = useState(false)
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber);
  const [date_Birth, setDate_Birth] = useState(moment());
  
  const [address, setAddress] = useState(user.address);
  const route = useRoute();

  const [show_birth, setShow_birth] = useState(false);

  const [avatar, setAvatar] = useState(user.avatar.url);
  const [value_2, setValue_2] = useState(user.gender);
  const [isFocus_2, setIsFocus_2] = useState(false);
  const [count, setCount] = useState(0);
  const navigation = useNavigation<any>();
  let { message, error, isUpdated } = useSelector<any, any>((state) => state.message);
  
 
  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image)
      }
      if (route.params.date_Birth_1) {
        setDate_Birth(moment(route.params.date_Birth_1, "DD/MM/YYYY"))
      }
    }
  }, [route]);
  const updateHandler = async () => {
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
    const s_Date_Birth = moment(date_Birth)
    myForm.append("name", userName)
    myForm.append("email", email)
    myForm.append("password", password)
    myForm.append("phoneNumber", numberPhone)
    myForm.append("address", address)
    myForm.append("birth", String(s_Date_Birth))
    myForm.append("gender", value_2)
    await dispatch<any>(updateProfile(myForm))
    if (message == "Cập nhật tài khoản thành công") {
        await dispatch <any> (loadUser)
    }
  }
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
      navigation.navigate("UpdateStaff")
    }
    if (isUpdated) {
        dispatch <any>(loadUser());
    }
  }, [ToastAlertError,ToastAlertMessage, dispatch, error, isUpdated]);

  return (
    <View style={styles.view}>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          source={{ uri: avatar }}
          containerStyle={{ backgroundColor: "orange" }}
          onPress={() => navigation.navigate("Đổi ảnh đại diện")}
        ></Avatar>
      </View>
      <View style={styles.textuserName}>
        <Text style={styles.text23_1}>{userName}</Text>
      </View>
      <View>
        {/* Email */}
        <View style={styles.styleTT}>
          <View style={styles.text24}>
            <TextInput
              placeholder={"E-mail"}
              style={styles.text23}
              returnKeyType="done"
              value={email}
              secureTextEntry={false}
              onChangeText={setEmail}
            />
          </View>
        </View>
        {/* Số điện thoại */}
        <View>
          <View style={styles.styleTT}>
            <View style={styles.text24}>
              <TextInput
                placeholder={"Số điện thoại"}
                style={styles.text23}
                keyboardType={"number-pad"}
                returnKeyType="done"
                value={numberPhone}
                secureTextEntry={false}
                onChangeText={setNumberPhone}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.styleTT}>
            <View style={styles.text24}>
              <TextInput
                placeholder={"Địa chỉ"}
                style={styles.text23}
                returnKeyType="done"
                value={address}
                secureTextEntry={false}
                onChangeText={setAddress}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.row1}>
          <Pressable style={styles.row2} onPress={() => setShow_birth(true)}>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <Text>{date_Birth.format("DD/MM/YYYY")}</Text>
              {show_birth && (
                <DateTimePicker
                value={new Date(date_Birth.format("YYYY/MM/DD"))}
                  mode={"date"}
                  display="default"
                  onChange={(event, selectedDate) => {
                    setDate_Birth(moment(selectedDate));
                    setShow_birth(false);
                  }}
                />
              )}
            </View>

            <Icon
              style={styles.styleIcon}
              name="birthday-cake"
              size={20}
              color="orange"
            />
          </Pressable>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_2}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Giới tính"
            onFocus={() => setIsFocus_2(true)}
            onBlur={() => setIsFocus_2(false)}
            value={value_2}
            onChange={(item) => {
              setValue_2(item.value);
              setIsFocus_2(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_2 ? "up" : "down"}
                size={20}
              />
            )}
          />
        </View>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#8f73f6", "#8f73f6"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.text22}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles1.container}>
          <View style={styles1.box}>
            <Text style={styles1.title}>Xác nhận mật khẩu</Text>

            <TextInput
              style={styles1.input_box}
              placeholder="Nhập mật khẩu"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <View style={styles1.box_button}>
              <View style={styles1.cancel_button}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Text style={styles1.text_button}>Hủy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles1.confirm_button}>
                <TouchableOpacity onPress={updateHandler}>
                  <Text style={styles1.text_button}>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "center",
    alignItems: "center",
  },
  box_button: {
    width: '100%',
    flex: 1,
    flexDirection: "row",
    alignItems:'center',
    borderRadius: 8,
  },
  confirm_button: {
    marginHorizontal:10,
    height: 30,
    width: 60,
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: "#716DF2",
    flex :1,
  },
  cancel_button: {
    marginHorizontal:10,
    height: 30,
    width: 60,
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: "#cccccc",
    flex :1,
  },
  box: {
    height: 150,
    width: 280,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input_box: {
    justifyContent :"center",
    marginTop :15,  
    fontFamily : FONTS.vanSansLight,
   fontSize :14,

    width: '85%',
    

  },
  title: {
    marginTop: 10, 
    alignItems: "center",
    fontSize :16,
    fontFamily : FONTS.vanSansSemiBoldItalic,
  },
  text_button: {
    alignSelf: "center",
    fontSize :13,
    fontFamily : FONTS.vanSansMediumItalic,
  },
    
  
});


export default UpdateStaff;