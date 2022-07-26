import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight,
    backgroundColor: "#f2f2f2",
  },
  user: {
    fontSize: 14,
    color: "#7F8487",
    marginTop: "3%",
    marginLeft: 15,
    alignItems: "flex-start",
  },
  hang: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginLeft: 10,
  },
  viewHeader: {
    borderRadius: 10,
    marginRight: 10,
    marginTop: 40,
    marginLeft: 20,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#1363DF",
  },

  btn: {
    backgroundColor: "pink",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 200,
    height: 50,
  },
  chu11: {
    //fontWeight: "bold",
    fontSize: 28,
    width: "100%",

    padding: 5,
    marginTop: 10,
    fontFamily: FONTS.vanSansSemiBold,
  },
  scrollView1: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  kengang: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    width: 400,
    marginTop: "4%",
    marginBottom: "1.5%",
  },
  text1: {
    textAlign: "center",
    fontFamily: FONTS.vanSansMedium,
    color: "#00092C",
  },
  textHeader: {
    fontSize: 20,
    fontFamily: FONTS.vanSansMedium,
  },
  Touch1: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    flexDirection: "row",
    marginLeft: 10,
  },
  Touch2: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10,
    flexDirection: "row",
  },
  viewText: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 20,
  },

  iconbtn: {
    alignContent: "center",
    marginLeft: 15,
  },
});

export default styles;
