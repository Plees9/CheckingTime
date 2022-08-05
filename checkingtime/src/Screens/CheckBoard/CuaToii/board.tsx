import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, } from 'react-native-table-component';

const CONTENT = {
    tableA: ['ngay'],
    tableHead: ['ngay'],
    tableHead1: ['Column 0/Row 0', 'Column 1', 'Column 2', 'Column 3'],
    tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
    tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
    ],
};

export default function Board() {
    return (
        <View>
            <SafeAreaView>
                <ScrollView style={styles.view1} >
                    <View style={styles.container}>


                        <Text>ngay</Text>






                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    view1: {


    },
    container: { backgroundColor: '#fff' },
    head: { backgroundColor: 'orange' },
    wrapper: { flexDirection: 'row' },
    title: { backgroundColor: '#2ecc71' },
    row: { height: 28 },
    text: { textAlign: 'center' },
});