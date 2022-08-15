import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  TextInput,
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FONTS } from "../../constants/theme";
import { Circle } from "react-native-svg";

interface TodoModalProps {
  visible: boolean;
  onCancel: () => void;
  dataTodo: number;
  dataDone: number;
  dataOvertime: number;
}
export default class TodoModal extends React.Component<TodoModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
      onCancel: props.onCancel,
      dataTodo: props.dataTodo,
      dataDone: props.dataDone,
      dataOvertime: props.dateOvertime,
      image: props.image,
    };
  }

  close = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.visible}
        animationType="fade"
        onRequestClose={this.props.onCancel}
      >
        <TouchableOpacity
          onPress={this.props.onCancel}
          style={styles.container}
        >
          <TouchableWithoutFeedback>
            <View style={styles.box}>
              <View style={styles.box_2}>
                <View
                  style={{
                    flexDirection: "row",
                    flex:1,
                    width: "100%",
                  }}
                >
                  <View style={styles.equal}>
                  <View style={styles.box_todo}>
                    <Text style={styles.title_todo}>Tổng công việc</Text>
                    <Text style={styles.num_todo}>{this.props.dataTodo}</Text>
                  </View>
                  </View>
                  <View style={styles.equal}>
                  <View style={styles.box_done}>
                    <Text style={styles.title_done}>Đã hoàn thành</Text>
                    <Text style={styles.num_done}>{this.props.dataDone}</Text>
                  </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex:1,
                    width: "100%",
                    
                  }}
                >
                  <View style={styles.equal}>
                  <View style={styles.box_overtime}>
                    <Text style={styles.title_overtime}>Đã quá{"\n"}hạn</Text>
                    <Text style={styles.num_overtime}>
                      {this.props.dataOvertime}
                    </Text>
                  </View>
                  </View>
                  <View style={styles.equal}>
                  <TouchableOpacity style={styles.box_more}>
                    <Icon name="format-list-bulleted" size={30} />
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "center",
    alignItems: "center",
  },
  equal: {
    flex:1,
    justifyContent:'center',
  },
  box: {
    height: 280,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  box_2: {
    height: 250,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  box_todo: {
    height: 110,
    width: 110,
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: "#b7d6f2",
    borderRadius: 10,
  },
  box_done: {
    height: 110,
    width: 110,
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: "#84d9ba",
    borderRadius: 10,
  },
  box_overtime: {
    height: 110,
    width: 110,
    
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: "#f0a6ad",
    borderRadius: 10,
  },
  box_more: {
    height: 90,
    width: 90,
   
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 10,
  },

  title_todo: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    color: "#706df2",
    fontSize: 18,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  title_done: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    color: "#3d7363",
    fontSize: 18,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  title_overtime: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    color: "#c02604",
    fontSize: 18,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  num_todo: {
    marginBottom: 7,
    alignSelf: "center",
    color: "#706df2",
    fontSize: 25,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  num_done: {
    marginBottom: 7,
    alignSelf: "center",
    color: "#3d7363",
    fontSize: 25,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  num_overtime: {
    marginBottom: 7,
    alignSelf: "center",
    color: "#c02604",
    fontSize: 25,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
});
