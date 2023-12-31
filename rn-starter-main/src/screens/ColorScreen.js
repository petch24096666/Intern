import { FlatList } from "@react-navigation/native";
import React, {useState} from "react"; 
import { Text,StyleSheet,Button,View } from "react-native";

const ColorScreen = () => {
    const [colors,setColor] = useState([])
    return (
        <View>
            <Button 
            title="Add a Color"
            onPress={() => {
                setColor([...colors,RandomRGB()]);
            }}
            />
        <FlatList
            keyExtractor = {(item) => item}
            data={colors}
            renderItem={({ item }) => {
                return <View style={{height:100, width:100, backgroundColor: item}}/>
            }
     }
        />
        </View>
    )
}

const styles = StyleSheet.create({

})

const RandomRGB=() => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;

}

export default ColorScreen;