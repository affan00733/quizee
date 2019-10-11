import React, { Component } from 'react';
import { ActivityIndicator, WebView,Image, Dimensions, ToastAndroid, View, ScrollView, SafeAreaView } from 'react-native'

export default class About extends Component{


    render(){
        return(
            <WebView
            source={{uri: 'https://www.safelincs.co.uk/'}}
            style={{}}
          />
        )
    }
}