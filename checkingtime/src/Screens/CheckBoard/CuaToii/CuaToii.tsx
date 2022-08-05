import { View, Text, ScrollView, Image, Alert, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import createStyles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import Board from "./board";
import { Table, TableWrapper, Row, Rows, Col, } from 'react-native-table-component';

const CONTENT = {
    tableA: ['ngay'],
    tableHead: ['ngay'],
    tableHead1: ['01/08', '02/08', '03/08', '04/08', '05/08', '06/08', '07/08'],
    tableHead2: ['check in', 'check out', 'di muon', 've som', 'so gio ot'],

    tableData: [
        ['-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-'],

    ],
};


const CuaToii = () => {
    const styles = useMemo(() => createStyles(), []);
    //const navigation = useNavigation<any>();
    return (

        <View>
            <TouchableOpacity style={styles.icon1} onPress={() => Alert.alert("Simple Button")}>
                <Icon name="bars" size={20} style={styles.icon3} ></Icon>
                <Text style={styles.text}>tháng này</Text>

            </TouchableOpacity>
            <SafeAreaView>
                <View >
                    <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
                        <View>
                            <View>
                                <Text style={styles.chu11}>Tổng hợp ngày công</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.textTop2}> Trạng thái nhân sự</Text>
                                <Text style={styles.textTop3}> 3/21</Text>
                            </View>

                            <View style={styles.row2}>
                                <View style={styles.icon2}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 81 phút</TextInput>
                                        <TextInput style={styles.textTop2}> Đi muộn</TextInput>
                                    </View>
                                </View>
                                <View style={styles.icon5}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 8 phút</TextInput>
                                        <TextInput style={styles.textTop2}> Về sớm</TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.row2}>
                                <View style={styles.icon2}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 0</TextInput>
                                        <TextInput style={styles.textTop2}> Công nghỉ phép</TextInput>
                                    </View>
                                </View>

                                <View style={styles.icon5}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}>0 </TextInput>
                                        <TextInput style={styles.textTop2}> Tổng giờ OT</TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.row2}>
                                <View style={styles.icon2}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 0</TextInput>
                                        <TextInput style={styles.textTop2}> Công nghỉ lễ</TextInput>
                                    </View>
                                </View>

                                <View style={styles.icon5}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 0</TextInput>
                                        <TextInput style={styles.textTop2}> Công công tác</TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.row2}>
                                <View style={styles.icon2}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 0</TextInput>
                                        <TextInput style={styles.textTop2}> Nghỉ không lương</TextInput>
                                    </View>
                                </View>

                                <View style={styles.icon5}>
                                    <View style={{ flexDirection: "column" }}>
                                        <TextInput style={styles.textTop4}> 0</TextInput>
                                        <TextInput style={styles.textTop2}> Công work from home</TextInput>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.chu11}>Bảng công chi tiết</Text>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <View>
                                        <Text style={styles.chu3} >ngay</Text>
                                    </View>
                                    <Col
                                        data={CONTENT.tableHead1}
                                        style={styles.chu4}
                                        textStyle={styles.chu5}


                                    />
                                </View>

                                <ScrollView horizontal={true} contentContainerStyle={{ paddingRight: "25%" }}>
                                    <View>
                                        <Table >
                                            <Row
                                                data={CONTENT.tableHead2}
                                                style={styles.chu2}
                                                textStyle={styles.chu2}

                                            />
                                            <Rows
                                                data={CONTENT.tableData}
                                                style={styles.chu4}
                                                textStyle={styles.chu4}
                                            />




                                        </Table>
                                    </View>

                                </ScrollView>



                            </View>


                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
};
export default CuaToii;