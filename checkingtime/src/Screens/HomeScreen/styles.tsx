import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    padding: 20,
    justifyContent: "center",
  },
  text1: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 6,
    justifyContent: "center",
    color: "white",
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
  item: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  item2: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    marginHorizontal: 20,
    backgroundColor: "pink",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  imagebgr: {
    width: "100%",
    height: 150,
  },
  row: {
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "pink",
    alignItems: "center",
    padding: 5,
  },
  icon2: {
    //flex: 1,
    height: 150,
    width: 150,
    backgroundColor: "lightblue",
    padding: 5,
    marginVertical: 20,
    margin: 20,
    borderRadius: 8,
  },
});

export default styles;