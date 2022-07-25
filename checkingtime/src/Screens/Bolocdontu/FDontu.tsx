import React, { useState, useMemo } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,

  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CustomDatePicker from "../Moment/DatePicker";
import { LinearGradient } from "expo-linear-gradient";

const FDontu = () => {
  const navigation = useNavigation<any>();
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [date, setDate] = useState("09-10-2020");

  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Loại đơn từ</Text>

        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả đơn từ" value="đơn từ" />

            <Picker.Item label="Đơn nghỉ bản thân kết hôn" value="1" />
            <Picker.Item label="Đơn nghỉ con kết hôn" value="2" />
            <Picker.Item label="Đơn nghỉ tang" value="3" />
            <Picker.Item label="Đơn nghỉ phép năm" value="4" />
            <Picker.Item label="Đơn nghỉ phép năm trước" value="5" />
            <Picker.Item label="Đơn nghỉ không lương" value="6" />
            <Picker.Item label="Đơn làm theo giờ" value="7" />
            <Picker.Item label="đơn work from home" value="8" />
            <Picker.Item label="Đơn sửa chấm công" value="9" />
            <Picker.Item label="Đơn công tác" value="10" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Trạng thái đơn từ</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả trạng thái" value="tat ca" />
            <Picker.Item label="Chờ xử lý" value="1" />
            <Picker.Item label="Đang xử lý" value="2" />
            <Picker.Item label="Đã từ chối" value="3" />
            <Picker.Item label="Đã phê duyệt" value="4" />
            <Picker.Item label="Đã huỷ" value="5" />
            <Picker.Item
              label="Hệ thống huỷ đơn do lịch làm việc không còn phù hơp"
              value="6"
            />
            <Picker.Item
              label="Hệ thống huỷ đơn do quá hạn chốt đơn"
              value="7"
            />
          </Picker>
        </View>

        <Text style={styles.textTop2}>Chi nhánh</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả chi nhánh" value="tat" />
          </Picker>
        </View>

        <View style={styles.calendar}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textTop2}> Thời gian tạo</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: "3%",
                marginLeft: "8%",
                marginRight: "8%",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: 10,

                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <CustomDatePicker
                defaultDate={new Date()}
                onDateChange={(value: any) => console.log(value)}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text> - </Text>
              </View>
              <CustomDatePicker
                defaultDate={new Date()}
                onDateChange={(value: any) => console.log(value)}
              />
            </View>

            <Text style={styles.textTop2}> Thời gian áp dụng</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: "3%",
                marginLeft: "8%",
                marginRight: "8%",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: 10,

                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <CustomDatePicker
                defaultDate={new Date()}
                onDateChange={(value: any) => console.log(value)}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text> - </Text>
              </View>
              <CustomDatePicker
                defaultDate={new Date()}
                onDateChange={(value: any) => console.log(value)}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 50,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#7F00FF", "#E100FF"]}
                style={styles.btn2}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Đơn từ")}
                >
                  <Text style={styles.text22}>Xác nhận</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FDontu;
