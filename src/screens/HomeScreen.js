import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


import { HeaderHome, MyGames, MyGamesDemo, Config } from "../components/index";
import { styles } from "../styles/";

//Need rework of withNavigation since you can't export it named 
import  Menu from "../components/Menu";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderHome />
        <Config />
        <Menu />
        <Text style={styles.topic}>Meus Jogos</Text>
        <ScrollView>
          <MyGames />
          <MyGamesDemo />
        </ScrollView>
      </View>
    );
  }
}
