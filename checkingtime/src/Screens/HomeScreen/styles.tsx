import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f9f9f9",
  },

  text: {
    fontSize: 20,

    fontFamily: FONTS.vanSansBold,
    color: "#FFFFFF",
    textAlign: "center",
  },
  text1: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 6,
    justifyContent: "center",
    fontFamily: FONTS.vanSansRegular,
  },
  textcolor: {
    fontFamily: FONTS.vanSansBold,
  },
  text2: {
    fontSize: 16,
    marginLeft: 5,
    paddingTop: 5,
    fontFamily: FONTS.vanSansBold,
    color: "#FFFFFF",
  },
  text3: {
    fontSize: 16,
    marginLeft: "58%",
    color: "#eee9f5",
    paddingTop: 5,
  },
  text4: {
    fontSize: 16,
    marginLeft: "60%",
    paddingTop: 5,
    color: "#eee9f5",
  },

  row: {
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 35 / 2,
    backgroundColor: "#eee9f5",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  icon1: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: "#eee9f5",
    padding: 7,
  },
  icon2: {
    flexDirection: "column",
    height: 170,
    width: 350,
    marginTop: 10,
    backgroundColor: "#FF8C32",
    borderRadius: 25,
  },
  textIcon23: {
    //flex: 1,
    flexDirection: "row",
    margin: 8,
  },

  row1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  textInfo: {
    fontFamily: FONTS.vanSansMedium,
    color: "gray",
  },
  kengang: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    width: 350,
    marginBottom: 5,
  },
  view: {
    flexDirection: "column",
    marginTop: 20,
    width: "90%",
    height: 350,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 8,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  text5: {
    fontSize: 13,
    color: "#100F0F",
    marginLeft: 5,
    fontFamily: FONTS.vanSansBold,
  },
  text6: {
    fontSize: 13,
    color: "#100F0F",
    marginLeft: 15,
    fontFamily: FONTS.vanSansBold,
  },
  text7: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontFamily: FONTS.vanSansSemiBold,
  },

  btn1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 160,
    height: 50,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
  },
  vongtron: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#FEFBF6",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  boder: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "#eee9f5",
    padding: 6,
  },
  avt: {
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default styles;
