import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Badge } from "react-native-elements";
import { FONTS } from "../../constants/theme";

const UserBadgeItem = ({
  item,
  userList,
  setUserList,
  userName,
  setUserName,
}: any) => {
  const handleDelete = (item: any) => {
    userName = userName.filter(function (element: any) {
      return element._id !== item._id;
    });
    userList = userList.filter(function (element: any) {
      return element !== item._id;
    });
    setUserName(userName);
    setUserList(userList);
  };
  return (
    <Badge
      value={
        <View style={{ flexDirection: "row"}}>
          <Text
            style={{
              fontFamily: FONTS.vanSansBold,
              alignSelf: "center",
              color: "#fff",
            }}
          >
            {item.name}
          </Text>

          <Icon
            onPress={() => handleDelete(item)}
            name="close"
            color={"#fff"}
            size={18}
            style={{alignSelf: "center" }}
          />
        </View>
      }
      badgeStyle={{
        height: 35,
        backgroundColor: "#8f73f6",
        flexDirection: "row",
      }}
    />
  );
};

export default UserBadgeItem;
