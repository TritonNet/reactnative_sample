import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TextInput, Button, Text, PixelRatio, findNodeHandle, UIManager, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RNIdentityViewManager } from './AReactIdentityViewManager';

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Email address");
  
  return (
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text style={styles.title}>ABC Company</Text>
      </View>
      <View style={styles.button_view}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Button title="Verify" onPress={() => navigation.navigate('Verify', { name: 'Jane' })}/>
      </View>
    </View>
  );
};
const VerifyScreen = ({ navigation, route }) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.initialize();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.title_view}>        
                <Text style={styles.subtitle}>Verify your identity</Text>
                <RNIdentityViewManager ref={ref} />
            </View>
        </View>
    );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Verify" component={VerifyScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const dimentions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  identityView:{
    height: dimentions.height,
    width: dimentions.width
  },
  title: {
    fontSize: 50,
    margin: 50,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 25,
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

export default App;