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

interface InputModalProps {
  visible: boolean;
  title: string;
  confirmText: string;
  onConfirm: () => void;
  cancelText: string;
  onCancel: () => void;
  inputText: string;
  onChange: () => void;
}

export default class InputModal extends React.Component<InputModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible,
      title: props.title,
      confirmText: props.confirmText,
      onConfirm: props.onConfirm,
      cancelText: props.cancelText,
      onCancel: props.onCancel,
      inputText: props.inputText,
      onChange: props.onChange,
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
        animationType='fade'
        onRequestClose={this.close}
        
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>{this.props.title}</Text>

            <TextInput
              style={styles.input_box}
              placeholder={this.props.inputText}
              secureTextEntry={true}
              onChangeText={this.props.onChange}
            />
            <View style={styles.box_button}>
              
              <View style={styles.cancel_button}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <Text style={styles.text_button}>
                    {this.props.cancelText}
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.confirm_button}>
                <TouchableOpacity onPress={this.props.onConfirm}>
                  <Text style={styles.text_button}>
                    {this.props.confirmText}
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
    width: '100%',
    flex: 1,
    flexDirection: "row",
    alignItems:'center',
    borderRadius: 8,
  },
  confirm_button: {
    marginHorizontal:10,
    height: 30,
    width: 60,
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: "#716DF2",
    flex :1,
  },
  cancel_button: {
    marginHorizontal:10,
    height: 30,
    width: 60,
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: "#cccccc",
    flex :1,
  },
  box: {
    height: 150,
    width: 280,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input_box: {
    justifyContent :"center",
    marginTop :15,  
    fontFamily : FONTS.vanSansLight,
   fontSize :14,

    width: '85%',
    

  },
  title: {
    marginTop: 10, 
    alignItems: "center",
    fontSize :16,
    fontFamily : FONTS.vanSansSemiBoldItalic,
  },
  text_button: {
    alignSelf: "center",
    fontSize :13,
    fontFamily : FONTS.vanSansMediumItalic,
  },
    
  
});
