import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { loadTimesheet, loadTimesheetFilter, loadTimesheetFilterByUser } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

import { Table, Row, Rows, Col } from "react-native-table-component";
import createStyles from "./styles";
import moment from "moment";
import { useRoute } from "@react-navigation/native";
import Loader from "../../navigation/Loader";

const Admin_Board = () => {
  const dispatch = useDispatch();
  let actualPoint: any;
  let maxPoint: any;
  let processBoard: number = 0;
  let lateNumber;
  let lateValue;
  let earlyNumber;
  let earlyValue;
  let otNumber;
  let otValue;
  const route = useRoute()
  const CONTENT = {
    tableHead: ["Ngày"],
    tableHead2: ["Check in", "Check out","Công ngày","Tăng ca(giờ)"],

    tableData: [
      ["-", "-", "-", "-"],
      ["-", "-", "-", "-"],
      ["-", "-", "-", "-"],
    ],
  };
  console.log(route.params)
  useEffect(() => {
    dispatch<any>(loadTimesheetFilterByUser(route.params._id))
  }, [dispatch]);
  const { timesheetFilterByUser, loading } = useSelector<any, any>((state) => state.timesheet);
  //console.log(timesheetFilterByUser);
  if (typeof timesheetFilterByUser !== "undefined" && timesheetFilterByUser !== null) {
    lateNumber = timesheetFilterByUser.timesheetData.checkinLate.number;
    lateValue = timesheetFilterByUser.timesheetData.checkinLate.value;
    earlyNumber = timesheetFilterByUser.timesheetData.checkoutEarly.number;
    earlyValue = timesheetFilterByUser.timesheetData.checkoutEarly.value;
    otNumber = timesheetFilterByUser.timesheetData.overtime.number;
    otValue = timesheetFilterByUser.timesheetData.overtime.value;
    actualPoint = timesheetFilterByUser.timesheetData.point.actual;
    maxPoint = timesheetFilterByUser.timesheetData.point.max;
  }

  let data_date: any = [];
  let data_board: any = [];
  if (
    typeof timesheetFilterByUser !== "undefined" &&
    typeof timesheetFilterByUser !== null
  ) {
    for (var i = 0; i < timesheetFilterByUser.timesheetTable.length; i++) {
      let object_board = [];
      object_board.push(timesheetFilterByUser.timesheetTable[i].checkinTime);
      object_board.push(timesheetFilterByUser.timesheetTable[i].checkoutTime);
      object_board.push(timesheetFilterByUser.timesheetTable[i].point);
      object_board.push(timesheetFilterByUser.timesheetTable[i].overtime);
      data_date.push(timesheetFilterByUser.timesheetTable[i].date);
      data_board.push(object_board);
      CONTENT.tableData.push(data_board);
    }
  }
  const styles = useMemo(() => createStyles(), []);

  const TableBoard = () => (
    <View style={styles.row}>
      <View style={styles.column}>
        <View>
          <Text style={styles.chu3}>Ngày</Text>
        </View>
        <Col data={data_date} style={styles.chu4} textStyle={styles.chu5} />
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
              data={data_board}
              style={styles.chu4}
              textStyle={styles.chu4}
            />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
  const Table_Board1 = () => {
    const dispatch = useDispatch();
    const styles = useMemo(() => createStyles(), []);
    //const navigation = useNavigation<any>();

    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <View>
            <Text style={styles.chu3}>Ngày</Text>
          </View>
          <Col data={data_date} style={styles.chu4} textStyle={styles.chu5} />
        </View>
        <ScrollView horizontal={true}>
          <Table>
            <ScrollView>
              <Row
                data={CONTENT.tableHead2}
                style={styles.chu2}
                textStyle={styles.chu2}
              />
              <Rows
                data={data_board}
                style={styles.chu4}
                textStyle={styles.chu4}
              />
            </ScrollView>
          </Table>
        </ScrollView>
      </View>
    );
  };

  return loading ? <Loader/> : (
    <View style={styles.bgr}>
      
      <SafeAreaView>
        <View>
          <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
            <View>
              <View
                style={{
                  height: 50,
                  backgroundColor: "#DDDDDD",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.chu11}>Tổng hợp ngày công</Text>
              </View>

              <View style={styles.row2}>
                <View style={styles.icon2}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>
                      {lateValue} phút/ {lateNumber} lần
                    </Text>
                    <TextInput style={styles.textTop2}>Đi muộn</TextInput>
                  </View>
                </View>
                <View style={styles.icon5}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>
                      {earlyValue} phút/ {earlyNumber} lần
                    </Text>
                    <TextInput style={styles.textTop2}>Về sớm</TextInput>
                  </View>
                </View>
              </View>
              <View style={styles.row2}>
                <View style={styles.icon2}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>
                      {otValue} giờ/ {otNumber} lần{" "}
                    </Text>
                    <TextInput style={styles.textTop2}>Tổng giờ OT</TextInput>
                  </View>
                </View>

                <View style={styles.icon5}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textTop4}>
                      {actualPoint}/{maxPoint}
                    </Text>
                    <TextInput style={styles.textTop2}>Điểm công</TextInput>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  height: 50,
                  backgroundColor: "#DDDDDD",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.chu11}>Bảng công chi tiết</Text>
              </View>

              <TableBoard />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Admin_Board;
