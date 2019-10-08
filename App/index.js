import { createStackNavigator, createAppContainer } from "react-navigation";

import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Login from './screens/login'
import Register from './screens/register'

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
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);
