import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as imageShare from "expo-sharing";
import * as imageManipulator from "expo-image-manipulator";

function Main({ btnStyle }) {

    const sample = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
    const [img, setImg] = useState(null);

    let imagePickerAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            setImg(pickerResult.uri);
        }
    }

    let openShareDialogueAsync = async () => {
        if(Platform.OS === "web") {
            alert("This functionality not available in web, Sorry...")
        }

        imageManipulator.manipulateAsync(img).then(async imgTemp => {
            await imageShare.shareAsync(imgTemp.uri);
        }).catch(err => {
            throw new Error(err); 
        })
    }

    if(img) {
        return (
            <View style={styles.centerBox}>
                <View style={styles.image}>
                    <Image source={{ uri: img }} style={{ height: '100%', width: "100%" }} />
                </View>
                <TouchableOpacity onPress={openShareDialogueAsync} style={btnStyle}>
                    <Text>Tap to Share</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View style={styles.centerBox}>
                <ImageBackground style={styles.image} source={{uri: sample}}>
                    <Image source={{ uri: img }} style={{ height: '100%', width: "100%" }} />
                </ImageBackground>
                <TouchableOpacity onPress={imagePickerAsync} style={btnStyle}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = {
    centerBox: {
        backgroundColor: "blue",
        width: 200,
        height: 200,
    },
    image: {
        padding: 10,
        
    }
}

export default Main;

