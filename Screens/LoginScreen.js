import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TextInput,Text,TouchableOpacity,KeyboardAvoidingView,Platform} from "react-native";
import RootStackScreen from '../Navigation/RootStackNavigator';

const LoginScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Feather name="box" size={100} color="gray" style={styles.logo} />
        <View>
          <Text
            style={{
              justifyContent: "center",
              fontSize: 25,
              fontFamily: "monospace",
              marginTop: 20,
            }}
          >
            Sign In
          </Text>
        </View>
        <View style={styles.sectionStyle}>
          <Foundation
            name="mail"
            size={40}
            style={styles.imageStyle}
            color="black"
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sectionStyle}>
          <Feather
            name="lock"
            size={30}
            style={styles.imageStyle}
            color="black"
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Password"
            autoCompleteType="password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View flexDirection="column">
          <TouchableOpacity style={styles.Buttonstyle}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buttonstyle}>
            <AntDesign name="googleplus" size={30} color="yellow" />
            <Text style={styles.buttontext}> Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotlink}>
            <Text style={styles.forgotlinktext}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.oval}>
          <Text style={styles.signintext}>If you dont have account then</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 50,
    width: 300,
    borderRadius: 40,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    resizeMode: "stretch",
    alignItems: "center",
  },
  Buttonstyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderWidth: 0.5,
    borderColor: "white",
    height: 50,
    width: 300,
    borderRadius: 40,
    margin: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.9,
    elevation: 5,
    shadowRadius: 15,
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  forgotlink: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgotlinktext: {
    color: "lightblue",
    fontSize: 15,
    fontWeight: "bold",
  },
  oval: {
    width: 100,
    height: 150,
    borderRadius: 50,
    backgroundColor: "gray",
    transform: [{ scaleX: 3.7 }],
    justifyContent: "flex-end",
    marginTop: 70,
  },
  logo: {
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  signin: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  signintext: {
    fontSize: 10,
    color: "white",
    marginTop: 20,
  },
});

export default LoginScreen;
