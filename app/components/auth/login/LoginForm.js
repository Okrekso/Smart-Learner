import React, {Component} from 'react';
import { StyleSheet} from 'react-native';


export default class App extends Component {
  render() {
      return (
        
      );
    }
  }

  const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen:LoadingScreen,
    LoginScreen:LoginScreen,
    WelcomeScreen:WelcomeScreen,
    MainScreen: MainScreen
  )}
  });
  })

const style = StyleSheet.create({
  container : {
    backgroundColor : '#fff',
    justifyContent : 'center',
    padding : 10
  },
});