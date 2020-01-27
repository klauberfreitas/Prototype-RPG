import React, { Fragment, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Backdrop } from "../constants";

const Config = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => setVisible(true)}
        >
          <Image
            style={styles.avatarMenu}
            source={require("../assets/images/icons/menu.png")}
          />
          <Text style={styles.menuLabel}></Text>
        </TouchableOpacity>
      </View>

      <Backdrop
        style={styles.backDrop}
        visible={visible}
        handleClose={handleClose}
        handleOpen={() => setVisible(true)}
        closedHeight={32}
      >
        <View>
          <Text style={styles.dropTitle}>Configurações</Text>
      {/*     <View style={styles.row}>
            <Image
              style={styles.avatarMenuOwner}
              source={require("../assets/images/marcelorik.jpg")}
            />
            <View>
              <Text style={[styles.title]}>Minha Conta</Text>
              <Text style={[styles.hint]}>Configurações Pessoais</Text>
            </View>
          </View> */}
          <View style={styles.row}>
            <Icon style={styles.icon} name={"user"} />
            <View>
              <Text style={[styles.title]}>Minha Conta</Text>
              <Text style={[styles.hint]}>Configurações Pessoais</Text>
            </View>
          </View>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.row}>
            <Icon style={styles.icon} name={"info-circle"} />
            <View>
              <Text style={[styles.title]}>Geral</Text>
              <Text style={[styles.hint]}>Notificações/ Som</Text>
            </View>
          </TouchableOpacity>

        </View>
      </Backdrop>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",

  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  icon: {
    fontSize: 38,

    paddingHorizontal: 15,
    color: "#FFFB80"
  },

  avatarMenuOwner: {
    width: 60,
    height: 60,
    borderRadius: 65 / 2,
    borderWidth: 0,
    borderColor: "white",
    marginLeft: 15,
    marginVertical: 15
  },

  dropTitle: {
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 20,
  },

  title: {
    fontFamily: "Comfortaa-Regular",
    paddingLeft: 10,
    textTransform: "uppercase",
    fontSize: 18,
    color: "rgba(255,255,255,1)"
  },

  hint: {
    paddingLeft: 10,
    fontSize: 10,
    lineHeight: 25,
    color: "#fff",
    transform: [{ translate: [0, 0, 1] }]
  },

  cardImage: {
    height: "25%",
    width: "35%",
    position: "absolute",
    alignSelf: "flex-end"
  },

  backDrop: {
    backgroundColor: "#F9B44F"
  },
  buttonMenu: {
    justifyContent: "center",
    alignItems: "center"
  },
  menuLabel: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase"
  },
  avatarMenu: {
    width: 30,
    height: 30,

    borderColor: "white"
  },
  containerMenu: {
    flexDirection: "row",
    alignSelf: "flex-end",
    top: 80,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },

  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#FF7E7E"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9B44F"
  },
  buttonStyle: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#fff"
  },
  cardStyle: {
    marginTop: 12,
    backgroundColor: "#FF7D8B",
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textWhite: {
    color: "#fff"
  },
  textCenter: {
    textAlign: "center"
  },
  actionButton: {
    width: "100%",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 12
  }
});

export { Config };
