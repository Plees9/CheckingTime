import React, { useState } from "react";
import { Button, TouchableHighlight, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <TouchableHighlight
      activeOpacity={0}
      onPress={showDatePicker}
       >
        <Text> {moment().format('YYYY-MM-DD')}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default DateTimePicker;