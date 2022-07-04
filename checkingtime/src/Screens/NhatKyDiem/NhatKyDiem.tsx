import { BackHandler } from "react-native";
import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { IconButton } from "react-native-paper";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const NhatKyDiem = () => {
    const styles = useMemo(() => createStyles(), []);
    return (
      <View >
        <Text style={styles.text}>Happy Game</Text>
      </View>
    );
}
export default NhatKyDiem;

