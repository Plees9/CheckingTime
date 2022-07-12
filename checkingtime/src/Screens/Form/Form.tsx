import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
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
  <View>
    <View>
      <Text>Form</Text>
    </View>
    <View>
      <Text style={styles.text}>Mô tả đơn</Text>
      <Text style={styles.text}>...</Text>
      <Text style={styles.text}>Quy định đơn</Text>
      <Text style={styles.text}>...</Text>
    </View>
  </View>;
};
export default Form;
