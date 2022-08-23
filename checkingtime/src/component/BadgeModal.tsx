import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Badge } from "react-native-elements";
import { FONTS } from "../../constants/theme";

const UserBadgeItem = ({item, userList, setUserList, userName, setUserName} : any) => {
  const handleDelete = (item :any) => {
    userName = userName.filter(function(element: any){
      return element._id !== item._id;
    })
    userList = userList.filter(function(element: any){
      return element !== item._id;
    })
      setUserName(userName)
      setUserList(userList)
  };
  return (
    <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",}}>
    <Badge value={<View style={{flexDirection:'row',  margin:5}}>
        <Text style={{fontFamily:FONTS.vanSansBold, textAlign:"center", color:'#fff'}} >{item.name} {''} </Text>
    <TouchableOpacity onPress={() => handleDelete(item)} >
    <Icon name="close" color={'#fff'} size={15} style={{marginLeft:5,alignSelf:'center'}}/>
    </TouchableOpacity></View>} 
    badgeStyle={{height:35, backgroundColor:"#8f73f6", flexDirection:'row', 
        }} />
    </View>
  );
};

export default UserBadgeItem;