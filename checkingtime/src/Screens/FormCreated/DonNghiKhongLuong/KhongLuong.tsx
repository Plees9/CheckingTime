import { View, Text, Button, Alert } from "react-native";
import React, { useMemo } from "react";
import createStyles from "../styles";

const KhongLuong = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.views}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Mô tả đơn</Text>
        <Text style={styles.text2}>
          Sử dụng trong trường hợp nhân viên xin nghỉ không tính công. Mục đích
          của đơn này là để thông báo cho các bên liên quan về việc xin nghỉ của
          nhân viên, nhằm đảm bảo truyền đạt thông tin và tiến độ công việc.
        </Text>
        <Text style={styles.text1}>Quy định đơn</Text>
        <Text style={styles.text2}>Loại đơn này chưa có quy định!</Text>
      </View>
      <View style={styles.btn}>
        <Button
          title={"Tạo đơn ngay"}
          color="#7858A6"
          onPress={() => Alert.alert("HomeScreen")}
        />
      </View>
    </View>
  );
};

export default KhongLuong;
