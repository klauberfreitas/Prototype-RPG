import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";

import colors from '../styles/colors'

class HeaderHome extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.nameHome}>John Doe</Text>
        <Image
          style={styles.avatarHome}
          source={require("../assets/images/marcelorik.jpg")}
        />

        <Image
          style={styles.imageCover}
          source={require("../assets/images/avantemar.jpg")}
          blurRadius={5}
          
        />
      </View>
    );
  }  
};

export { HeaderHome }

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}> 
   <View style={styles.avatarContainer}>
     {/*    <Image
          style={styles.avatar}
          source={require("../assets/images/marcelorik.jpg")}
        /> */}
    </View>
        <Image
                  style={styles.imageCover}
           source={require("../assets/images/avantemar.jpg")}
          blurRadius={5}

        />
      </View>
    );
  }  
};

export { Header }

class HeaderMatch extends React.Component {
  render() {
    return (
      <View style={styles.headerMatch}> 
   <View style={styles.avatarContainerMatch}>
        <Image
          style={styles.avatarMatch}
          source={require("../assets/images/marcelorik.jpg")}
        />
    </View>
     
      </View>
    );
  }  
};

export { HeaderMatch }

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    transform: [{ translate: [0, 0, 1] }],

    backgroundColor: "#201D26"
  },
  container: {
    flex: 1,
    backgroundColor: "#201D26"
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
    height: "22%",
  },
  headerMatch: {
    backgroundColor: "#FF7E7E",
    
  },
  headerImage: {
    resizeMode: "stretch",
    height: "22%"
  },

  avatarHome: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 40,
    marginLeft: 20,
    transform: [{ translate: [0, 0, 1] }]
  },
  nameHome: {
    paddingTop: "25%",
    paddingLeft: "45%",
    fontSize: 20,
    color: "#fff",
    position: "absolute",
    transform: [{ translate: [0, 0, 1] }]
  },  
  imageCover: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 40,
  },
  avatarContainer: {
    marginRight: 20,
    transform: [{ translate: [0, 0, 1] }]
  },
  avatarMatch: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 60,
  },
  avatarContainerMatch: {
    marginLeft: 20,
    transform: [{ translate: [0, 0, 1] }]
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
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  topic: {
    marginHorizontal: 20,
    marginBottom: 5,
    fontSize: 12,
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: "Comfortaa-Regular"
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

