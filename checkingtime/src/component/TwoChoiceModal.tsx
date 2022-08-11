import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Text, View, Modal, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

interface TwoChoiceModalProps {
  visible: boolean;
  iconLeft: string;
  iconRight: string;
  txtLeft: string;
  txtRight: string;
  message: string;
  size: number;
  onLeftClick: () => void;
  onRightClick: () => void;
  onCancel: () => void;
}

export default class TwoChoiceModal extends React.Component<TwoChoiceModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
      iconLeft: props.iconLeft,
      iconRight: props.iconRight,
      txtLeft: props.txtLeft,
      txtRight: props.txtRight,
      size: props.size,
      message: props.message,
      onLeftClick: props.onLeftClick,
      onRightClick: props.onRightClick,
      onCancel: props.onCancel,
      
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
        animationType="slide"
        onRequestClose={this.props.onCancel}
      >
        <Modal
      transparent={true}
      visible={this.props.visible}
      animationType="fade"
      onRequestClose={this.props.onCancel}>
        <View style={styles.container_2}/></Modal>
        <TouchableOpacity onPress={this.props.onCancel} style={styles.container}>
          <TouchableWithoutFeedback>
          <View style={styles.box}>
            <Text style={styles.text2} >{this.props.message}</Text>
            <View
              style={{
                flexDirection:'row',
                position: "relative",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TouchableOpacity
              activeOpacity={1}
                style={styles.Touch1}
                onPress={this.props.onLeftClick}
              >
                <View style={{ alignContent: "center" }}>
                  <IconButton
                    icon={this.props.iconLeft}
                    size={this.props.size}
                    color="#f49218"
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.text1}>{this.props.txtLeft}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              activeOpacity={1}
                style={styles.Touch1}
                onPress={this.props.onRightClick}
              >
                <View style={{ alignContent: "center" }}>
                  <IconButton
                    icon={this.props.iconRight}
                    size={this.props.size}
                    color="#f49218"
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.text1}>{this.props.txtRight}</Text>
                </View>
              </TouchableOpacity>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container_2: {
    flex: 1,
    backgroundColor:'#000000AA',
    justifyContent: "flex-end",
    alignItems: "center",
  },

  Touch1: {
    backgroundColor: "#f7d0af",
    borderRadius: 10,
    flex : 0.5,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    
  },

  viewText: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 20,
  },
  box: {
    height: 190,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  text1: {
    textAlign: "center",
    fontFamily: FONTS.vanSansMedium,
  },
  box_button: {
    width: "100%",
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 8,
  },
  cancel_button: {
    marginHorizontal: 10,
    height: 30,
    width: 60,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#f49218",
    flex: 1,
    marginBottom: 10, 
  },
  text_button: {
    alignSelf: "center",
    fontSize: 13,
    fontFamily: FONTS.vanSansMediumItalic,
  },
  text2: {
    padding:10,
    color: '#000',
    fontSize: 16,
    textAlign: "center",
    fontFamily: FONTS.vanSansSemiBold,
  },
});
