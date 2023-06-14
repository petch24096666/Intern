import React from "react";
import { Text,FlatList,StyleSheet,View } from "react-native";

const ListScreen = (props) => {
    const friends = 
        [
            {
                name: "Friends 1",
                age: "20"
            },
            {
                name: "Friends 2",
                age: "45"
            },
            {
                name: "Friends 3",
                age: "32"
            },
            {
                name: "Friends 4",
                age: "27"
            },
            {
                name: "Friends 5",
                age: "53"
            },
            {
                name: "Friends 7",
                age: "30"
            },
        ]
        return (
         <View>
            <FlatList 
                showsVerticalScrollIndicator = {false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return <Text style= {style.textStyle}>{item.name} - Age {item.age}</Text>
                }} 
            />
         </View>   
        )
}
const style = StyleSheet.create({
    textStyle:{
        marginVertical: 100,
        fontSize: 25
    }
})
export default ListScreen;