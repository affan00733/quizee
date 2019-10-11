import React, { Component } from 'react';
import {ActivityIndicator,Image,Dimensions,ToastAndroid,StyleSheet} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Text, Label, Button, View } from 'native-base';
import {fire} from './firbase'
const height =  Dimensions.get('window').height;
export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      authenticating : false

    }
  }
  Login = async(email,password) => {
    this.setState({authenticating : true})
    try{

        await fire.auth().signInWithEmailAndPassword(email,password).then(user => this.setState({
          authenticating: false,
          
        }))
       
        // if(firebase.auth().signInWithEmailAndPassword(email,password)){
            this.props.navigation.navigate('QuizIndex')

        // }
        this.setState ({username : '',password : ''})

    }
    catch(error){
     
        alert('Invalid Credentials !!');
        this.setState({
          authenticating : false
        })
    }


}
  componentDidMount() {

  }

  render() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <Container style={{}}>
        <Content>
          <Form>
            <View style ={{alignItems : 'center'}}>
              <Image style={{justifyContent : 'center',alignContent : 'center',alignItems : 'center'}} source={require('../assets/fire.png')}/>
              </View>
            <Item style={{backgroundColor :'#ECF0F1',borderRadius : 50,paddingBottom : 5}} floatingLabel>
              <Label style ={{paddingLeft : 15,color : '#C0392B'}}>Email id</Label>

              <Input value = {this.state.username} onChangeText={(username) => this.setState({ username: username })} />
            </Item>
            <Item style={{backgroundColor :'#ECF0F1',borderRadius : 50,paddingBottom : 5}} floatingLabel>
              <Label style ={{paddingLeft : 15,color : '#C0392B'}}>Password</Label>

              <Input value = {this.state.password} onChangeText={(password) => this.setState({ password: password })}
                secureTextEntry />
            </Item>
            <View style ={{justifyContent : 'center',alignItems : 'center',paddingTop: height * 0.1}}>
                <Button bordered style={{ width: 160, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                  onPress={() => this.Login(this.state.username,this.state.password)}

                  rounded danger>
                  <Text style={{ textAlign: 'center' }}>Login</Text>
                </Button>
                </View>

                <View style ={{alignItems:'center',paddingTop : 25}}>
                <Text style={{fontWeight : 'bold'}} onPress={() => { this.props.navigation.navigate('Register'); }}>Click to Register</Text>
                </View>
          </Form>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    justifyContent : 'center',
    alignContent : 'center',
    // alignItems : "center"
    
  }
});