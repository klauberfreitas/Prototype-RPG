import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
  {
    title: "Jogadores",
    content: "Lorem ipsum..."
  }
];

class DropDown extends React.Component {
  state = {
    activeSections: []
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
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
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={[styles.test]}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

export { DropDown };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight
  },
  test: {
    paddingHorizontal: 2.5,
    width: "40%"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    transform: [{ translate: [0, 0, 1] }]
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    color: "#fff"
  },
  header: {
    //backgroundColor: '#9030DE',
    backgroundColor: "#3AB183",

    padding: 10
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textTransform: "uppercase"
  },
  content: {
    height: 80,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: 'rgba(144,48,222,0.6)',
    backgroundColor: "rgba(58,177,131,0.6)"
  },
  avatarContainer: {
    flexDirection: "row",
    marginHorizontal: 15
  },
  avatarMenu: {
    width: 35,
    height: 35,
    borderRadius: 65 / 2,
    borderWidth: 0,
    borderColor: "white",
    marginHorizontal: 2.5
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8
  }
});
