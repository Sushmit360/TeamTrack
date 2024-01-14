import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';


function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = async () => {
    if(!email || !password){
      alert("Please add all the fields");
      return 
    } 
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login')
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }

  return (
    <ImageBackground
    source={require('./assets/download.jpeg')}
    style={styles.background}
    >
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button style={styles.button} onPress={() => userRegister()}>Register</Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  button: {
    borderColor: '#4D6473',
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 15,
    margin: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default RegisterScreen;
