import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f2f2f2",
    
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
    marginLeft: 10,
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

    paddingTop: 5,
    color: "#eee9f5",
    alignSelf: "flex-end",
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
    height: 180,
    width: "94%",
    marginTop: 10,
    backgroundColor: "#FF8C32",
    borderRadius: 25,
  },
  textIcon23: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  row1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "99%",
    // backgroundColor: "red",
    marginTop: "-2%",
    height: 55,
    //alignItems:'center'
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
    width: "94%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 10,
    
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
  fab: {
    width: 150,
    height: 50,
   
  },
  btnFab: {
    marginVertical: "-3.5%",
    
  },
  text_name: {
    fontSize: 16,
    marginTop: 6,
    justifyContent: "center",
    fontFamily: FONTS.vanSansSemiBold,
  },
  avt2: {
    width: "15%",
    alignItems: "center",
    alignSelf: "center",
    
  },
  name2: {
    width: "60%",
    fontFamily: FONTS.vanSansSemiBold,
    alignSelf: "center",
    
  },
  checkin2: {
    width: "18%",
    //fontFamily: FONTS.vanSansMedium,
    color: "#FF8C32",
    textAlign: "center",
    alignSelf: "center",
    
  },
});

export default styles;