import React,{useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "./component/SearchBar";
import yelp from "../api/yelp";

const SearchScreen =()=> {
    const [term, setTerm] = useState('');
    const [results, SetResults] = useState([]);

    const searchApi = async (searchTerm) => {
        const response = await yelp.get('/search', {
            params:{
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        SetResults(response.data.businesses);
    }
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=> searchApi(term)}
            />
            <Text>this is Search</Text>
            <Text>We have found {results.length}</Text>
        </View>
    )
};


export default SearchScreen

const styles = StyleSheet.create({

});
