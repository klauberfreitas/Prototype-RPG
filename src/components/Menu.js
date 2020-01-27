import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";

import colors from "../styles/colors";

class Menu extends React.Component {
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
           <TouchableOpacity
          style={styles.row}
          onPress={() => this.props.navigation.navigate("NewMatch")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/images/icons/criar.png")}
          />
          <Text style={styles.label}>Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.props.navigation.navigate("Match")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/images/icons/jogos.png")}
          />
          <Text style={styles.label}>Jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.props.navigation.navigate("")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/images/icons/contatos.png")}
          />
          <Text style={styles.label}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.props.navigation.navigate("Backpack")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/images/icons/bolsa.png")}
          />
          <Text style={styles.label}>Bolsa</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  _onPressButton = () => {
    this.props.navigation.navigate("Backpack");
  };
}

export default withNavigation(Menu);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 20
  },
  row: {
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    color:   colors.WHITE,
    fontSize: 8,
    textTransform: "uppercase",
    marginHorizontal: 3,
    fontFamily: "Comfortaa-Regular",
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
    borderColor: colors.WHITE,
  }
});


