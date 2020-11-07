import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import WelcomeScreen from "../Screens/WelcomeScreen";
import Login from "../Screens/Login";
import Drop from "../Screens/Drop";
import Landingpage from "../Screens/Landingpage";
import Pick from "../Screens/Pick";
import Settings from "../Screens/Settings";
import Signup from "../Screens/Signup";
import Track from "../Screens/Track";

import { theme } from "../Constant";

const screens = createStackNavigator(
  {
    WelcomeScreen,
    Login,
    Signup,
    Landingpage,
    Pick,
    Drop,
    Settings,
    Track,
  },
  {}
);
export default createAppContainer(screens);