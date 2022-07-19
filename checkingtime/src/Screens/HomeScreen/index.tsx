import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View>
        {/* <ImageBackground
          source={require("../../../assets/images/tim.jpg")}
          style={styles.imagebgr}
        > */}
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <View style={styles.row}>
            <Icon name="user" size={26} color="#7445f6" style={styles.icon} />
            <Text style={styles.text1}> Xin chao, "userName"</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.icon2}>
            <Text style={styles.text}>Nhật ký hôm nay</Text>
            <View>
              <View style={styles.textIcon23}>
                <Icon
                  name="check"
                  size={18}
                  color="#7445f6"
                  style={styles.boder}
                />
                <Text style={styles.text2}> Checkin: </Text>
                <Text style={styles.text4}>N/A</Text>
              </View>
              <View style={styles.textIcon23}>
                <Icon
                  name="dedent"
                  size={18}
                  color="#7445f6"
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
                  color="#7445f6"
                  style={styles.boder}
                />
                <Text style={styles.text2}> Xếp hạng:</Text>
                <Text style={styles.text3}>N/A</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate("InfoScreen")}>
            <View style={styles.btn1}>
              <Icon
                name="building"
                size={18}
                color="#7445f6"
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

        <View style={styles.row1}>
          <View style={styles.view}>
            <Text style={styles.text7}>Top 5 hôm nay</Text>
          </View>
        </View>

        {/* </ImageBackground> */}
      </View>
    </View>
  );
};

export default HomeScreen;
