import { View, Text, ScrollView, Image, Alert, SafeAreaView } from "react-native";
import React, { useMemo } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import createStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ListStaff = () => {
  const styles = useMemo(() => createStyles(), []);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name="bars" size={20} onPress={() => navigation.navigate("Bộ lọc")} />
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

      <SafeAreaView >
        <ScrollView style={styles.view1}>
          {/*  */}
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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>
          {/*  */}
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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>
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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>

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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>

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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>

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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>

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
              <TextInput style={styles.view3} placeholder="01"></TextInput>
              <TextInput style={styles.view3} placeholder="gender"></TextInput>
              <TextInput
                style={styles.view3}
                placeholder="01/01/2001"
              ></TextInput>
            </View>

            <View style={styles.hang3}>
              <View style={styles.cot1}>
                <Text>Loại hình nhân sự</Text>
                <TextInput placeholder="Chưa cập nhật"></TextInput>
              </View>

              <View style={styles.cot1}>
                <Text>Trạng thái nhân sự</Text>
                <TextInput placeholder="Chưa làm việc"></TextInput>
              </View>
              
            </View>
            <View style={styles.kengang} />
            <Text style={styles.text1}>Bắt đầu vào làm ngày 01/01/2001 </Text>
          </View>
          
        </ScrollView>
      </SafeAreaView>
      
    </View>
  );
};

export default ListStaff;
