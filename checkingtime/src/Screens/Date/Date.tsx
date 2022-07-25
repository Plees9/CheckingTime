import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity ,Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
import CustomDatePicker from "../Moment/DatePicker";

const Dates = () => {
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [date, setDate] = useState("09-10-2020");

  
  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
        <Text style={styles.textTop}> Loại đơn từ</Text>
        <Picker
          selectedValue={selectedValue}
          style={{
            borderWidth: 1,
            borderRadius: 10,

            alignItems: "center",
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={styles.textTop}>Trạng thái đơn từ </Text>
        <Picker
          selectedValue={selectedValue}
          style={{
            borderWidth: 1,
            borderRadius: 10,

            alignItems: "center",
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={styles.textTop}> Chi nhánh</Text>
        <Picker
          selectedValue={selectedValue}
          style={{
            borderWidth: 1,
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <View style={styles.calendar}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textTop}> Thoi gian tao</Text>

          <View
            style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}
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

          <Text style={styles.textTop}> Thoi gian ap dung</Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginBottom: 10,
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
            <Button

            title=" Lọc đơn từ "
            color="orange"
            onPress={() => Alert.alert("Đang xử lý")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dates;
