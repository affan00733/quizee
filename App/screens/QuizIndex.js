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

      <ScrollView style ={{}} >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style ={{}}>

          
          <RowItem 
            name="Emergency Measures "
            color="#36b1f0"
            textC="white"
            path={require('../assets/emer.jpeg')}
            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Emergency Measures .",
                questions: spaceQuestions,
                color: "#36b1f0"
              })
            }
          />
          <RowItem
            name="Terminologies "
            color="#799496"
            textC="white"

            path={require('../assets/emer.jpeg')}

            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Terminologies .",
                questions: westernsQuestions,
                color: "#799496"
              })
            }
          />
          <RowItem
            name="Preventive Mesures"
            color="#49475B"
            textC="white"

            path={require('../assets/emer.jpeg')}

            onPress={() =>
              this.props.navigation.navigate("Quiz", {
                title: "Preventive Measures.",
                questions: computerQuestions,
                color: "#49475B"
              })
            }
          />
        </SafeAreaView>
        <View style={{paddingTop : Dimensions.get('window').height * 0.30}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="info" size={60} color="#900"/>
           
            <Button  onPress={()=>this.logout()} style={{ backgroundColor: '#27AE60' }}>
              <Icon name="sign-out"  size={30} color="white"/>
            </Button>
            <Button  onPress={()=>this.props.navigation.navigate('Video')} style={{ backgroundColor: '#DD5144' }}>
              <Icon name="fire-extinguisher"  size={30} color="white"/>
            </Button>
            <Button  onPress={()=>this.props.navigation.navigate('News')} style={{ backgroundColor: '#B5C53E' }}>
              <Icon name="mobile"  size={30} color="white"/>
            </Button>
            <Button  onPress={()=>this.props.navigation.navigate('About')} style={{ backgroundColor: '#F1C40F' }}>
              <Icon name="users"  size={30} color="white"/>
            </Button>
            <Button  onPress={()=>this.props.navigation.navigate('Contact')} style={{ backgroundColor: '#8E44AD' }}>
              <Icon name="id-badge"  size={30} color="white"/>
            </Button>
            <Button  onPress={()=>this.props.navigation.navigate('Product')} style={{ backgroundColor: '#2E86C1' }}>
              <Icon name="shopping-cart"  size={30} color="white"/>
            </Button>
          </Fab>
        
          </View>
      </ScrollView>

    )
  }
}