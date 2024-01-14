// CompletedTasksScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedTasksScreen = ({ navigation }) => {
  const completedTasks = navigation.getParam('completedTasks', []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      {completedTasks.map((task) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text style={styles.taskText}>{task.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  taskContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  taskText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CompletedTasksScreen;
