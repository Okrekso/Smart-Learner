import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
//import * as firebase from "firebase/app";


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
    console.log(firebase);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>It gast test</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
