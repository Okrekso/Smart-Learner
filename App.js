import React, {Component} from 'react';
import firebase from 'firebase';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'

import LoginScreen from './app/components/auth/login/LoginScreen'
import RegistrationScreen from './app/components/auth/register/RegistrationScreen'
import WelcomeScreen from './app/components/welcome/WelcomeScreen'
import MainScreen from './app/components/main/MainScreen'

export default class App extends Component {
  componentDidMount(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAPVj_Oe5OKR1eCPtC_cRggSNl438f3ZVM",
      authDomain: "smart-learner.firebaseapp.com",
      databaseURL: "https://smart-learner.firebaseio.com",
      projectId: "smart-learner",
      storageBucket: "smart-learner.appspot.com",
      messagingSenderId: "749596686428",
      appId: "1: 749596686428: web: 6276a0ca4cdb8d8f"
    };
    // Iniialize Firebase
    firebase.initializeApp (firebaseConfig);
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  RegistrationScreen:RegistrationScreen,
  WelcomeScreen:WelcomeScreen,
  MainScreen: MainScreen
)};

const AppNavigator = createAppContainer(AppSwitchNavigator);