import { createStackNavigator, createAppContainer } from "react-navigation";
import React ,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Login from './screens/login'
import Register from './screens/register'
import Video from './screens/video'
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
      headerTitle: "Quizzes",
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
    screen : Video
  }
});

const St = createAppContainer(MainStack);

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