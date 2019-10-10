import React, { Component } from 'react';
import {ActivityIndicator,Image,Dimensions,ToastAndroid} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Text, Label, Button, View } from 'native-base';
import {fire} from './firbase'
import WebView from 'react-native-android-fullscreen-webview-video';

const height =  Dimensions.get('window').height;
export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
        <WebView
        source={{uri: 'https://www.youtube.com/watch?v=hm8Tene9Eqc'}}
        // javaScriptEnabled={true}
        // domStorageEnabled={true}
        // style={{marginTop: 20}}
      />    
      );
  }
}