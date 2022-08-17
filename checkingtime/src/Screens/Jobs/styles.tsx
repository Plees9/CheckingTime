import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  scrollView: {
    marginLeft: "3%",
  },
  text1: {
    textAlign: "center",
    fontFamily: FONTS.vanSansMedium,
  },
  Touch1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    flexDirection: "row",
    marginLeft: 10,
  },
  Touch2: {
    backgroundColor: "#FFFFFF",
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

});

export default styles;
