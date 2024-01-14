import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default function ITGuideScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IT Guide</Text>
      <ScrollView style={styles.scrollBox}>
        <Text style={styles.message}>
          To install the app, follow these steps:
        </Text>
        <Text style={styles.listItem}>- Clone the repository onto your code editor.</Text>
        <Text style={styles.listItem}>- Ensure you have the following system requirements:</Text>
        <Text style={styles.subListItem}>   - For Windows: Windows XP, Windows 7 (32/64 bit) or higher.</Text>
        <Text style={styles.subListItem}>   - For Android: Requires Android 6.0 (Marshmallow) SDK or later.</Text>
        <Text style={styles.subListItem}>   - Minimum 4 GB RAM (8 GB RAM recommended).</Text>
        <Text style={styles.subListItem}>   - At least 10 GB of available space on the hard disk.</Text>
        <Text style={styles.subListItem}>   - An internet browser such as Chrome, Firefox, or Microsoft Edge.</Text>
        <Text style={styles.subListItem}>   - Node.js installed on your system.</Text>
        <Text style={styles.subListItem}>   - Active internet connection with a minimum speed of 512kbps.</Text>
        <Text style={styles.subListItem}>   - At least one installed code editor, such as VScode (Visual Studio Code), Android Studio, Atom, or Sublime.</Text>
        <Text style={styles.listItem}>- Open the code editor and navigate to the cloned repository.</Text>
        <Text style={styles.listItem}>- Run the command "expo start" to start the emulator.</Text>
        <Text style={styles.listItem}>- If you encounter any problems, please seek assistance.</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#16538E',
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  scrollBox: {
    maxHeight: 400,
    marginBottom: 50,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  subListItem: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#4D6473',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 80,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});