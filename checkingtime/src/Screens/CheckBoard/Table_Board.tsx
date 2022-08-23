import { Text, View, ScrollView } from "react-native";
import { loadTimesheet, loadTimesheetFilter } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo, useEffect } from "react";

import { Table, Row, Rows, Cell } from "react-native-table-component";
import createStyles from "./styles";

const CONTENT = {
  tableHead2: [
    "Id",
    "Họ và tên",
    "Đi muộn",
    "Về sớm",
    "Số giờ OT",
    "Điểm công",
  ],

  tableData: [
    ["1", "Nguyen Son Ba", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
    ["1", "2", "3", "1", "2", "3"],
    ["a", "b", "c", "a", "b", "c"],
  ],
  
};


const Table_Board = () => {
  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);
  //const navigation = useNavigation<any>();

  return (
    <ScrollView horizontal={true}>
      <Table>
        <ScrollView>
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
        </ScrollView>
      </Table>
    </ScrollView>
  );
};
export default Table_Board;
