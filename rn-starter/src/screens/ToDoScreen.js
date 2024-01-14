import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Swipeable } from 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';




const ToDoListScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);


  useEffect(() => {
    scheduleNotification();
  }, []);

  const scheduleNotification = async () => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      alert('No notification permissions!');
      return;
    }
  
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "ToDo Reminder!",
        body: 'You have tasks to complete today.',
      },
      trigger: {
        hour: 7,
        minute: 0,
        repeats: true,
      },
    });
  };
  



  const addTask = () => {
    if (input.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: input }]);
      setInput('');
    } else {
      Alert.alert('Oops!', 'Please enter a valid task.', [{ text: 'OK' }]);
    }
  };

  const removeTask = (id) => {
    const completedTask = tasks.find(task => task.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
    setTasks(tasks.filter((task) => task.id !== id));
    Alert.alert('Congratulations!', 'You completed the task.', [{ text: 'OK' }]);
  };

  const navigateToCompletedTasks = () => {
    navigation.navigate('CompletedTasks', { completedTasks });
  };

  const renderTask = ({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <View style={styles.swipeActionContainer}>
          <Text style={styles.swipeActionText}>Done</Text>
        </View>
      )}
      onSwipeableRightOpen={() => removeTask(item.id)}
    >
      <TouchableOpacity
        style={styles.taskContainer}
        onLongPress={() => handleLongPress(item)}
      >
        <Text style={styles.taskText}>{item.text}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
  

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    setIsEditing(false);
  };
  
  const handleLongPress = (task) => {
    setEditingTask(task);
  };
  
  const handleEditPress = () => {
    if (editingTask && editingTask.text.trim().length > 0) {
      editTask(editingTask.id, editingTask.text);
      setEditingTask(null);
    } else {
      Alert.alert('Oops!', 'Please enter a valid task.', [{ text: 'OK' }]);
    }
  };
  
  
  const handleTaskTextInput = (text) => {
    setEditingTask({ ...editingTask, text });
  };
  
  const handleCancelPress = () => {
    setEditingTask(null);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!editingTask}
        onRequestClose={() => setEditingTask(null)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Task</Text>
            <TextInput
              style={styles.modalInput}
              value={editingTask?.text}
              onChangeText={handleTaskTextInput}
              placeholder="Enter new task text"
            />
            <TouchableWithoutFeedback onPress={handleEditPress}>
              <View style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleCancelPress}>
              <View style={styles.cancelButton}>
                <Text style={styles.editButtonText}>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </View>
      </Modal>

      <Text onPress={navigateToCompletedTasks} style={styles.completedTasksText}>
        Completed Tasks
      </Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Enter your task"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']} 
            style={{ borderRadius: 10, padding: 10 }} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon name="plus" size={20} color="#FFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#1e81b0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#FFF',
  },
  addButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
  },
  taskContainer: {
    backgroundColor: '#abdbe3',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 16,
  },
  swipeActionContainer: {
    backgroundColor: '#28a745',
    paddingHorizontal: 100,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    top: 5,
    left: 10,
  },
  swipeActionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  // Add the following styles to the StyleSheet
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 230,
    backgroundColor: '#abd5e3',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    top: -5,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20',
  },
  modalInput: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#777',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#2D60A0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#F97C7D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10, 
  },
  completedTasksText: {
    fontSize: 18,
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  
  

});

export default ToDoListScreen
