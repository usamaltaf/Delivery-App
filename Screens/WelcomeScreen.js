import React, { useState,Component } from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { colors } from "../Constant/theme";
import * as Font from "expo-font";
import { AppLoading } from "expo";
//The Image URI in a constant as it will remain Same

const fetchFont = () => {
  return Font.loadAsync({
    Popbi: require("../assets/Fonts/Poppins-BoldItalic.ttf"),
    popeb: require("../assets/Fonts/Poppins-ExtraBold.ttf"),
    poppinblack: require("../assets/Fonts/Poppins-Black.ttf"),
  });
};
export default class  WelcomeScreen extends Component{
  render(){
    const [FontLoaded, setFontLoaded] = useState(false);
    const { navigation} = this.props;
  if (!FontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("error While font Loading")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <View style={style.View}>
      <Text style={style.Text}>Delivery Management</Text>
      <View style={style.ImageView}>
        <Image
          style={style.Image}
          source={require("../assets/background.png")}
        />
      </View>
      <View style={style.ButtonView}>
        <Button color="#212738" title="Login"  onPress={()=>navigation.navigate('Landingpage')} />
      </View>
      <View style={style.ButtonView}>
        <Button color="#212738" title="Signup" />
      </View>

      <View style={style.ButtonView}>
        <Button
          style={style.Button}
          color={colors.primary}
          title="Terms of Service"
          accessibilityLabel="See the terms"
          onPress={() => alert("Terms btn pressed")} //We still Need to Add Navigation
        />
      </View>
    </View>
  );
  }
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  Text: {
    flex: 0.15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "popeb",
    fontSize: 40,
    color: colors.secondary,
    textTransform: "capitalize",
  },
  ImageView: {
    flex: 0.6,
  },
  Image: {
    width: 410,
    height: 390,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowColor: "#000000",
    shadowRadius: 2,
  },
  ButtonView: {
    flex: 0.04,
    width: 215,
    height: 35,
    justifyContent: "flex-end",
    alignContent: "center",
    marginBottom: 5,
    overflow: "hidden", //If border does not show just Try this one too
    borderRadius: 18,
  },
});

