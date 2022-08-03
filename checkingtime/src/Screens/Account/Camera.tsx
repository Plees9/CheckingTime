import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native";
const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null);
    const navigation = useNavigation<any>();
    let [image, setImage] = useState("")
    let flag = 0 
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9, 16],
          quality: 1,
        });
        
        console.log(result)
        if (!result.cancelled) {
            image = result.uri
            flag = 1
            navigation.navigate("Tài khoản", {image, flag})
        }
      }
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
            image = result.uri
            flag = 1
            navigation.navigate("Tài khoản", {image,flag})
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
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 10,
                    justifyContent: "space-evenly",
                    width: "100%",
                }}
            >
                <Icon name="image" size={40} color="#fff" onPress={pickImage} />
                <Icon name="camera" size={40} color="#fff" onPress={takeImage} />

                <Icon
                    name="flip-camera-android"
                    size={40}
                    color="#fff"
                    onPress={() =>
                        setType(
                            type === CameraType.back ? CameraType.front : CameraType.back
                        )
                    }
                />
            </View>


        </View>
    );
}

export default CameraComponent