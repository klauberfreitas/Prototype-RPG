import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { Header, BackpackImages } from "../components/index";

export default class BackpackScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTitle: "Bolsa"
  };
  render() {
    const { state, goBack } = this.props.navigation;
    const params = state.params || {};

    return (
      <View style={styles.container}>
        <Header />
        <BackpackImages />
      </View>
    );
  }
}

/* 
function DevelopmentModeNotice() {
if (__DEV__) {
const learnMoreButton = (
  <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
    Learn more
  </Text>
);

return (
  <Text style={styles.developmentModeText}>
    Development mode is enabled: your app will be slower but you can use
    useful development tools. {learnMoreButton}
  </Text>
);
} else {
return (
  <Text style={styles.developmentModeText}>
    You are not in development mode: your app will run at full speed.
  </Text>
);
}
}

function handleLearnMorePress() {
WebBrowser.openBrowserAsync(
"https://docs.expo.io/versions/latest/workflow/development-mode/"
);
}

function handleHelpPress() {
WebBrowser.openBrowserAsync(
"https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
);
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201D26"
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    transform: [{ translate: [0, 0, 1] }],

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
    fontSize: 14,
    textTransform: "uppercase",
    color: "#fff"
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
