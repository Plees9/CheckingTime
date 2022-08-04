import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { IconButton } from "react-native-paper";
import createStyles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const styles = useMemo(() => createStyles(), []);
  const [camera, setCamera] = useState(null);
  const navigation = useNavigation<any>();
  let [image, setImage] = useState("");
  let flag = 0;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      image = result.uri;
      flag = 1;
      navigation.navigate("Tài khoản", { image, flag });
    }
  };
  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    //Permissions.askAsync (Permissions.CAMERA_ROLL)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });
    if (!result.cancelled) {
      image = result.uri;
      flag = 1;
      navigation.navigate("Tài khoản", { image, flag });
    }

    //navigation.navigate("Account");
  };
  // const clickPicture = async () => {

  //     const data = await camera.takePictureAsync();
  //     if (route.params.updateProfile) return navigation.navigate("profile", { image: data.uri })
  //     else return navigation.navigate("register", { image: data.uri })

  // }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.Touch1} onPress={pickImage}>
          <View style={{ alignContent: "center" }}>
            <IconButton icon="image" size={40} color="#f49218" />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Chọn ảnh</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Touch1} onPress={takeImage}>
          <View style={{ alignContent: "center" }}>
            <IconButton icon="camera" size={40} color="#f49218" />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text1}>Chụp ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraComponent;
