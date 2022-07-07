import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Alert, Button, TextInput } from 'react-native';
import { t } from "react-native-tailwindcss";
import { Icon } from 'react-native-vector-icons/Icon';
import styles from './styles';
import { IconButton} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';

const Account = () => {
    const onChangePasswordPressed = () => {
    console.warn("Change password pressed");
    }
    const onLogoutPressed = () => {
    console.warn("Logout pressed");
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.separate}>Thông tin tài khoản </Text>
          </View>
          <View>
            <Text style={styles.separate}>thong tin ca nhan</Text>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="email-outline" size={30} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text1}> x </Text>
              <Text style={styles.text1}> email </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="cellphone" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}> x </Text>
            <Text style={styles.text1}> sdt </Text>
            </View>
          </View>
          <View>
            <Text style={styles.separate}>thong tin cong viec</Text>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="account" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}> x </Text>
            <Text style={styles.text1}> ma nhan vien </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
           
            <IconButton icon="calendar" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}> x </Text>
            <Text style={styles.text1}> ngay bat dau </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="account-clock" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}> x </Text>
            <Text style={styles.text1}> trang thai lam viec </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="card-account-details-outline" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}> x </Text>
            <Text style={styles.text1}> loai hinh nhan su </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            <IconButton icon="barcode" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}>x</Text>
            <Text style={styles.text1}> id </Text>
            </View>
          </View>
          <Text style={styles.separate}> lan dang nhap cuoi </Text>
          <View style={{ marginLeft: 16, flexDirection: "row" }}>
            
            <IconButton icon="clock-time-five" size={30} />
            <View style={{ flexDirection: "column" }}>
            <Text style={styles.text1}>x</Text>
            <Text style={styles.text1}> x </Text>
            </View>
          </View>
          <View style={{ marginRight: 200 }}>
            <CustomButton
              text="change password?"
              onPress={onChangePasswordPressed}
              fgColor="#000000"
              type="TERTIARY"
              bgColor={undefined}
            />
          </View>
          <View style={{ marginRight: 200 }}>
            <CustomButton
              text="logout?"
              onPress={onLogoutPressed}
              fgColor="#000000"
              type="TERTIARY"
              bgColor={undefined}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );


}

export default Account;