import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, Picker } from 'react-native';

export default function RemindersScreen() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [newTime, setNewTime] = useState('');
  const [selectedReminder, setSelectedReminder] = useState(null);

  const addReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, { id: Math.random().toString(), text: newReminder.trim(), time: newTime.trim() }]);
      setNewReminder('');
      setNewTime('');
    }
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.reminderItem} onPress={() => setSelectedReminder(item)}>
      <Text>{item.text} ({item.time})</Text>
    </TouchableOpacity>
  );

  const moveUp = () => {
    const currentIndex = reminders.findIndex((reminder) => reminder.id === selectedReminder.id);
    if (currentIndex > 0) {
      const newArray = [...reminders];
      const previousReminder = newArray[currentIndex - 1];
      newArray[currentIndex - 1] = selectedReminder;
      newArray[currentIndex] = previousReminder;
      setReminders(newArray);
    }
  };

  const moveDown = () => {
    const currentIndex = reminders.findIndex((reminder) => reminder.id === selectedReminder.id);
    if (currentIndex < reminders.length - 1) {
      const newArray = [...reminders];
      const nextReminder = newArray[currentIndex + 1];
      newArray[currentIndex + 1] = selectedReminder;
      newArray[currentIndex] = nextReminder;
      setReminders(newArray);
    }
  };

  const timeOptions = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', 
                      '3:00 AM', '3:30 AM',  '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', 
                      '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', 
                      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', 
                      '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', 
                      '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', 
                      '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', 
                      '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Reminder"
          value={newReminder}
          onChangeText={(text) => setNewReminder(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Add Time"
          value={newTime}
          onChangeText={(text) => setNewTime(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addReminder}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      {selectedReminder && (
        <View style={styles.selectedReminderContainer}>
          <TouchableOpacity style={styles.moveButton} onPress={moveUp}>
            <Text style={styles.moveButtonText}>↑</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moveButton} onPress={moveDown}>
            <Text style={styles.moveButtonText}>↓</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteReminder(selectedReminder.id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  reminderItem: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});