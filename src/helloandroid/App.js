import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Email address");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text style={styles.text}>ABC Company</Text>
      </View>
      <View style={styles.button_view}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        <Button 
          title="Verify"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    margin: 50,
    textAlign: "center"
  },
  title_view: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 25
  },  
  button_view: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    margin: 25
  }
});

export default UselessTextInput;