import React, { Component } from "react";
import { ScrollView, StatusBar, SafeAreaView,Dimensions } from "react-native";
import { Container, Header, View, Button, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
import {fire} from './firbase'
import { RowItem } from "../components/RowItem";
let email ='';
const { height, width } = Dimensions.get('window')

export default class QuizIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      email:''
    };
  }
  logout=()=>{
    fire.auth().signOut().then(function() {
      // Sign-out successful.
      // alert('succcessfull Logout')
  console.log('succcessfull Logout')
    }).catch(function(error) {
      // An error happened.
      console.log(error.toString())
    });

    this.props.navigation.navigate("Login");
  }
componentDidMount(){
  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
       email = user.email;
     console.log('email',email)
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}
  render() {
    return (

      <ScrollView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <RowItem
            name="Space"
            color="#36b1f0"
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Space",
                questions: spaceQuestions,
                color: "#36b1f0"
              })
            }
          />
          <RowItem
            name="Westerns"
            color="#799496"
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Westerns",
                questions: westernsQuestions,
                color: "#799496"
              })
            }
          />
          <RowItem
            name="Computers"
            color="#49475B"
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Computers",
                questions: computerQuestions,
                color: "#49475B"
              })
            }
          />
        </SafeAreaView>
        <View style={{paddingTop : Dimensions.get('window').height * 0.55}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="cogs" size={60} color="#900"/>
           
            <Button  onPress={()=>this.logout()} style={{ backgroundColor: '#DD5144' }}>
              <Icon name="sign-out"  size={30} color="white"/>
            </Button>
          </Fab>
          </View>
      </ScrollView>

    )
  }
}