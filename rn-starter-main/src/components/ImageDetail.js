import react from "react";
import { View,Button,Text,StyleSheet,Image } from "react-native";

const ImageDetail = ({score,imgsource,name}) => {
    return (
        <View>
            <Image 
            source = {imgsource}
            style = {styles.imgStyle}
            />
            <Text>{name}</Text>
            <Text>Image Score-{score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle:{
        width:100,
        height:100
    }
})

export default ImageDetail;