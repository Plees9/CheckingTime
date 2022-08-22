import React, { useState, useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { queryUser } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import createStyles from "./styles_filterStaff";
import Contributor_Add_Task from "./Contributor_Add_Task";
import Icon from "react-native-vector-icons/FontAwesome";


const Filter_All = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const route = useRoute();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
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
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop2}>Nhân sự tham gia: </Text>
        <View style={styles.boder_nhansu}>
        <View style={styles.icon_add_task}>
            <Icon
              name="search"
              size={20}
              color="#8f73f6"
              style={styles.icon3}
            />
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
        
        <ScrollView style={styles.filter_nhansuthamgia}>
            {allUser &&
              allUser.array.map((item: any) => (
                <Contributor_Add_Task key={item._id} item={item} />
              ))}
          </ScrollView>

        </View>
       
       
        <Text style={styles.textTop2}>Người quản lý:</Text>
        
       
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
    </View>
  );
};

export default Filter_All;
