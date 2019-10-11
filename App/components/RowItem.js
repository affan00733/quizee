import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image,ImageBackground,Dimensions } from "react-native";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
  },
  text: {
    fontSize: 28,
    color: "#154360",
    // fontWeight: "600",
    fontWeight : 'bold',
    textAlign : 'center',
    paddingTop : screen.height * 0.045,
    textAlignVertical : 'center',
    // opacity : 2,
  },
  image : {
      height : screen.height / 6,
      margin : 10,
      // width : screen.width / 2,
      borderRadius  :15,
      // opacity : 0.7
  },
  imageB : {
    height : screen.height / 5,
    margin : 10,
    // width : screen.width / 2,
    borderRadius  :15
}
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[ { backgroundColor: '' }]} >
   
    <ImageBackground style ={styles.image} source={require('../assets/images.png')} >
    <Text style={styles.text}>{name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);
