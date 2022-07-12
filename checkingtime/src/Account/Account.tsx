import {
     View,
     Text,
     Image,
     ScrollView,
     Button,
     Alert,
     TouchableOpacity,
   } from "react-native";
   import React, { useMemo } from "react";
   import Icon from "react-native-vector-icons/FontAwesome";
   import createStyles from "./style";
   import { TextInput } from "react-native-gesture-handler";
   import { useNavigation } from "@react-navigation/native";
   
   const Account = () => {
     const styles = useMemo(() => createStyles(), []);
     const navigation = useNavigation<any>();
   
     return (
       <ScrollView style={styles.container}>
         <View style={styles.hang}>
           {/* <Image source={require('../../assets/images/midu.jpg')} /> */}
           <Icon name="user-circle" size={60} color="#DFDFDE" />
           <View>
             <TextInput style={styles.user} placeholder="Username" />
             <TextInput style={styles.user} placeholder=" vị trí" />
           </View>
         </View>
         {/* tạo kẻ ngang */}
         <View style={styles.kengang} />
   
         <View>
           <Text style={styles.text}>Thông tin cá nhân</Text>
           <View style={styles.hang}>
             <Icon
               name="envelope-square"
               size={40}
               color="#7858A6"
               style={styles.icon}
             />
             <View style={styles.cot}>
               <TextInput
                 style={styles.user}
                 keyboardType="email-address"
                 placeholder="abc@gmail.com"
                 returnKeyType="done"
                 maxLength={60}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}> Email </Text>
             </View>
           </View>
           <View>
             <View style={{ flexDirection: "row" }}>
               <Icon
                 name="phone-square"
                 size={40}
                 color="#7858A6"
                 style={styles.icon}
               />
               <View>
                 <TextInput
                   style={styles.user}
                   keyboardType="number-pad"
                   placeholder="+84 987 654 321"
                   returnKeyType="done"
                   maxLength={12}
                   //value={userName}
                   secureTextEntry={false}
                   //onChangeText={setUserName}
                 />
                 <Text style={styles.user}> Số điện thoại </Text>
               </View>
             </View>
           </View>
         </View>
         {/* tạo kẻ ngang */}
         <View style={styles.kengang} />
         <View>
           <Text style={styles.text}>Thông tin công việc</Text>
           <View style={styles.hang}>
             <Icon
               name="github-square"
               size={35}
               color="#FF9F29"
               style={styles.icon}
             />
             <View>
               <TextInput
                 style={styles.user}
                 keyboardType="number-pad"
                 placeholder="1234"
                 returnKeyType="done"
                 maxLength={4}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}>Mã nhân viên </Text>
             </View>
           </View>
         </View>
   
         <View>
           <View style={styles.hang}>
             <Icon
               name="steam-square"
               size={40}
               color="#FF9F29"
               style={styles.icon}
             />
             <View>
               <TextInput
                 style={styles.user}
                 keyboardType="default"
                 placeholder="01/01/2022"
                 returnKeyType="done"
                 maxLength={10}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}>Ngày bắt đầu làm việc </Text>
             </View>
           </View>
         </View>
         <View>
           <View style={styles.hang}>
             <Icon
               name="reddit-square"
               size={40}
               color="#FF9F29"
               style={styles.icon}
             />
             <View>
               <TextInput
                 style={styles.user}
                 keyboardType="default"
                 placeholder="Đang làm việc/Đã nghỉ"
                 returnKeyType="done"
                 maxLength={100}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}>Trạng thái hợp đồng </Text>
             </View>
           </View>
         </View>
         <View>
           <View style={styles.hang}>
             <Icon
               name="snapchat-square"
               size={40}
               color="#FF9F29"
               style={styles.icon}
             />
             <View>
               <TextInput
                 style={styles.user}
                 keyboardType="default"
                 placeholder="Nhân viên chính thức/ thử việc/ TTS"
                 returnKeyType="done"
                 maxLength={100}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}>Loại hình nhân sự </Text>
             </View>
           </View>
         </View>
         <View>
           <View style={styles.hang}>
             <Icon
               name="xing-square"
               size={40}
               color="#FF9F29"
               style={styles.icon}
             />
             <View>
               <TextInput
                 style={styles.user}
                 keyboardType="default"
                 placeholder="123AB - 456CD- 789EF"
                 returnKeyType="done"
                 maxLength={100}
                 //value={userName}
                 secureTextEntry={false}
                 //onChangeText={setUserName}
               />
               <Text style={styles.user}>Device ID </Text>
             </View>
           </View>
         </View>
   Viking2022
         <View>
           {/* tạo kẻ ngang */}
           <View style={styles.kengang} />
           <View>
             <Text style={styles.text}>Lần đăng nhập cuối</Text>
             <View style={styles.hang}>
               <Icon name="cube" size={35} color="#FF9F29" style={styles.icon} />
               <View>
                 <TextInput
                   style={styles.user}
                   keyboardType="default"
                   placeholder="Tên thiết bị"
                   returnKeyType="done"
                   maxLength={4}
                   //value={userName}
                   secureTextEntry={false}
                   //onChangeText={setUserName}
                 />
                 <TextInput
                   style={styles.user}
                   keyboardType="default"
                   placeholder="18:01 - 01/01/2020"
                   returnKeyType="done"
                   maxLength={20}
                   //value={userName}
                   secureTextEntry={false}
                   //onChangeText={setUserName}
                 />
               </View>
             </View>
           </View>
         </View>
         <View>
           {/* tạo kẻ ngang */}
           <View style={styles.kengang} />
           {/* <View style={styles.hang}> */}
           {/* <View>
               <Icon name="key" size={20} color="#FF9F29" style={styles.icon} />
             </View> */}
           {/* <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
               <Text>Quên mật khẩu?</Text>
             </TouchableOpacity> */}
           {/* </View> */}
         </View>
         {/* <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
           <Text>Quên mật khẩu?</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
           <Text>Đăng ký</Text>
         </TouchableOpacity> */}
       </ScrollView>
     );
   };
   
   export default Account;
   
   