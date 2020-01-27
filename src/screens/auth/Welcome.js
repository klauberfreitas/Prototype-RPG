import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/Styles";

export default class WelcomeScreen extends React.Component {
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
      
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              <Text style={styles.textCreate}>Sign in</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.textCreate}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>
            Or use a social media:
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

          </View>
        </ImageBackground>
      </View>
    );
  }
}
