import React from "react";
import { Button, StyleSheet, View } from 'react-native';

const ButtonCom = ({naviScren, screen}) => {
    return(
        <View>
            <Button style = {styles.buttonStyle} 
                title={`Go to ${screen}`}
                onPress = {() => naviScreen()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width:100
    }
})

export default ButtonCom;
