import React,{useState} from "react";
import {View,Text,StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0); 
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const ColorIncrease = 15
    const validateColor = (color, change) => {
        switch(color){
            case 'red': 
                red+change > 255 || red+change < 0 ? null : setRed(red+change);
                return;
            case 'green': 
                green+change > 255 || green+change < 0 ? null : setGreen(green+change);
                return;
            case 'blue': 
                blue+change > 255 || blue+change < 0 ? null : setBlue(blue+change);
                return;
            default:
                return;
        }
    };
    return (
        <View>
            <ColorCounter onIncrease={() => validateColor('red', ColorIncrease)}
                          onDecrease={() => validateColor('red' ,-1 * ColorIncrease)}
                          color='red' 
                          />
            <ColorCounter onIncrease={() => validateColor('green', ColorIncrease)}
                          onDecrease={() => validateColor('green' ,-1 * ColorIncrease)}
                          color='green' 
                          />
            <ColorCounter onIncrease={() => validateColor('blue', ColorIncrease)}
                          onDecrease={() => validateColor('blue' ,-1 * ColorIncrease)}
                          color='blue' 
                          />
            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SquareScreen;