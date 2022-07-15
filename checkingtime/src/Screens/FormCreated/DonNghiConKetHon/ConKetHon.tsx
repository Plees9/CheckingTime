import { View, Text, Button, Alert } from "react-native";
import React, { useMemo } from "react";
import createStyles from "../styles";

const ConKetHon = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.views}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Mô tả đơn</Text>
        <Text style={styles.text2}>
          Loại đơn này để xin nghỉ vì lý do con đẻ/con nuôi kết hôn, nhân viên nghỉ hưởng nguyên lương tối đa 01 ngày, số ngày nghỉ không bị trừ vào số phép năm.
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

export default ConKetHon;
