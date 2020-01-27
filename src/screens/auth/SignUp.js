import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/Styles";

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTitle: null
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/valor.jpg")}
          style={[styles.background]}
          blurRadius={5}
        >
          <View style={styles.row}>
            <Text style={styles.title}>Start your journey</Text>
            <Text style={styles.titleTip}></Text>
            <Image
              style={styles.logo}
              source={require("../../assets/images/logo.png")}
            />

            <Text style={styles.text}>
            Choose one of the options, and you
               {"\n"} can always login from it.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.textCreate}>Sign up with email</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword}>
            Or sign up with social media:
            </Text>
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
              <Text style={styles.newAccount}>Already have an account?</Text>
              <TouchableOpacity
                 onPress={() => this.props.navigation.navigate("SignIn")}>
                <Text style={styles.createAccount}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
