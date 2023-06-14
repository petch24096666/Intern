import React from "react";
import { View,Button,Text,StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail name="Forest" imgsource= {require('../../assets/forest.jpg')} score={5} />
            <ImageDetail name="Beach" imgsource= {require('../../assets/beach.jpg')} score={10} />
            <ImageDetail name="Mountain" imgsource= {require('../../assets/mountain.jpg')} score={7} />
        </View>
    )
}

const style = StyleSheet.create({
    
})

export default ImageScreen;