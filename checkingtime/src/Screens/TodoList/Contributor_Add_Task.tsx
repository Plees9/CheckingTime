import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Avatar } from "@rneui/themed";
import { Checkbox } from 'react-native-paper'
import createStyles from './styles'

const Contributor_Add_Task = ( {item, userList, setUserList, userName, setUserName} : any) => {
    const addUserHandler = (_id : any, name : any) => {
      if (userList.includes(_id)) {
        return;
      }
      let object = {
        _id: _id ,
        name: name
      }
      setUserList([...userList, _id]);
      setUserName([...userName, object])
    }
    const [completed, setCompleted] = useState(false);
    const styles = useMemo(() => createStyles(), []);
    return (
      <TouchableOpacity onPress={() => {addUserHandler(item._id, item.name)}}>
        <View style={styles.view_addTask}>
        
          <View style={styles.view_btn_add_task}>
          <Avatar
            size={35}
            rounded
            source={{ uri: item.avatar.url }}
            containerStyle={{ backgroundColor: "orange" }}
          />
            <View style={styles.colomn}>
            <Text style={styles.text1}>{item.name} </Text>
            <Text style={styles.text1}>Mã nhân viên: {item.userId}</Text> 
              
            </View>
  
          </View>
          <View style={{  marginTop:5,borderBottomColor: "gray",
      borderBottomWidth: 0.5,
      }}></View>
        
      </View>
      </TouchableOpacity>
    );
    }  

export default Contributor_Add_Task;
