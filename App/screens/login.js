import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Label, Button } from 'native-base';
import {fire} from './firbase'

export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  Login = async(email,password) => {

    try{

        await fire.auth().signInWithEmailAndPassword(email,password).then(function(user){
            console.log(user)
        })
        // if(firebase.auth().signInWithEmailAndPassword(email,password)){
            this.props.navigation.navigate('QuizIndex')

        // }

    }
    catch(error){
        console.log(error.toString())
    }


}
  componentDidMount() {

  }

  render() {
    return (
      <Container style={{ paddingTop: 50 }}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>

              <Input onChangeText={(username) => this.setState({ username: username })} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>

              <Input onChangeText={(password) => this.setState({ password: password })}
                secureTextEntry />
            </Item>
            <Container style={{ paddingTop: 35, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <Content >
                <Button bordered style={{ width: 160, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                  onPress={() => this.Login(this.state.username,this.state.password)}

                  rounded danger>
                  <Text style={{ textAlign: 'center' }}>Login</Text>
                </Button>
              </Content>

              <Content style={{ paddingTop: 20 }}>
                <Text onPress={() => { this.props.navigation.navigate('Register'); }}>Click to Register</Text>
              </Content>
            </Container>
          </Form>
        </Content>
      </Container>
    );
  }
}