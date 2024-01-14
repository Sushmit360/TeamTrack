import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default function UserGuideScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Guide</Text>
      <ScrollView style={styles.scrollBox}>
        <Text style={styles.message}>
          To use our app, Team Tracker, follow these steps:
        </Text>
        <Text style={styles.listItem}>
          1. Login Screen:
        </Text>
        <Text style={styles.subListItem}>
          - Open the app and you will be directed to the login screen.
        </Text>
        <Text style={styles.subListItem}>
          - If you already have an account, enter your email address and password to log in.
        </Text>
        <Text style={styles.subListItem}>
          - If you don't have an account, click on the "Registered with" button to create one.
        </Text>
        <Text style={styles.subListItem}>
          - After logging in, you will be taken to the main screen of the app.
        </Text>
        <Text style={styles.listItem}>
          2. To-do List:
        </Text>
        <Text style={styles.subListItem}>
          - On the main screen, you'll see the to-do list.
        </Text>
        <Text style={styles.subListItem}>
          - To add a task, click on the "Add Task" button and enter the task name.
        </Text>
        <Text style={styles.subListItem}>
          - To edit a task, click on the task name and update the task name on the edit screen.
        </Text>
        <Text style={styles.subListItem}>
          - To delete a task, click on the task and it will be moved to a separate task list.
        </Text>
        <Text style={styles.listItem}>
          3. Reminders:
        </Text>
        <Text style={styles.subListItem}>
          - Our app also has a reminder feature.
        </Text>
        <Text style={styles.subListItem}>
          - To set a reminder, click on the "Add Reminder" button and enter the reminder details.
        </Text>
        <Text style={styles.subListItem}>
          - To edit a reminder, click on the reminder name and update the details on the edit screen.
        </Text>
        <Text style={styles.subListItem}>
          - To delete a reminder, click on the reminder and click on the "Delete" button.
        </Text>
        <Text style={styles.listItem}>
          4. Calendar:
        </Text>
        <Text style={styles.subListItem}>
          - Our app includes a calendar feature to view tasks and reminders.
        </Text>
        <Text style={styles.subListItem}>
          - Click on the "Calendar" tab to access the calendar.
        </Text>
        <Text style={styles.subListItem}>
          - Select a date to view tasks and reminders due on that day.
        </Text>
        <Text style={styles.subListItem}>
          - Switch to month view by clicking on the month name at the top.
        </Text>
        <Text style={styles.subListItem}>
          - Select a month to view tasks and reminders for that month.
        </Text>
        <Text style={styles.message}>
          Once you've read the user guide, click the "Back to Home" button to return.
        </Text>
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
    flex: 1,
    marginBottom: 50,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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