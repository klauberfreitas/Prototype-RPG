import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class MyGames extends React.Component {
  render() {
    return (
      <ImageBackground
      source={require("../assets/images/arkal.jpg")}
      style={[styles.card]}>
        <View style={styles.row}>
          <Image
            style={styles.avatarMenuOwner}
            source={require("../assets/images/marcelorik.jpg")}
          />
          <View>
            <Text style={[styles.role, styles.shadow]}>Mestre</Text>
            <Text style={[styles.textCard, styles.shadow]}>Fase 7 - Arkal</Text>
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/marcelorik.jpg")}
          />
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/marcelorik.jpg")}
          />
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/marcelorik.jpg")}
          />
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/marcelorik.jpg")}
          />
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/marcelorik.jpg")}
          />
        </View>  
      </ImageBackground>
    );
  }
}

export { MyGames }

const styles = StyleSheet.create({
  container: {
flex: 1,
    height: '100%',
  },
  row: {
    flexDirection: "row",
  },
  avatarContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  avatarMenu: {
    width: 40,
    height: 40,
    borderRadius: 65 / 2,
    borderWidth: 0,
    borderColor: "white",
    marginLeft: 5
  },
  avatarMenuOwner: {
    width: 60,
    height: 60,
    borderRadius: 65 / 2,
    borderWidth: 0,
    borderColor: "white",
    marginLeft: 15,
    marginVertical: 15,
  },
  card: {
    marginHorizontal: 20,
    height: 150,
    borderRadius: 15 / 2,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#000", 
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
    transform: [{ translate: [0, 0, 1] }],

  },
  cardDetail: {
    marginHorizontal: 5,
    marginTop: "1%",
    width: "25%",
    height: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  cardImage: {
    height: "25%",
    width: "35%",
    position: "absolute",
    alignSelf: "flex-end",
  },
  shadow: {
    color: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textShadowColor: '#000',
  },
});
