import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Alert, Button, useWindowDimensions } from 'react-native';
import { t } from "react-native-tailwindcss";
import { Icon } from 'react-native-vector-icons/Icon';
import styles from './styles';
import { IconButton} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Form from '../Form/Form';


const Jobs = () => {
  const {height}=useWindowDimensions();
  const navigation = useNavigation<any>();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.separate}>Quản lý chấm công</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent:'center', alignItems:'center',marginLeft:16}}>
          <IconButton icon='calendar-account' color='#47B5FF' size={40} onPress={() => Alert.alert('Simple Button pressed') }  />
          <Text>Bảng công</Text>
          </View>
        </View>
        <View>
          <Text style={styles.separate}>Quản lý đơn từ</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <IconButton icon='text-box' color='#47B5FF' size={40} onPress={() => Alert.alert('Simple Button pressed') }  />
            <Text>Danh sách đơn từ</Text>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', marginLeft:15}}>
            <IconButton icon='text-box-plus' color='#47B5FF' size={40} onPress={() => navigation.navigate('Form')}  />
            <Text>Tạo đơn mới</Text>
          </View>
        </View>
        <View>
          <Text style={styles.separate}>Tổ chức</Text>
        </View>
        <View style={{flexDirection: 'row'}}> 
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <IconButton icon='office-building' color='#47B5FF' size={40} onPress={() => Alert.alert('Simple Button pressed') }  />
            <Text>Thông tin công ty</Text>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', marginLeft:15}}>
            <IconButton icon='account-group' color='#47B5FF' size={40} onPress={() => Alert.alert('Simple Button pressed') }  />
            <Text>Danh sách nhân viên</Text>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
    
    

    
  );
}

export default Jobs;