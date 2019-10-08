import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, ToastAndroid, ScrollView } from "react-native";
// import { Toast, Container, Content } from 'native-base'
import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";
import { fire } from './firbase'

// import qs from 'qs'
import RNSmtpMailer from "react-native-smtp-mailer";



let emailN = '';
// const tiN = this.props.navigation.getParam("title");
let index = [];
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    title: this.props.navigation.getParam("title"),
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    ques: this.props.navigation.getParam("questions", []),
    exp: '',
    a: 'aaa',
    visible: false
  };

  componentDidMount() {
    index = this.state.ques;
    // this.setState({Qindex : index.length});
    console.log(index.length)
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        emailN = user.email;
        console.log('email', emailN)
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });

  }
  answer = (correct, ex, ans) => {
    console.log(ex);
    this.setState(
      state => {
        const nextState = { answered: true };


        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;


      },
      () => {
        setTimeout(() => this.nextQuestion(ex, ans), 750);
      }
    );


  };
  handleEmail = (email,title) => {


    RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
      username: "affanmohhd@gmail.com",
      password: "8097862247",
      from: "affanmohhd@gmail.com",
      recipients: email,
      bcc: [email], //completely optional
      subject: "ABL - FASSI",
      htmlBody: `<h1>QUIZZEE</h1><p> user :- ${email} <br/> your quiz of section :- ${title} is been completed <br/>  </p>`,
      attachmentPaths: [
      ],
      attachmentNames: [
      ], //only used in android, these are renames of original files. in ios filenames will be same as specified in path. In ios-only application, leave it empty: attachmentNames:[]
      attachmentTypes: ["img", "txt", "csv", "pdf", "zip", "img"] //needed for android, in ios-only application, leave it empty: attachmentTypes:[]. Generally every img(either jpg, png, jpeg or whatever) file should have "img", and every other file should have its corresponding type.

    })
      .then(success => console.log(success))
      .catch(err => console.log(err));

  }
  nextQuestion = (ex, ans) => {
    alert(`Answer :-  ${ans} 

explanation :-  ${ex}
    `);

    if (index.length - 1 == this.state.activeQuestionIndex) {
      this.setState(state => {
        const nextIndex = state.activeQuestionIndex;

        if (nextIndex >= state.totalCount) {
          this.props.navigation.popToTop();
        }

        return {
          activeQuestionIndex: nextIndex,
          answered: false
        };
      });

      ToastAndroid.showWithGravityAndOffset(
        'Finished this portion',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      this.handleEmail(emailN,this.state.title);
      this.props.navigation.navigate('QuizIndex');
    }
    else {
      this.setState(state => {
        const nextIndex = state.activeQuestionIndex + 1;

        if (nextIndex >= state.totalCount) {
          this.props.navigation.popToTop();
        }

        return {
          activeQuestionIndex: nextIndex,
          answered: false
        };
      });
    }

  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    // console.log(questions)
    const question = questions[this.state.activeQuestionIndex];

    return (
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            {/* {this.setState({exp:question.ex})}; */}

            <ButtonContainer>
              {question.answers.map(answer => (

                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct, question.ex, question.corAns)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>

        </SafeAreaView>

        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />

      </ScrollView>
    );
  }
}

export default Quiz;
