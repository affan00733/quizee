import React, { Component } from 'react';
import {ActivityIndicator,Image,Dimensions,ToastAndroid} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Text, Label,View, Button } from 'native-base';
import {fire} from './firbase'
const height =  Dimensions.get('window').height;

export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  register = () => {
    const { username, password } = this.state
    console.log(username, password)
    try {

      if (this.state.password.length < 6) {
          alert("Please enter atleast 6 characters")
          return;
      }

      else{

      fire.auth().createUserWithEmailAndPassword(username, password)
      }
      this.setState ({username : '',password : ''})
  }
  catch (error) {
      alert('error')
  }
  }
  componentDidMount() {

  }
  render() {
    return (
      <Container style={{ paddingTop: 50 }}>
        <Content>
          <Form>
          <View style ={{alignItems : 'center'}}>
              <Image style={{justifyContent : 'center',alignContent : 'center',alignItems : 'center'}} source={require('../assets/fire.png')}/>
              </View>
            <Item style={{backgroundColor :'#ECF0F1',borderRadius : 50,paddingBottom : 5}} floatingLabel>
              <Label style ={{paddingLeft : 15,color : 'orange'}}>Email id</Label>

              <Input value ={this.state.username} onChangeText={(username) => this.setState({ username: username })} />
            </Item>
            <Item style={{backgroundColor :'#ECF0F1',borderRadius : 50,paddingBottom : 5}} floatingLabel>
              <Label style ={{paddingLeft : 15,color : 'orange'}}>Password</Label>

              <Input value={this.state.password} onChangeText={(password) => this.setState({ password: password })}
                secureTextEntry />
            </Item>
            <View style ={{justifyContent : 'center',alignItems : 'center',paddingTop: height * 0.1}}>
                <Button bordered style={{ width: 160, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                  onPress={() => this.register(this.state.username,this.state.password)}

                  rounded danger>
                  <Text style={{ textAlign: 'center' }}>Register</Text>
                </Button>
                </View>

                <View style ={{alignItems:'center',paddingTop : 25}}>
                <Text style={{fontWeight : 'bold'}} onPress={() => { this.props.navigation.navigate('Login'); }}>Click to Login</Text>
              </View>
            
          </Form>
        </Content>
      </Container>
    );
  }
}