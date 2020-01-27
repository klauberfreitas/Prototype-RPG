import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ImageBackground
} from "react-native";

import { Header, Config } from "../components/index";
import Menu from "../components/Menu";

export default class NewMatchScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTitle: "Criar partida"
  };

  render() {
    const { state, goBack } = this.props.navigation;
    const params = state.params || {};

    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.group}>
          <Text style={styles.topic}>Título</Text>
          <TextInput
            placeholder="O Duque, a Rosa e o Beholder "
            placeholderTextColor="rgba(255,255,255,0.4)"
            editable
            maxLength={40}
            style={styles.input}
          />
          <View style={styles.line} />
        </View>

        <View style={styles.group}>
          <Text style={styles.topic}>Mapa</Text>
          <ImageBackground
            source={require("../assets/images/arkal.jpg")}
            style={[styles.card]}
          >
            <View>
              <Text style={[styles.role, styles.shadow]}>Mestre</Text>
              <Text style={[styles.textCard, styles.shadow]}>
                Fase 7 - Arkal
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.line} />
        </View>

        <View style={styles.group}>
          <Text style={styles.topic}>Convidar amigos</Text>
          <View style={styles.rowPlayers}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.iconPlayers}
                source={require("../assets/images/icons/guerra.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.iconPlayers}
                source={require("../assets/images/icons/guerra.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.iconPlayers}
                source={require("../assets/images/icons/guerra.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.iconPlayers}
                source={require("../assets/images/icons/guerra.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.iconPlayers}
                source={require("../assets/images/icons/guerra.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonCreate}>
            <Text style={styles.textCreate}>INICIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201D26"
  },

  textCreate: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase"
  },
  role: {
    fontFamily: "Comfortaa-Regular",
    paddingTop: 20,
    paddingLeft: 10,
    textTransform: "uppercase",
    fontSize: 18,
    color: "rgba(255,255,255,0.7)"
  },
  textCard: {
    paddingLeft: 10,
    fontSize: 24,
    lineHeight: 25,
    color: "#fff",
    transform: [{ translate: [0, 0, 1] }]
  },
  buttonCreate: {
    width: 140,
    height: 60,
    backgroundColor: "#FF4B4B",
    borderRadius: 10,
    justifyContent: "flex-end",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#201D26"
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    transform: [{ translate: [0, 0, 1] }]
  },
  topic: {
    fontSize: 14,
    //textTransform: "",
    color: "#fff",
    marginTop: 10
  },
  group: {
    marginHorizontal: 20
  },
  rowPlayers: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center"
  },
  iconPlayers: {
    width: 20,
    height: 20
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#9030DE",
    marginHorizontal: 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)"
  },

  input: {
    height: 40,
    marginHorizontal: 10,
    borderColor: null,
    borderWidth: 0,
    color: "#fff",
    fontSize: 18
  },
  card: {
    marginHorizontal: 10,
    height: 130,
    borderRadius: 15 / 2,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#000"
  },

  avatarMenu: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginHorizontal: 4,
    borderRadius: 65 / 2,
    justifyContent: "space-between"
  },
  info: {
    fontSize: 12,
    color: "#FF7E7E",
    marginTop: "15%",
    marginHorizontal: 4,
    justifyContent: "space-between"
  },

  header: {
    backgroundColor: "#FF7E7E",
    height: "22%"
  },
  headerImage: {
    resizeMode: "stretch",
    height: "22%"
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 40,
    marginLeft: 20
  },
  name: {
    paddingTop: "25%",
    paddingLeft: "45%",
    fontSize: 20,
    color: "#fff",
    position: "absolute",
    transform: [{ translate: [0, 0, 1] }]
  },
  icon: {
    alignSelf: "flex-end"
  },
  buttonMenu: {
    justifyContent: "center",
    alignItems: "center"
  },
  menuLabel: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 10,
    textTransform: "uppercase"
  },
  avatarMenu: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderColor: "white"
  },
  containerMenu: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 20,

    justifyContent: "center",
    alignItems: "center"
  }
});
