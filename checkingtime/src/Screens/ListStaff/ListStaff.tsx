import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useMemo } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import createStyles from "./styles";

const ListStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name="bars" size={20} />
        </View>
        <View style={styles.icon1}>
          <Icon name="search" size={20} style={styles.icon3} />
          <TextInput
            style={styles.text}
            placeholder="Tìm kiếm"
            returnKeyType="done"
          ></TextInput>
        </View>
      </View>

      <View >
        <ScrollView style={styles.view1}>
          <View style={styles.view2}>
            <View style={styles.hang}>
              <View style={styles.avt}>
                <Avatar
                  size={50}
                  rounded
                  source={{
                    uri: "https://hoanghapc.vn/media/news/0510_hinh_nen_phong_canh4.jpg",
                  }}
                ></Avatar>
              </View>

              <View>
                <TextInput style={styles.user} placeholder="Username" />
                <TextInput style={styles.user} placeholder=" vị trí" />
              </View>
              <Icon
                name="phone"
                size={20}
                style={styles.iconPhone}
                onPress={() => Alert.alert("Simple Button pressed")}
              />
              
            </View>
            <View style={styles.hang2}>
              <TextInput 
              style={styles.view3}
              placeholder="Nhập thông tin"
              >

              </TextInput>
              <Text style={styles.view3}>ahdahda</Text>
              <Text style={styles.view3}>ahdahda</Text>

            </View>
           
            

            
            
           
            {/*  */}
            
           
            
          </View>
          
              
          

          
        </ScrollView>
        
      </View>
    </View>
  );
};

export default ListStaff;
