import React from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

import emailValidation from '../functions/emailValidation';
import Logo from '../component/logo';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '', // store email typed text
      password: '', // store password typed text
    };

    // binding
    this.onChangeEmailAddressText = this.onChangeEmailAddressText.bind(this);
    this.onChangePasswordText = this.onChangePasswordText.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  // when typing in email address text fields
  onChangeEmailAddressText(value) {
    this.setState({emailText: value});
  }

  // when typing in password text fields
  onChangePasswordText(value) {
    this.setState({password: value});
  }

  // when press login button
  // should validate email and both text fields shouldn't empty
  onPressLoginButton() {
    if (this.state.emailText === '' || this.state.password === '') {
      // if email or password empty
      return Alert.alert('Please fill credentials!!');
    } else if (!emailValidation(this.state.emailText)) {
      // if email is not valid
      return Alert.alert('Email is Invalid!!');
    } else {
      // email is valid and not empty and password is not empty
      // navigate to Home Screen
      return this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.contentContainer}>
          <Logo />

          <View style={Styles.inputContainer}>
            <TextInput
              style={Styles.inputStyles}
              placeholder="Email address"
              placeholderTextColor="#fff"
              onChangeText={this.onChangeEmailAddressText}
            />
          </View>
          <View style={Styles.inputContainer}>
            <TextInput
              style={Styles.inputStyles}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={this.onChangePasswordText}
            />
          </View>

          <View style={Styles.loginButtonContainer}>
            <Button title="Login" onPress={this.onPressLoginButton} />
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#16243D',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  inputContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  },
  inputStyles: {
    color: '#fff',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
  },
  loginButtonContainer: {
    width: '80%',
  },
});
