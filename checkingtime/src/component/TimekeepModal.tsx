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
import {Circle} from 'react-native-svg';

import { AnimatedCircularProgress } from "react-native-circular-progress";

interface TimekeepModalProps {
  visible: boolean;
  title: string;
  size: number;
  width: number;
  fill: number;
  process: number;
  cancelText: string;
  onCancel: () => void;
}
const MAX_POINTS = 100;
export default class TimekeepModal extends React.Component<TimekeepModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
      title: props.title,
      fill: props.fill,
      onCancel: props.onCancel,
      size: props.size,
      process: props.process,
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

            <AnimatedCircularProgress
              size={this.props.size}
              width={this.props.width}
              fill={this.props.fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {fill => <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 100)}</Text>}
            </AnimatedCircularProgress>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 25,
    fontWeight: '100',
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
    height: 150,
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
});
