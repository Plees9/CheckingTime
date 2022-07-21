import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Button,
} from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
  },
  separate: {
    backgroundColor: "#DFF6FF",
    fontSize: 30,
    padding: 10,
    borderRadius: 25,
  },
  btn: {
    backgroundColor: "pink",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 200,
    height: 50,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "lightblue",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
