import React from "react";
import { View, Text, Button, Alert } from "react-native";
import styles from "./styles";

const DATA = [
  {
    id: "1",
    title: "First Item",
    description: "This is the first item description",
  },
  {
    id: "2",
    title: "Second Item",
    description: "This is the second item description",
  },
  {
    id: "3",
    title: "Third Item",
    description: "This is the third item description",
  },
];

const Form = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <View>
        <View style={styles.header}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Form</Text>
        </View>
      </View>
      <View>
        <View style={{ backgroundColor: "lightblue", marginTop: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Mô tả đơn</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>Quy định đơn</Text>
            <Text style={styles.text}>...</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ justifyContent: "flex-end", backgroundColor: "pink" }}>
          <Button
            title="nhấn vào đây"
            color={"pink"}
            onPress={() => Alert.alert("Nhấn ok để tắt cửa sổ thông báo")}
          />
        </View>
      </View>
    </View>
  );
};
export default Form;
