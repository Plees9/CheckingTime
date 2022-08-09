import { View, Text, ScrollView, Image, Alert, SafeAreaView } from "react-native";
import React, { useMemo } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "@rneui/themed";
import createStyles from "../styles";
import { useNavigation } from "@react-navigation/native";



const NhanVien = () => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View >
            <View style={styles.icon4}>
                <Icon name="search" size={20} />
                <TextInput
                    style={styles.text2}
                    placeholder="Nhập tên nhân viên của bạn"
                    returnKeyType="done"
                ></TextInput>
            </View>
            <ScrollView style={styles.view1}>

                <Text > Không tìm thấy đơn nào!</Text>






            </ScrollView>
        </View>
    );
};
export default NhanVien;