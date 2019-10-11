import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image,ImageBackground,Dimensions } from "react-native";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  row: {
    margin : 4,
    paddingTop : 1,
    height : screen.height / 4.5,
    // borderColor : 'black',
    // borderWidth : 3

  },
  text: {
    fontSize: 28,
    color: "#154360",
    // fontWeight: "600",
    fontWeight : 'bold',
    textAlign : 'center',
    paddingTop : screen.height * 0.075,
    textAlignVertical : 'center',
    // opacity : 2,
  },
  image : {
    height : screen.height / 4.5,
      margin : 10,
      // width : screen.width / 2,
      borderRadius  :15,
      // opacity : 0.7
  },
  imageB : {
    height : screen.height * 0.5,
    margin : 10,
    width : screen.width / 2,
    borderRadius  :15
}
});

export const RowItem = ({ onPress = () => {}, name,color,textC,path }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[ styles.row, { backgroundColor: '' }]} >
   
    <ImageBackground   style ={styles.image} source={path} >
    <Text style={[styles.text,{color : textC}]}>{name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);
