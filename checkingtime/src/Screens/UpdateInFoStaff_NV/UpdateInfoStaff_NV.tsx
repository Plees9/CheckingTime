import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
  Alert,
  Platform,
  Modal,
  StyleSheet
} from "react-native";
import React, { useMemo, useState, useEffect, Component } from "react";
import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FONTS } from "../../../constants/theme";


import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import DateTimePicker from "@react-native-community/datetimepicker";
import InputModal from "../../component/InputModal";
import moment from "moment";
import { Avatar } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import mime from "mime";
import { loadAlluser, loadProfile, updateAdmin } from "../../../redux/action";

const data_privilege = [
  {label: "Người dùng", value: "Người dùng"},
  {label: "Quản lý", value: "Quản lý"},
  {label: "Quản trị viên", value: "Quản trị viên"},
]
const data_contractStatus = [
  { label: "Chính thức", value: "Chính thức" },
  { label: "Thử việc", value: "Thử việc" },
  { label: "Thực tập sinh", value: "Thực tập sinh" },
];
const data_typeOfEmployee = [
  { label: "Đang làm việc", value: "Đang làm việc" },
  { label: "Đã nghỉ việc", value: "Đã nghỉ việc" },
  { label: "Nghỉ có phép", value: "Nghỉ có phép" },
  { label: "Nghỉ không phép", value: "Nghỉ không phép" },
];
const data_gender = [
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
];
const data_role = [
  { label: "Developer", value: "Developer" },
  { label: "Tester", value: "Tester" },
  { label: "Quản lý", value: "Quản lý" },
  { label: "Giám đốc", value: "Giám đốc" },
  { label: "Hành chính", value: "Hành chính" },
  { label: "Kế toán", value: "Kế toán" },
];

const UpdateStaff_Admin = () => {
  const styles = useMemo(() => createStyles(), []);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [date, setDate] = useState(moment());
  const [userId, setUserId] = useState("")
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("") 
  const [show, setShow] = useState(false);
  const [value_privilege, setValue_Privilege] = useState("")
  const [value_contractStatus, setValue_contractStatus] = useState("");
  const [value_typeOfEmployee, setValue_typeOfEmployee] = useState("");
  const [value_role, setValue_role] = useState("");
  const [isFocus_privilege, setisFocus_privilege] = useState(false)
  const [isFocus_contractStatus, setIsFocus_contractStatus] = useState(false);
  const [isFocus_typeOfEmployee, setIsFocus_typeOfEmployee] = useState(false);
  const [isFocus_role, setIsFocus_role] = useState(false);
  const [visible,setVisible] = useState(false)
  const route = useRoute()
  let { message, error, isUpdated } = useSelector<any, any>((state) => state.message);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch()
  const [country, setCountry] = useState("Unknown");
  function showToast() {
    ToastAndroid.show("Đã update thông tin thành công ", ToastAndroid.SHORT);
  }
  if (message == "Profile updated successfully") {
    navigation.navigate("DANH SÁCH NHÂN VIÊN")
  }
  useEffect(() => {
    if (route.params) {
      if (route.params._id) {
        setUserId(route.params._id)
      }
      if (route.params.name_1) {
            setUserName(route.params.name_1)
      }
      if (route.params.avatar_1) {
        setAvatar(route.params.avatar_1)
      }
      if (route.params.email_1) {
          setEmail(route.params.email_1)
      }
      if (route.params.numberPhone_1) {
        setNumberPhone(route.params.numberPhone_1)
      }
      if (route.params.date_1) {
        setDate(moment(route.params.date_1, "DD/MM/YYYY"))
      }
      if (route.params.role_1) {
        setValue_role(route.params.role_1)
      }
      if (route.params.privilege_1) {
        setValue_Privilege(route.params.privilege_1)
      }
      if (route.params.typeOfEmployee_1) {
        setValue_contractStatus(route.params.typeOfEmployee_1)
      }
      if (route.params.contractStatus_1) {
        setValue_typeOfEmployee(route.params.contractStatus_1)
      }
    }

  }, [route]);
  const UpdateInfoConfirm = async () => {
    Alert.alert(
      "Cập nhật thông tin",
      "Bạn có chắc chắn muốn cập nhật thông tin không?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed" ),
          style: "cancel",
        },
        { text: "Đồng ý", onPress: () => {
          prompt();
          showToast();
        }
        },
      ],

    );
  }
  const updateHandler = async () => {
    const myForm = new FormData();
    const Sdate = moment(date)
    myForm.append("_id", userId)
    myForm.append("name", userName)
    myForm.append("email", email)
    myForm.append("phoneNumber", numberPhone)
    myForm.append("startWorkingDate", String(Sdate)) 
    myForm.append("contractStats", value_typeOfEmployee)
    myForm.append("typeOfEmployee", value_contractStatus)
    myForm.append("role", value_role) 
    myForm.append("privilege", value_privilege)
    myForm.append("password", password)
    await dispatch<any>(updateAdmin(myForm))
    setVisible(false)
  }

  useEffect(() => {
    if (message) {
      alert(message);
      
      dispatch({ type: "clearMessage" });
    }   
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
    if (isUpdated) {
        dispatch <any>(loadAlluser());
    }
  }, [alert, dispatch, error, isUpdated]);
  


  return (
    <View style={styles.view}>
      <View style={styles.avatar}>
        <Avatar
          size={80}
          rounded
          source={{ uri: avatar }}
        >
        </Avatar>
      </View>
      <View style={styles.textuserName}>
        
        <TextInput
          placeholder={"Họ và tên"}
          style={styles.text23_1}
          returnKeyType="done"
          value={userName}
          secureTextEntry={false}
          onChangeText={setUserName}
        ></TextInput>
        
        <Icon name="edit" size={20} color="black" style={styles.icon}></Icon>
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
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.row1}>
        
          <Pressable style={styles.row2} onPress={() => setShow(true)}>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <Text style={styles.textDate}>{date.format("DD/MM/YYYY")}</Text>
              {show && (
                <DateTimePicker
                  value={new Date(date.format("YYYY/MM/DD"))}
                  mode={"date"}
                  display="default"
                  onChange={(event, selectedDate) => {
                    setDate(moment(selectedDate));
                    setShow(false);
                  }
                  
                  }
                />
              )}
            </View>

            <Icon
              style={styles.styleIcon}
              name="briefcase"
              size={20}
              color="orange"
            />
          </Pressable>
          
        </View>

        {/* Tình trạng hợp đồng, Loại hình nhân viên */}

       
        <View style={styles.khoi_2}>
        <Dropdown
            style={styles.dropdown_1}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_role}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Vị trí"
            onFocus={() => setIsFocus_role(true)}
            onBlur={() => setIsFocus_role(false)}
            value={value_role}
            onChange={(item) => {
              setValue_role(item.value);
              setIsFocus_role(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_role ? "up" : "down"}
                size={20}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown_1}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_privilege}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Cấp quyền"
            onFocus={() => setisFocus_privilege(true)}
            onBlur={() => setisFocus_privilege(false)}
            value={value_privilege}
            onChange={(item) => {
              setValue_Privilege(item.value);
              setisFocus_privilege(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_role ? "up" : "down"}
                size={20}
              />
            )}
          />
        </View>
        <View style={styles.khoi_2}>
          <View>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_contractStatus}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Hợp đồng"
            onFocus={() => setIsFocus_contractStatus(true)}
            onBlur={() => setIsFocus_contractStatus(false)}
            value={value_contractStatus}
            onChange={(item) => {
              setValue_contractStatus(item.value);
              setIsFocus_contractStatus(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_contractStatus ? "up" : "down"}
                size={20}
              />
            )}
          />
          </View>
          
          <View>
          <Dropdown
            style={styles.dropdown_1}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_typeOfEmployee}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Loại hình..."
            onFocus={() => setIsFocus_typeOfEmployee(true)}
            onBlur={() => setIsFocus_typeOfEmployee(false)}
            value={value_typeOfEmployee}
            onChange={(item) => {
              setValue_typeOfEmployee(item.value);
              setIsFocus_typeOfEmployee(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name={isFocus_typeOfEmployee ? "up" : "down"}
                size={20}
              />
            )}
          />
          </View>
          
        </View>
      </View>
      
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#8f73f6", "#b5a4fc"]}
        style={styles.btn2}
      >
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.text22}>Cập nhật</Text>
        </TouchableOpacity>
      </LinearGradient>
     
      <Modal
        transparent={true}
        visible={visible}
        animationType='fade'
        onRequestClose={() => setVisible(false)}
        
      >
        <View style={styles1.container}>
          <View style={styles1.box}>
            <Text style={styles1.title}>Xác nhận mật khẩu</Text>

            <TextInput
              style={styles1.input_box}
              placeholder='Nhập mật khẩu'
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <View style={styles1.box_button}>
              
              <View style={styles1.cancel_button}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Text style={styles1.text_button}>
                    Hủy
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles1.confirm_button}>
                <TouchableOpacity onPress={updateHandler}>
                  <Text style={styles1.text_button}>
                    Xác nhận
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
export default UpdateStaff_Admin;
