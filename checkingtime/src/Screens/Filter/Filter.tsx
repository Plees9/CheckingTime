import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker }  from "@react-native-picker/picker";

 


const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
        <View style= {{flexDirection: "row"}}>
            
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 ,borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default Filter;
