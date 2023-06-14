import React from "react";
import { Text, StyleSheet, View, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        title="Go to ListScreen"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to ComponentScreen"
        onPress={() => navigation.navigate('Component')}
      />
       <Button 
        title="Go to ImageScreen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to CountScreen"
        onPress={() => navigation.navigate('Count')}
      />
      <Button 
        title="Go to ColorScreen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
      title="Go to SquareScreen"
      onPress={() => navigation.navigate('Square')}
    />
    <Button 
      title="Go to TextScreen"
      onPress={() => navigation.navigate('Text')}
    />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
