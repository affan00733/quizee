import { createStackNavigator,createSwitchNavigator, createAppContainer } from "react-navigation";
import React ,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Login from './screens/login'
import Register from './screens/register'
import Video from './screens/video'
import About from './screens/about'
import Contact from './screens/contact'
import Product from './screens/product'
import News from'./screens/news'

const MainStack = createStackNavigator({
  Login : {
    screen : Login,
    navigationOptions:{
      headerTransparent : true
    }
  },
  Register : {
    screen : Register,
    navigationOptions:{
      headerTransparent : true
    }
  }
  ,
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes  .",
      // headerTransparent : true
      

    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      // headerTransparent : true

      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  Video : {
    screen : Video,
    navigationOptions: {

      headerTitle: "Fire Extinguisher",

      headerTransparent : false

    }
  },
  About : {
    screen : About,
    navigationOptions: {

      headerTitle: "About Us .",

      headerTransparent : false

    }
  },
  Contact : {
    screen : Contact,
    navigationOptions: {

      headerTitle: "Contact .",

      headerTransparent : false

    }
  },
  Product : {
    screen : Product,
    navigationOptions: {

      headerTitle: "Product .",

      headerTransparent : false

    }
  },
  News : {
    screen : News,
    navigationOptions: {

      headerTitle: "News .",

      headerTransparent : false

    }
  }
});

// const Video1 = createStackNavigator({
//   Video : {
//     screen : Video,
//     navigationOptions: {
//       headerTitle: "Fire Extinguisher",

//       headerTransparent : false

//     }
//   }
// })

const Sw = createSwitchNavigator({
  MainStack : {
    screen : MainStack
  },
  // Video1  :{
  //   screen : Video1
  // }
})


const St = createAppContainer(Sw);

export default class App extends Component {

  componentDidMount(){
    SplashScreen.hide();
  }
  render(){
    return(
      <St />
    )
  }
}