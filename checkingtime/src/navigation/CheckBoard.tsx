
import * as React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CuaToii from "../Screens/CheckBoard/CuaToii/CuaToii";
import NhanVien from "../Screens/CheckBoard/NhanVien/NhanVien";

const CheckBoard = createMaterialTopTabNavigator();

const CheckBoardsNavigation = () => {
    return (
        <CheckBoard.Navigator>
            <CheckBoard.Screen
                name="CuaToii"
                component={CuaToii}
            />
            <CheckBoard.Screen
                name="NhanVien"
                component={NhanVien}
            />

        </CheckBoard.Navigator>
    );
}; export default CheckBoardsNavigation;