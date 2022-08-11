import { Text, StyleSheet, View, ScrollView, Alert } from "react-native";
import React, { useMemo, useState } from "react";
import createStyles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Checkbox } from "react-native-paper";
import { FAB, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

const Todo_Admin = () => {
  const styles = useMemo(() => createStyles(), []);
  const [checked, setChecked] = useState(false);
  

  const [data, setData] = useState([
    {
      id: 1,
      task: "Task 1",
      checked: false,

    },
    {
      id: 2,
      task: "Task 2",
      checked: false,

    },
  ]);
  const trash = () => {
      Alert.alert("Thông báo", "Bạn có chắc chắn muốn xóa không?", [
         { text: "Hủy", style: "cancel" },
         { text: "Xóa", onPress: () => setData(data.filter((item) => item.id !== 1)) },
      ]);
   }
 

  const ItemRender = ({}) => (
    <View style={styles.render}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.view2}>
          <View style={styles.checkbox}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
          </View>
          <View style={styles.colomn}>
          <Text style={styles.task}>"Task cua ban"</Text>
          <Text style={styles.text1}>name</Text>

          </View>

          

          <Icon name="trash" color="#f49218" size={20} style={styles.trash} 
          onPress={() => trash()}
          />
          <Icon name="pencil" color="#f49218" size={20} style={styles.pencil}
          
          />
          
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <ScrollView style={styles.view}>
        <View style={styles.view1}>
          <Icon
            name="list"
            size={18}
            color="#f49218"
            style={styles.icon}
          ></Icon>
          <Text style={styles.text}>Task List:</Text>
        </View>
        <View style={styles.kengang}></View>
        <FlatList
          data={data}
          renderItem={ItemRender}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </ScrollView>
      <View style={styles.btnFab}>
        <FAB
          title="Save"
          size="small"
          onPress={() => Alert.alert("Add Task")}
        />
        <FAB
          title="Add Task"
          size="small"
          color="#FF8C32"
          style={styles.fab}
          onPress={() => Alert.alert("Add Task")}
        />
      </View>
    </View>
  );
};

export default Todo_Admin;
