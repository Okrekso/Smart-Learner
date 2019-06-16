import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import firebase from 'firebase';
import { Container, Content, Header, Form, Input, Button, Label, Item} from 'native-base'


export default class App extends Component {
    
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  loginUser = (email, password) =>{
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
        console.log(user)
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }
  signUpUser = (email, password) => {
    try{
      if(this.state.password.length < 6){
        alert("Please enter atlaest 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  async loginWithFacebook(){
    try{
    //const{type,token} = await Expo.Facebook.logInWithReadPeadPermissionsAsync
    //('845279615856774',{permissions: ['public_profile']})

    if(type == 'success'){
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }
  catch(error){
    console.log(error.toString())
  }
  }



  render() {
      return (
        <Container style={style.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}/>
              
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
                autoCorrect={false}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({password})}/>
              
            </Item>
            <Button
              style={{marginTop : 10}}
              full
              rounded
              success
              onPress={() => this.loginUser(this.state.email,this.state.password)}>
                <Label>Login</Label>
            </Button>
            <Button
              style={{marginTop : 10}}
              full
              rounded
              primary
              onPress={() => this.signUpUser(this.state.email,this.state.password)}>
                <Label style={{color : 'white'}}>Sign Up</Label>
            </Button>
            <Button
              style={{marginTop : 10}}
              full
              rounded
              primary
              onPress={() => this.loginWithFacebook()}>
                <Label style={{color : 'white'}}>Login With Facebook</Label>
            </Button>
          </Form>
        </Container>
      );
    }
  }

const style = StyleSheet.create({
  container : {
    backgroundColor : '#fff',
    justifyContent : 'center',
    padding : 10
  },
});