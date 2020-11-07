import react from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
class Button extends react.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 0.05,
    width: 215,
    height: 35,
    justifyContent: "flex-end",
    marginBottom: 10,
    overflow: "hidden", //If border does not show just Try this one too
    borderRadius: 18,
  },
  text: {},
});

export { Button };
