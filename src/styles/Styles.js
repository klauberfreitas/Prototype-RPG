import { StyleSheet } from "react-native";
/* Importa as cores do aplicativo. As declare como: COLORS.NOMEDACOR */

import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT,
  },
  row: {
    top: 50,
    alignItems: "center"
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  title: {
    fontSize: 32,
    textTransform: "uppercase",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginTop: 21,
    marginBottom: 10
  },
  titleTip: {
    fontSize: 48,
    textTransform: "uppercase",
    color: "#3ECE96"
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 5,
  },
  forgotPassword: {
    color: "#fff",
    fontSize: 14,
    marginTop: 21,
    marginBottom: 10
  },
  newAccount: {
    color: "#fff",
    fontSize: 14
  },
  createAccount: {
    color: "#fff",
    fontSize: 14,
    color: "#F9B44F"
  },
  button: {
    width: "80%",
    marginTop: 10,
    height: 50,
    backgroundColor: "#F9B44F",
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  socialContainer: {},
  socialRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center"
  },
  socialSymbol: {
    fontSize: 28
  },
  socialIcons: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#F9B44F",
    marginHorizontal: 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  rowAccount: {
    alignContent: "space-around",
    flexDirection: "row",
    marginTop: 15
  },
  inputContainer: {
    paddingHorizontal: 20,
    height: 42,
    width: "80%",
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: colors.WHITE_OPAQUE,
    marginTop: 10,
    
  },
  input: {
    paddingHorizontal: 20,
    height: 42,
    width: "80%",
    marginTop: 5,
    borderColor: null,
    borderWidth: 0,
    color: "#fff",
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: colors.WHITE_OPAQUE,
  },
  inputFlex: {
    color: colors.BLACK_OPAQUE,
    fontSize: 16,
    
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
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 40,
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
  },
  
});


export default styles;




