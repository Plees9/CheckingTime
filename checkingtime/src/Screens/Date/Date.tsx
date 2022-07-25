import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import createStyles from "./styles";
// import DatePicker from "react-native-datepicker";

const Dates = () => {
  const styles = useMemo(() => createStyles(), []);
  const [selectedValue, setSelectedValue] = useState("");
  const [date, setDate] = useState("09-10-2020");

  
  return (
    <View style={styles.viewbgr}>
      <View style={styles.view}>
       
        <Text style={styles.textTop}> Mật khẩu hiện tại</Text>
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
        <Text style={styles.textTop}> Mật khẩu hiện tại</Text>
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
        <Text style={styles.textTop}> Xác nhận mật khẩu</Text>
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

     

        {/* <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}
      </View>
      <View style={styles.view1}>
        <Text> sadsadsa</Text>
      </View>
    </View>
  );
};

export default Dates;
