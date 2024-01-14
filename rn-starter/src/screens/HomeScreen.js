import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/download.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        
        <Text style={styles.title}>Welcome</Text>
        <Text></Text>
        <Text></Text>
  

        <Text style={styles.message}>Organizing your schedule - Reimagined</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('ToDo')}
          >
            <Text style={styles.buttonText}>Go to Todo List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('Reminder')}
          >
            <Text style={styles.buttonText}>Go to Reminders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('Calender')}
          >
            <Text style={styles.buttonText}>Go to Calendar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('UserGuide')}
          >
            <Text style={styles.buttonText}>User Guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ITGuide')}
          >
            <Text style={styles.buttonText}>IT Guide</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('privacypolicy')}
>
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
          


        <TouchableOpacity
          style={styles.fullWidthButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonTextLogin}>Login  /  Sign Up</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center',
  },
  
  logo: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: -50, 
  },
  

  title: {
    color: '#16538E',
    fontSize: 55,
    fontWeight: 'bold',
  },
  
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  squareButton: {
    backgroundColor: '#4D6473',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    width: '30%',
  },
  button: {
    backgroundColor: '#4D6473',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 15,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  background: {
    width: '100%',
    height: '100%',
  },

  fullWidthButton: {
    borderColor:'#4D6473',
    borderWidth: 4,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 10,
    width: '90%',
    opacity: '50%',
    
  },
  
  buttonTextLogin: {
    color: '#4D6473',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
    
});

