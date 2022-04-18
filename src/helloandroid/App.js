import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
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
          title="Verify"
          onPress={() => navigation.navigate('Details')}></Button>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const UselessTextInput = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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