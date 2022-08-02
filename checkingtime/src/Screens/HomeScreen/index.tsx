import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Alert, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import { FAB, Input } from "react-native-elements";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState("");

  //const [isCheckin, setIsCheckin] = useState(false);

  const pressHandler = () => {
    ToastAndroid.show("Bạn" + " " + userName + " " + "đã chấm công!", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Tài khoản")}>
          <View style={styles.row}>
            <Icon name="user" size={26} color="#f49218" style={styles.icon} />
            <Text style={styles.text1}>
              {" "}
              Xin chào, {userName}
            </Text>
          </View>

        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <View style={styles.icon2}>
            <Text style={styles.text}>Nhật ký hôm nay</Text>
            <View>
              <View style={styles.textIcon23}>
                <Icon
                  name="check"
                  size={18}
                  color="#f49218"
                  style={styles.boder}
                />
                <Text style={styles.text2}> Checkin: </Text>
                <Text style={styles.text4}>N/A</Text>
              </View>
              <View style={styles.textIcon23}>
                <Icon
                  name="dedent"
                  size={18}
                  color="#f49218"
                  style={styles.boder}
                />
                <Text style={styles.text2}> Checkout:</Text>
                <Text style={styles.text3}>N/A</Text>
              </View>
              <View style={styles.kengang} />
              <View style={styles.textIcon23}>
                <Icon
                  name="line-chart"
                  size={18}
                  color="#f49218"
                  style={styles.boder}
                />
                <Text style={styles.text2}> Xếp hạng:</Text>
                <Text style={styles.text3}>N/A</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Thông tin Công Ty")}
          >
            <View style={styles.btn1}>
              <Icon
                name="building"
                size={18}
                color="#f49218"
                style={styles.icon1}
              />
              <Text style={styles.text5}>Thông tin Công Ty</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("image clicked")}>
            <View style={styles.btn1}>
              <Text style={styles.text6}> Công Tháng</Text>
              <View style={styles.vongtron}></View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <Text style={styles.text7}>Top 5 hôm nay</Text>
          <View style={styles.avt}>
            <Avatar
              size={60}
              rounded
              source={{
                uri: "https://image2.tin247.news/pictures/2021/09/23/bcd1632409191.jpg",
              }}
            ></Avatar>
          </View>

          <View style={styles.row1}>
            <Text style={styles.textInfo}>stt"1"</Text>
            <Text style={styles.textInfo}>userName</Text>
            <Text style={styles.textInfo}> Time checkin</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.textInfo}>stt"2"</Text>
            <Text style={styles.textInfo}>userName</Text>
            <Text style={styles.textInfo}> Time checkin</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.textInfo}>stt"1"</Text>
            <Text style={styles.textInfo}>userName</Text>
            <Text style={styles.textInfo}> Time checkin</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.textInfo}>stt"1"</Text>
            <Text style={styles.textInfo}>userName</Text>
            <Text style={styles.textInfo}> Time checkin</Text>
          </View>
        </View>
      </View>
      <FAB
        // onPress={() => {
        //   setIsCheckin(!isCheckin);
        //   {
        //     isCheckin == true
        //       ? Alert.alert("Checkin thành công")
        //       : Alert.alert("Checkout thành công");
        //   }
        // }}
        // title={isCheckin ? "Checkin" : "Checkout"}
        // color={isCheckin ? "#FF8C32" : "#F55353"}
        title="Chấm công"
        placement="right"
        size="small"
        color="#FF8C32"
        buttonStyle={styles.fab}
        onPress={pressHandler}
      />
    </View>
  );
};

export default HomeScreen;
