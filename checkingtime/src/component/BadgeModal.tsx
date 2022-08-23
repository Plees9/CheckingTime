import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Badge } from "react-native-elements";
import { FONTS } from "../../constants/theme";

const UserBadgeItem = ({}) => {
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
    <Badge value={<View style={{flexDirection:'row', margin:5}}>
        <Text style={{fontFamily:FONTS.vanSansBold, textAlign:"center", color:'#fff'}} >Cao Liên Quân</Text>
    <TouchableOpacity onPress={() => alert('chao')} >
    <Icon name="close" color={'#fff'} size={15} style={{marginLeft:5,alignSelf:'center'}}/>
    </TouchableOpacity></View>} 
    badgeStyle={{height:35
        }} />
    </View>
  );
};

export default UserBadgeItem;