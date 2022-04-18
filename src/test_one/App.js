import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button 
        title="Verify"
        style={styles.button}></Button>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    height: 25,
    width: 50,
    padding: 10
  }
});

export default UselessTextInput;