import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const FormCreated = () => {
  const styles = useMemo(() => createStyles(), []);
  //const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.chu11}>Loại đơn</Text>
        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ phép năm</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ không lương</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ bản thân kết hôn</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ con kết hôn</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ tang</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn nghỉ sửa chấm công</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn làm thêm giờ</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn làm việc tại nhà</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>

        <View>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textDon}>Đơn công tác</Text>
            <Icon name="angle-right" size={20} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.kengang} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FormCreated;
