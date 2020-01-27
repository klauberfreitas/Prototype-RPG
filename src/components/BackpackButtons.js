import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

class BackpackImages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/guerra.png")}
            />
          </TouchableOpacity>

     
        </View>

        <ScrollView>
          <View style={styles.rowImages}>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
            <TouchableOpacity style={styles.card}></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "space-between"
  },

  button: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#9030DE",
    marginHorizontal: 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 20,
    height: 20
  },
  rowImages: {
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap"
 
  },
  card: {
    height: 100,
    width: 135,
    borderRadius: 5,
    backgroundColor: "#9030DE",
    marginHorizontal: 2.5,
    marginVertical: 2.5
  }
});

export { BackpackImages  };
