import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-web";

function Main({ btnStyle }) {

    const sample = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
    const [img, setImg] = useState(sample);

    let imagePickerAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            setImg(pickerResult.uri);
        }
    }

    return (
        <View style={styles.centerBox}>
            <View style={styles.image}>
                <Image source={{ uri: img }} style={{ height: '100%', width: "100%" }} />
            </View>
            <TouchableOpacity onPress={imagePickerAsync} style={btnStyle}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    centerBox: {
        width: 200,
        height: 200,
        backgroundColor: "blue",
        margin: "25%"
    },
    image: {
        padding: 10
    }
}

export default Main;

