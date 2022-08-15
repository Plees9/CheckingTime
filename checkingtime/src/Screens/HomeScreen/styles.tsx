import { StyleSheet, StatusBar } from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f2f2f2",
  },

  text: {
    fontSize: 14,

    fontFamily: FONTS.vanSansBold,
    color: "#FFFFFF",
    textAlign: "center",
  },
  text1: {
    fontSize: 15,
    marginLeft: 10,

    fontFamily: FONTS.vanSansMedium,
  },
  textcolor: {
    fontFamily: FONTS.vanSansBold,
  },
  text2: {
    fontSize: 13,
    marginLeft: 6,
    alignSelf: "center",
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
    fontSize: 12,
    fontFamily: FONTS.vanSansBold,

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
    flexDirection: "row",
    height: 180,
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#FF8C32",
    borderRadius: 25,
  },
  textIcon23: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 7,
    marginLeft: 6,
    marginRight: 15,
  },

  row1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "99%",
    marginTop: 10,
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
    height: "50%",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,

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
    marginTop: 10,
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
  text_late: {
    alignSelf: "center",
    fontSize: 15,
    fontFamily: FONTS.vanSansMediumItalic,
  },
  points: {
    textAlign: "center",
    color: "#000",
    fontFamily: FONTS.vanSansMediumItalic,
    fontSize: 15,
  },
  boder: {
    width: 24,
    height: 24,
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
    fontFamily: FONTS.vanSansMedium,
    color: "gray",
    alignSelf: "center",
    
  },
  checkin2: {
    width: "18%",
    fontFamily: FONTS.vanSansMedium,
    alignSelf: "center",
  },
  box_check: {
    flex: 1,
    marginTop: 10,
  },
  nb_job: {
    position: "absolute",
    fontSize: 16,
    paddingRight: 10,
    color: "#f5b501",
    alignSelf: "flex-end",
    fontFamily: FONTS.vanSansBold,
  },
  nb_jobdone: {
    position: "absolute",
    fontSize: 16,
    paddingRight: 10,
    color: "#4adb63",
    alignSelf: "flex-end",
    fontFamily: FONTS.vanSansBold,
  },
  nb_jobover: {
    position: "absolute",
    fontSize: 16,
    paddingRight: 10,
    color: "#ff3b2e",
    alignSelf: "flex-end",
    fontFamily: FONTS.vanSansBold,
  },
  txt_job: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: FONTS.vanSansBold,
    color: "#f5b501",
  },
  txt_jobdone: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: FONTS.vanSansBold,
    color: "#4adb63",
  },
  txt_jobover: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: FONTS.vanSansBold,
    color: "#ff3b2e",
  },
  box_job: {
    flex: 1,
    marginRight: 10,
    height: 180,
    width: "43%",
    marginTop: 10,
    backgroundColor: "#fffd",
    borderRadius: 25,
  },
  title_job: {
    fontSize: 14,

    fontFamily: FONTS.vanSansBold,
    color: "#000",
    textAlign: "center",
  },
  row_rank: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnFab: {
    //flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "3%",
    marginRight: "5%",
  },
});

export default styles;
