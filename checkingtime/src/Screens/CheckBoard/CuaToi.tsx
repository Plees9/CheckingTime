import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { loadTimesheet, loadTimesheetFilter } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

import { Table, Row, Rows, Col } from "react-native-table-component";
import createStyles from "./styles";

const CONTENT = {
  tableHead: ["Ngày"],
  tableHead1: ["01/08", "02/08", "03/08", "04/08", "05/08", "06/08", "07/08"],
  tableHead2: ["Check in", "Check out", "Đi muộn", "Về sớm", "Số giờ OT"],

  tableData: [
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
  ],
};

const BangCong_Cuatoi = () => {
  const dispatch = useDispatch();
  let lateNumber;
  let lateValue;
  let earlyNumber;
  let earlyValue;
  let otNumber;
  let otValue;

  useEffect(() => {
    dispatch<any>(loadTimesheetFilter());
  }, [dispatch]);

  const { timesheetFilter } = useSelector<any, any>((state) => state.timesheet);
  console.log(timesheetFilter);
  if (typeof timesheetFilter !== "undefined" && timesheetFilter !== null) {
    lateNumber = timesheetFilter.Object.checkinLate.number;
    lateValue = timesheetFilter.Object.checkinLate.value;
    earlyNumber = timesheetFilter.Object.checkoutEarly.number;
    earlyValue = timesheetFilter.Object.checkoutEarly.value;
    otNumber = timesheetFilter.Object.overtime.number;
    otValue = timesheetFilter.Object.overtime.value;
  }
  const styles = useMemo(() => createStyles(), []);
  //const navigation = useNavigation<any>();
  return (
    <View style={styles.bgr}>
      <View style={{height: 60, justifyContent:'center'}}>
      <TouchableOpacity
        style={styles.icon1}
        onPress={() => Alert.alert("Simple Button")}
      >
        <Icon name="bars" size={18} style={styles.icon3}></Icon>
        <Text style={styles.text}>Tháng này</Text>
      </TouchableOpacity>
      </View>
      <SafeAreaView>
        <View>
          <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
            <View>
              <View style={{height:50, backgroundColor:'#DDDDDD', justifyContent:'center'}}>
                <Text style={styles.chu11}>Tổng hợp ngày công</Text>
              </View>

              <View style={{flexDirection:'row', marginLeft:10, width: '94%', justifyContent:'space-between'}}>
                <Text style={styles.textTop2}>Trạng thái nhân sự</Text>
                <Text style={styles.textTop3}>3/21</Text>
              </View>

              <View style={styles.row2}>
                <View style={styles.icon2}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>{lateValue} phút/ {lateNumber} lần</Text>
                    <Text style={styles.textTop2}>Đi muộn</Text>
                  </View>
                </View>
                <View style={styles.icon5}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>{earlyValue} phút/ {earlyNumber} lần</Text>
                    <Text style={styles.textTop2}>Về sớm</Text>
                  </View>
                </View>
              </View>

              <View style={styles.icon2}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.textTop4}>{otValue} giờ/ {otNumber} lần </Text>
                  <Text style={styles.textTop2}>Tổng giờ OT</Text>
                </View>
              </View>

              <View style={{marginTop:10,height:50, backgroundColor:'#DDDDDD', justifyContent:'center'}}>
                <Text style={styles.chu11}>Bảng công chi tiết</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.column}>
                  <View>
                    <Text style={styles.chu3}>Ngày</Text>
                  </View>
                  <Col
                    data={CONTENT.tableHead1}
                    style={styles.chu4}
                    textStyle={styles.chu5}
                  />
                </View>

                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{ paddingRight: "25%" }}
                >
                  <View>
                    <Table>
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
export default BangCong_Cuatoi;
