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
import { FONTS } from "../../constants/theme";
import { Circle } from "react-native-svg";

import { AnimatedCircularProgress } from "react-native-circular-progress";

interface TimekeepModalProps {
  visible: boolean;
  title: string;
  size: number;
  width: number;
  late: number;
  fill: number;
  maxPoint: number;
  cancelText: string;
  onCancel: () => void;
}

export default class TimekeepModal extends React.Component<TimekeepModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
      title: props.title,
      maxPoint: props.maxPoint,
      fill: props.fill,
      onCancel: props.onCancel,
      size: props.size,
      late: props.late,
      width: props.width,
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
        onRequestClose={this.close}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={{ marginTop: 20 }}>
              <AnimatedCircularProgress
                size={this.props.size}
                width={this.props.width}
                fill={Math.round((this.props.fill / this.props.maxPoint) * 100)}
                tintColor="#f49218"
                backgroundColor="#3d5875"
              >
                {() => (
                  <Text style={styles.points}>
                    {this.props.fill}/{this.props.maxPoint}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.text_late}>{this.props.late} lần đi muộn !</Text>
            </View>
            <View style={styles.box_button}>
              <View style={styles.cancel_button}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <Text style={styles.text_button}>
                    {this.props.cancelText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
  box_button: {
    width: "100%",
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  points: {
    textAlign: "center",
    color: "#000",
    fontFamily: FONTS.vanSansMediumItalic,
    fontSize: 20,
  },
  confirm_button: {
    marginHorizontal: 10,
    height: 30,
    width: 60,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#f49218",
    flex: 1,
  },
  cancel_button: {
    marginHorizontal: 10,
    height: 30,
    width: 60,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#f49218",
    flex: 1,
  },
  box: {
    height: 300,
    width: 280,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input_box: {
    justifyContent: "center",
    marginTop: 15,
    fontFamily: FONTS.vanSansLight,
    fontSize: 14,

    width: "85%",
  },
  title: {
    marginTop: 10,
    alignItems: "center",
    fontSize: 16,
    fontFamily: FONTS.vanSansSemiBoldItalic,
  },
  text_button: {
    alignSelf: "center",
    fontSize: 13,
    fontFamily: FONTS.vanSansMediumItalic,
  },
  text_late: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: FONTS.vanSansMediumItalic,
  },
});
