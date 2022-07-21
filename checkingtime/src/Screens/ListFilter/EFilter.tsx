import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const EFilter = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <ScrollView style={styles.viewbgr}>
      <View style={styles.view}>
        {/* <Text style={styles.textWelcome}>Thay đổi mật khẩu</Text> */}

        <Text style={styles.textTop}> Phòng ban</Text>

        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả phòng ban" value="tatca" />
            <Picker.Item label="Giám đốc" value="1" />
            <Picker.Item label="Nhân sự" value="2" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Vị trí công việc</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả vị trí công việc" value="tat ca" />
            <Picker.Item label="Giám đốc" value="3" />
            <Picker.Item label="Hành chính" value="4" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Trạng thái nhân sự</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả trạng thái " value="tat" />
            <Picker.Item label="Đang làm việc" value="j" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Loại hình nhân sự</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả loại hình" value="l" />
            <Picker.Item label="Chính thức" value="s" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Trạng thái hoạt động</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả trạng thái " value="a" />
            <Picker.Item label="Đang làm việc" value="js" />
          </Picker>
        </View>

        <Text style={styles.textTop2}> Trạng thái sử dụng</Text>
        <View style={styles.style}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Tất cả trạng thái " value="v" />
            <Picker.Item label="Đã sử dụng" value="8" />
          </Picker>
        </View>

        {/* <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate("ListStaff")}
        >
          <Text style={styles.text22}>Xác nhận</Text>
        </TouchableOpacity> */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#7F00FF", "#E100FF"]}
          style={styles.btn2}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("DANH SÁCH NHÂN VIÊN")}
          >
            <Text style={styles.text22}>Xác nhận</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default EFilter;
