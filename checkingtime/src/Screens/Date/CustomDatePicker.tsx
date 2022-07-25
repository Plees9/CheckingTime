import { View, Text, TouchableHighlight, Modal } from "react-native";
import React, { useMemo, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";
import createStyles from "./styles";

const CustomDatePicker = (props: any) => {
  const styles = useMemo(() => createStyles(), []);

  const{defaultDate} = props;
  const [date, setDate] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (e: any, selectedDate: moment.MomentInput) => {
    setDate(moment(selectedDate));
  };
  const onCancelPress = () => {
    setDate(moment(defaultDate));
    setShow(false);
  }
  const onDonePress = () => {
    props.onChange(date);
    setShow(false);
  }

  return (
    
    <View style={styles.flex}>
      <Text>Pickker</Text>
      <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
        <View>
          <Text style={styles.datePicker}> {date.format("MMMM DD, YYYY")}</Text>
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
                //visible={show}
                onPress={() => setShow(false)}
              >
                <TouchableHighlight
                  underlayColor={"#fff"}
                  style={{
                    flex: 1,
                    borderTopColor: "#E9E9E9",
                    borderTopWidth: 1,
                  }}
                  onPress={() => console.log("asadd")}
                >
                  <View style={styles.style2}>
                    <View style={{ marginTop: 20 }}>
                      <DateTimePicker
                        mode="date"
                        timeZoneOffsetInMinutes={0}
                        value={new Date(date.format())}
                        minimumDate={new Date(moment().subtract(120, "years").format("YYYY-MM-DD"))}
                        maximumDate={new Date(moment().format("YYYY-MM-DD"))}
                        onChange={onChange}
                      />
                    </View>
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      onPress={onCancelPress }
                      style={[styles.btnText, styles.btnCannel]}
                    >
                      <Text>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      onPress={onDonePress}
                      style={[styles.btnText, styles.btnDone]}
                    >
                      <Text>Done</Text>
                    </TouchableHighlight>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
    </View>
  );
};
CustomDatePicker.defaultProps = {
  date: moment(),
  defaultDate: moment(),
  onDateChange: () => {},
};

export default CustomDatePicker;
