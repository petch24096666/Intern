import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
        <Feather name="search" style={styles.icon}/>
        <TextInput style={styles.input}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#F0EEEE",
        height:50,
        borderRadius:10,
        marginHorizontal:15,
        marginTop:15,
        flexDirection: 'row'
    },
    input:{
        flex:1,
        fontSize:18
    },
    icon:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10
    }
})
export default SearchBar;