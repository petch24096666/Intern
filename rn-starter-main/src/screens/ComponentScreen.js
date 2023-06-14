import React from "react";
import { Text,StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = "Sorawit"
    return  <View><Text style={style.Text}>Getting started with react native! </Text>
            <Text style = {fontSize = 25}>My name is {name}</Text></View>
}

const style = StyleSheet.create({
    Text : {
        fontSize:40
    }
})

export default ComponentScreen