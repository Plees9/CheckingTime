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
import React, { useMemo, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ListStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();

  const { user, loading } = useSelector<any, any>(state => state.auth)

  const [userName, setUserName] = useState(user.name); //name
  const [role, setRole] = useState(user.role); //vitri
  const [userId, setUserId] = useState(user.userId); //MaNV
  const [typeOfEmployee, setTypeOfEmployee] = useState(user.typeOfEmployee); //Loaihinhnhansu
  const [contractStatus, setContractStatus] = useState(user.contractStatus); //trangthaihopdong
  const [date, setDate] = useState(user.startWorkingDate); //ngayvaolam
  const [birth, setDate_Birth] = useState(user.birth); //ngaysinh
  const [numberPhone, setNumberPhone] = useState(user.phoneNumber); //sodienthoai
  const [gender, setGender] = useState(user.gender); //gioitinh
  const [avatar, setAvatar] = useState(user.avatar.url);

  const dialCall = (numberPhone_1: any) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${numberPhone_1}`; }
    else {phoneNumber = `telprompt:${numberPhone_1}`; }
    Linking.openURL(phoneNumber);
 };


  const [data, setData] = useState([
   
    {
      id: 1,
      name_1: userName,
      role_1: role,
      userId_1: userId,
      typeOfEmployee_1: typeOfEmployee,
      contractStatus_1: contractStatus,
      date_1: date,
      date_Birth_1: birth,
      numberPhone_1: numberPhone,
      gender_1: gender,
    },
   
   
  ]);

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
          }
          
        },
      ]
    );
  };

  const Trash = (
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
            const newData = data.filter((item) => item.id !== id);
            setData(newData);
          },
        },
      ]
    );
  };
  const ItemRender = ({
    id,name_1,role_1,userID_1,typeOfEmployee_1,contractStatus_1,date_1,date_Birth_1,numberPhone_1,gender_1,
  }) => (
    <View style={{ padding: 10, flex: 1 }}>
      {/* nhan vien  */}
      <ScrollView style={styles.view1}>
        {/*  */}
        <View style={styles.view2}>
          <View style={styles.hang}>
            <View style={styles.avt}>
              <Avatar
                size={50}
                rounded
                source={{ uri: avatar }}
              ></Avatar>
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
              onPress={() =>
                Trash(
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
            ></Icon>
          </View>

          <View style={styles.hang3}>
            <View style={styles.cot1}>
              <Text style={styles.textInfo}>Loại hình nhân sự</Text>
              <Text>{typeOfEmployee_1}</Text>
            </View>

            <View style={styles.cot1}>
              <Text style={styles.textInfo}>Trạng thái hợp đồng</Text>
              <Text>{contractStatus_1}</Text>
              
            </View>
          </View>
          <View style={styles.kengang} />
          <Text style={styles.text1}>Ngày bắt đầu làm việc: {date_1} </Text>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon
            name="bars"
            size={20}
            onPress={() => navigation.navigate("Bộ lọc")}
          />
        </View>
        <View style={styles.icon1}>
          <Icon name="search" size={20} style={styles.icon3} />
          <TextInput
            style={styles.text}
            placeholder="Tìm kiếm"
            returnKeyType="done"
          ></TextInput>
        </View>
        <View style={styles.iconPlus}>
          <Icon
            name="plus-circle"
            size={40}
            color="orange"
            onPress={() => navigation.navigate("Thêm nhân viên")}
          />
        </View>
      </View>
      <SafeAreaView>
        <View style={styles.view1}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ItemRender
                id={item.id}
                name_1={item.name_1}
                role_1={item.role_1}
                userID_1={item.userId_1}
                typeOfEmployee_1={item.typeOfEmployee_1}
                contractStatus_1={item.contractStatus_1}
                date_1={item.date_1}
                date_Birth_1={item.date_Birth_1}
                numberPhone_1={item.numberPhone_1}
                gender_1={item.gender_1}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ListStaff;
