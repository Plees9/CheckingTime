import React, { useState, useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { queryUser } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import createStyles from "./styles_filterStaff";

const data_Name_Task = [
  { label: "cv2", value: "Người dùng" },
  { label: "cv3", value: "Quản lý" },
  { label: "Quản trị viên", value: "Quản trị viên" },
];
const data_Contributor = [
  { label: "hehhe ", value: "1" },
  { label: "kkasa", value: "2" },
  { label: "asas", value: "Thực tập sinh" },
];
const data_WorkDone_All = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "Thực tập sinh", value: "Thực tập sinh" },
];

const Filter_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const route = useRoute();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [contributor, setContributor] = useState("");
  const [value_WorkDone, setValue_WorkDone] = useState("");
  const { allUser } = useSelector<any, any>((state) => state.allUser);

  let data: any = [];
  if (typeof allUser !== "undefined") {
    for (var i = 0; i < allUser.array.length; i++) {
      let object = {
        id: i + 1,
        name_1: allUser.array[i].name,
        contributor_1: allUser.array[i].contributor,
        workDone_1: allUser.array[i].workDone,
      };
      data.push(object);
    }
  }
  useEffect(() => {
    if (route.params) {
      setName(route.params.name);
      setContributor(route.params.contributor);
      setValue_WorkDone(route.params.workDone); // chua lam xong
    }
  }, [route]);
  console.log(route.params);
  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Công việc: </Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_Name_Task}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Chọn công việc"
            value={name}
            onChange={(item) => {
              setName(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <Text style={styles.textTop2}>Nhân sự tham gia: </Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_Contributor}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Chọn nhân sự tham gia"
            value={contributor}
            onChange={(item) => {
              setContributor(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <Text style={styles.textTop2}>Số công việc đã hoàn thành:</Text>
        <View style={styles.style}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_WorkDone_All}
            search
            maxHeight={300}
            searchPlaceholder="Search..."
            labelField="label"
            valueField="value"
            placeholder="Công việc đã hoàn thành"
            value={value_WorkDone}
            onChange={(item) => {
              setValue_WorkDone(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="orange"
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#8f73f6", "#8f73f6"]}
          style={styles.btn2}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch<any>(queryUser("", name, contributor, value_WorkDone));
              navigation.navigate("Tất cả", { name, contributor, value_WorkDone });
            }}
          >
            <Text style={styles.text22}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Filter_All;
