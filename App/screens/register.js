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
  register = () => {
    const { username, password } = this.state
    console.log(username, password)
    try {

      if (this.state.password.length < 6) {
          alert("Please enter atleast 6 characters")
          return;
      }

      fire.auth().createUserWithEmailAndPassword(username, password)
  }
  catch (error) {
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
                  onPress={() => this.register()}
                  rounded danger>
                  <Text style={{ textAlign: 'center' }}>Register</Text>
                </Button>
              </Content>

              <Content style={{ paddingTop: 20 }}>
                <Text onPress={() => { this.props.navigation.navigate('Login'); }}>Click to Login</Text>
              </Content>
            </Container>
          </Form>
        </Content>
      </Container>
    );
  }
}