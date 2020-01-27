import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";
import WelcomeScreen from "../screens/auth/Welcome";
import SignUpScreen from "../screens/auth/SignUp";
import SignInScreen from "../screens/auth/SignIn";

import HomeScreen from "../screens/HomeScreen";
import NewMatchScreen from "../screens/NewMatchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BackpackScreen from "../screens/BackpackScreen";
import MatchScreen from "../screens/MatchScreen";


const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen,

});

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Backpack: BackpackScreen,
    NewMatch: NewMatchScreen,
    Match: MatchScreen
  },
  {
    headerMode: "screen",
    headerLayoutPreset: "left"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Authloading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: "Authloading"
    }
  )
);
