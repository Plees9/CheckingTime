import {
  View,
  Text,
  ScrollView,
  Alert,
  SafeAreaView,
  FlatList,
  Platform,
  Linking,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import createStyles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteProfile, loadAlluser, loadProfile, queryUser } from "../../../redux/action";
import { SearchBar } from "react-native-elements";
import Loader from "../../navigation/Loader";
import Toast from "react-native-toast-message";
import UserBadgeItem from "../../component/BadgeModal";

const ListStaff  = () => {
  const styles = useMemo(() => createStyles(), []);
  const [search, setSearch] = useState("");
  const { message, error } = useSelector<any, any>((state) => state.message)
  const navigation = useNavigation<any>();
  const route = useRoute () 
  const {user} = useSelector<any, any>(state => state.auth)
  const dialCall = (numberPhone_1: any) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${numberPhone_1}`;
    } else {
      phoneNumber = `telprompt:${numberPhone_1}`;
    }
    Linking.openURL(phoneNumber);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(loadAlluser());
  }, []);
  const { allUser, loading } = useSelector<any, any>((state) => state.allUser);
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

  let data: any = [];
  const loadView = () => {
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      
      let object = {
        id: i + 1,
        _id: allUser.array[i]._id , 
        name_1: allUser.array[i].name,
        email_1: allUser.array[i].email,
        role_1: allUser.array[i].role,
        userId_1: allUser.array[i].userId,
        typeOfEmployee_1: allUser.array[i].typeOfEmployee,
        contractStatus_1: allUser.array[i].contractStatus,
        privilege_1 : allUser.array[i].privilege,
        date_1: moment(new Date(allUser.array[i].startWorkingDate)).format(
          "DD/MM/YYYY"
        ),
        date_Birth_1: moment(new Date(allUser.array[i].birth)).format(
          "DD/MM/YYYY"
        ),
        numberPhone_1: allUser.array[i].phoneNumber,
        gender_1: allUser.array[i].gender,
        avatar_1: allUser.array[i].avatar.url,
      };
      data.push(object);
    }
  }
}
loadView()
  const deleteHandler = async (_id : any) => {
    await dispatch<any>(deleteProfile(_id))
    dispatch<any>(loadAlluser());
    loadView()
  }
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
  const NumberPhone = (
    id: number,
    name_1: string,
    role_1: any,
    userID_1: any,
    typeOfEmployee_1: any,
    contractStatus_1: any,
    date_1: undefined,
    date_Birth_1: undefined,
    numberPhone_1: number,
    gender_1: any
  ) => {
    Alert.alert(
      "Số điện thoại của nhân viên " + name_1.toUpperCase(),
      "Là: " + numberPhone_1,
      [
        {
          text: "Cannel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Call",
          onPress: () => {
            dialCall(numberPhone_1);
          },
        },
      ]
    );
  };

  

  const Trash = (
    
    id: number,
    _id: any,
    name_1: string,
    role_1: any,
    userID_1: any,
    typeOfEmployee_1: any,
    contractStatus_1: any,
    date_1: undefined,
    date_Birth_1: undefined,
    numberPhone_1: number,
    gender_1: any
  ) => {
    Alert.alert(
      "Xóa nhân viên " + name_1.toUpperCase(),
      "Bạn có muốn xóa nhân viên không?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Xóa",
          onPress: () => {
            deleteHandler(_id)
          },
        },
      ]
    );
  };
  const Edit = async (
    
    id: number,
    _id: any,
    name_1: string,
    email_1: any ,
    role_1: any,
    userID_1: any,
    typeOfEmployee_1: any,
    contractStatus_1: any,
    privilege_1:any,
    date_1: undefined,
    date_Birth_1: undefined,
    numberPhone_1: number,
    gender_1: any ,
    avatar_1: any
  ) => {
    navigation.navigate("Cập nhật thông tin nhân viên", { _id, name_1,email_1, role_1, typeOfEmployee_1, contractStatus_1, privilege_1, date_1, numberPhone_1, avatar_1 })
  };
  const ItemRender = ({
    id ,
    _id ,
    name_1,
    email_1,
    role_1,
    userID_1,
    typeOfEmployee_1,
    contractStatus_1,
    privilege_1 ,
    date_1,
    date_Birth_1,
    numberPhone_1,
    gender_1,
    avatar_1,
  } : any) => (
    <SafeAreaView style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
      {/* nhan vien  */}
      {/*  */}
      <View style={styles.view2}>
        <View style={styles.hang}>
          <View style={styles.avt}>
            <Avatar size={50} rounded source={{ uri: avatar_1 }}></Avatar>
          </View>
          <View style={styles.khoiUser}>
            <Text style={styles.user}>{name_1}</Text>
            <Text style={styles.user}>{role_1}</Text>
          </View>
          <Icon
            name="phone"
            size={25}
            style={styles.iconPhone}
            onPress={() =>
              NumberPhone(
                id,
                name_1,
                role_1,
                userID_1,
                typeOfEmployee_1,
                contractStatus_1,
                date_1,
                date_Birth_1,
                numberPhone_1,
                gender_1
              )
            }
          />
        </View>
        <View style={styles.hang4}>
          <View style={styles.hang2}>
            <Text style={styles.view3}>{userID_1}</Text>
            <Text style={styles.view3_1}>{gender_1}</Text>
            <Text style={styles.view3_2}>{date_Birth_1}</Text>
          </View>
          <Icon
            name="trash"
            size={25}
            style={styles.trash}
            onPress={() => {if (user.privilege == "Quản trị viên") {
              Trash(
                id,
                _id,
                name_1,
                role_1,
                userID_1,
                typeOfEmployee_1,
                contractStatus_1,
                date_1,
                date_Birth_1,
                numberPhone_1,
                gender_1
              )
            }
              else {
                ToastAlertError("Bạn không có quyền truy cập tính năng này")
              }
              }}
          ></Icon>
          <Icon
            name="edit"
            size={25}
            style={styles.trash}
            onPress={() => {
              if (user.privilege == "Quản trị viên") {
                Edit(
                  id,
                  _id,
                  name_1,
                  email_1,
                  role_1,
                  userID_1,
                  typeOfEmployee_1,
                  contractStatus_1,
                  privilege_1,
                  date_1,
                  date_Birth_1,
                  numberPhone_1,
                  gender_1 ,
                  avatar_1
                )
              }
                else {
                  ToastAlertError("Bạn không có quyền truy cập tính năng này")
                }
                }}
          ></Icon>
        </View>
        <View style={styles.hang3}>
          <View style={styles.cot1}>
            <Text style={styles.textInfo}>Loại hình nhân sự</Text>
            <Text style={styles.text_role}>{typeOfEmployee_1}</Text>
          </View>
          <View style={styles.cot1}>
            <Text style={styles.textInfo}>Trạng thái hợp đồng</Text>
            <Text style={styles.text_role}>{contractStatus_1}</Text>
          </View>
        </View>
        <View style={styles.kengang} />
        <Text style={styles.text1}>Ngày bắt đầu làm việc: {date_1} </Text>
      </View>
    </SafeAreaView>
  );
  if (typeof allUser == "undefined") {
    return <Loader />
  }
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name="bars"
            size={20}
            onPress={() => {
              if (route.params) {
                let privilege = route.params.value_4;
                let typeOfEmployee = route.params.value_5;
                let role = route.params.value_6;
                let contractStatus = route.params.value_7;
                navigation.navigate("Bộ lọc", {
                  privilege,
                  typeOfEmployee,
                  role,
                  contractStatus,
                });
              } else {
                let privilege = "";
                let typeOfEmployee = "";
                let role = "";
                let contractStatus = "";
                navigation.navigate("Bộ lọc", {
                  privilege,
                  typeOfEmployee,
                  role,
                  contractStatus,
                });
              }
            }}
          />
        </View>
        <View style={styles.icon1}>
          <Icon name="search" size={20} style={styles.icon3} />

          <TextInput
            style={styles.text}
            placeholder="Tìm kiếm"
            returnKeyType="done"
            onChangeText={(text) => {
              if (route.params) {
                dispatch<any>(
                  queryUser(
                    text,
                    route.params.value_4,
                    route.params.value_5,
                    route.params.value_6,
                    route.params.value_7
                  )
                );
              } else {
                dispatch<any>(queryUser(text, "", "", "", ""));
              }
              setSearch(text);
            }}
            value={search}
          ></TextInput>
        </View>
        <View style={styles.iconPlus}>
          <Icon
            name="plus-circle"
            size={40}
            color="#8f73f6"
            onPress={() => {if (user.privilege == "Quản trị viên") {
              navigation.navigate("Thêm nhân viên")}
              else {
               ToastAlertError("Bạn không có quyền truy cập tính năng này")
              }
              }}
          />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemRender
            id={item.id}
            _id={item._id}
            name_1={item.name_1}
            email_1={item.email_1}
            role_1={item.role_1}
            userID_1={item.userId_1}
            typeOfEmployee_1={item.typeOfEmployee_1}
            contractStatus_1={item.contractStatus_1}
            privilege_1={item.privilege_1}
            date_1={item.date_1}
            date_Birth_1={item.date_Birth_1}
            numberPhone_1={item.numberPhone_1}
            gender_1={item.gender_1}
            avatar_1={item.avatar_1}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
      <Toast config={configToast} ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};
export default ListStaff;