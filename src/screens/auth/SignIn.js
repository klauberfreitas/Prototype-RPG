import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";

import PasswordInputView from "../../components/PasswordInputView";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles, colors } from "../../styles/";

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTitle: null
  };

  constructor(props) {
    super(props);
    // other constructor related code
  }
  handlePassword = password => {
    let newState = this.state;
    this.setState(newState);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback>
          <ImageBackground
            source={require("../../assets/images/valor.jpg")}
            style={[styles.background]}
            blurRadius={5}
          >
            <View style={styles.row}>
              <Text style={styles.title}>Welcome back!</Text>
              <Text style={styles.titleTip}></Text>
              <Image
                style={styles.logo}
                source={require("../../assets/images/logo.png")}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputFlex}
                  placeholder="Usuário"
                  placeholderTextColor={colors.LightBLACK}
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={false}
                  blurOnSubmit={false}
                  keyboardType={"default"}
                  keyboardAppearance={"dark"}
                  onSubmitEditing={() => {
                    this.secondInput.focus();
                  }}
                  onChangeText={value => this.onChangeText("username", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputFlex}
                  placeholder="Senha"
                  placeholderTextColor={colors.LightBLACK}
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  blurOnSubmit={true}
                  keyboardType={"email-address"}
                  keyboardAppearance={"dark"}
                  ref={input => {
                    this.secondInput = input;
                  }}
                  onChangeText={value => this.onChangeText("password", value)}
                />
              </View>

              {/* 
                <PasswordInputView
                  ref={passwordView => {
                    this.passwordView = passwordView;
                  }}
                  callback={this.handlePassword}
                  label={"Password"}
                /> */}

              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Text style={styles.textCreate}>Login</Text>
              </TouchableOpacity>
              <View style={styles.socialContainer}>
                <View style={styles.socialRow}>
                  <TouchableOpacity style={styles.socialIcons}>
                    <Icon style={styles.socialSymbol} name={"google"} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcons}>
                    <Icon style={styles.socialSymbol} name={"facebook"} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcons}>
                    <Icon style={styles.socialSymbol} name={"twitter"} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.rowAccount}>
                <Text style={styles.newAccount}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("CreateAccount")
                  }
                >
                  <Text style={styles.createAccount}> Sign up!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
