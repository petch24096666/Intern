import React,{useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [Password, SetPassword] = useState('')
    return (
        <View>
            <Text>Password</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={Password}
            onChangeText={newValue => SetPassword(newValue)}
            />
            <Text>My Password is {Password}</Text>
            {Password.length < 4 ? <Text>Password must more than 4 charecter</Text>:null}
        </View>
         )
}

const styles = StyleSheet.create({
    input:{
        margin:20,
        borderColor: 'black',
        borderWidth:1
    }
})

export default TextScreen;