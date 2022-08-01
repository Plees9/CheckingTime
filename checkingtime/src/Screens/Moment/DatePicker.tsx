import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  Platform,
  TextInput,
} from "react-native";
import React, { useMemo, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";
import createStyles from "./styles";

const CustomDatePicker = (props: any) => {
  const styles = useMemo(() => createStyles(), []);

 
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

 
 

  const renderDatePicker = () => {
    return (
      <DateTimePicker
        mode="date"
        timeZoneOffsetInMinutes={0}
        value={date}
        
        
        
        is24Hour={true}
        display="default"

      
      
        // minimumDate={
        //   new Date(moment().subtract(120, "years").format("YYYY-MM-DD"))
        // }
        //maximumDate={new Date(3000, 12, 31)}
        //onChange={Platform.OS === "ios" ? onChange : onAndroidChange}
      />
    );
  };

  return (
    <View style={styles.flex}>
      <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
        <>
          <Text style={styles.datePicker}> {date.getDate}</Text>
          {Platform.OS !== "ios" && show && renderDatePicker()}

          {Platform.OS === "ios" && (
            <Modal
              transparent={true}
              visible={show}
              onRequestClose={() => setShow(false)}
              animationType={"slide"}
              supportedOrientations={["portrait"]}
            >
              <View style={styles.flex}>
                <TouchableHighlight
                  style={styles.style1}
                  activeOpacity={1}
                  onPress={() => setShow(false)}
                >
                  <TouchableHighlight
                    underlayColor={"#fff"}
                    style={{
                      flex: 1,
                      borderTopColor: "#E9E9E9",
                      borderTopWidth: 1,
                    }}
                    onPress={() => console.log("DatePicker")}
                  >
                    <View style={styles.style2}>
                      <View style={{ marginTop: 20 }}>
                        {renderDatePicker()}
                      </View>
                    </View>
                  </TouchableHighlight>
                </TouchableHighlight>
              </View>
            </Modal>
          )}
          {/*  */}
        </>
      </TouchableHighlight>
    </View>
  );
};
CustomDatePicker.defaultProps = {
  defaultDate: moment(),
  onDateChange: () => {},
};

export default CustomDatePicker;
