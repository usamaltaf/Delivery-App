import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

let customFonts = {
  Popbi: require("../assets/Fonts/Poppins-BoldItalic.ttf"),
  Popeb: require("../assets/Fonts/Poppins-ExtraBold.ttf"),
};

export default class font extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return customFonts;
    } else {
      return <AppLoading />;
    }
  }
}
