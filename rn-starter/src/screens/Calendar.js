import React, { useState } from 'react';
import { StyleSheet, View, Modal, Button, TextInput, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';

let id = 0;

const timeToDate = (time) => {
  const [hour, minute] = time.split(':');
  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  return date;
};

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTime, setEventTime] = useState({ hour: "00", minute: "00" });
  const [eventPeriod, setEventPeriod] = useState("AM");

  const addEvent = () => {
    const newEvent = {
      id: id++,
      name: eventName,
      description: eventDesc,
      location: eventLocation,
      time: `${eventTime.hour}:${eventTime.minute} ${eventPeriod}`,
    };
    setEvents({ ...events, [selectedDate]: [...(events[selectedDate] || []), newEvent]});
    setModalVisible(false);
    setEventName("");
    setEventDesc("");
    setEventLocation("");
    setEventTime({ hour: "00", minute: "00" });
    setEventPeriod("AM");
  };

  const deleteEvent = (id) => {
    setEvents({ ...events, [selectedDate]: events[selectedDate].filter(event => event.id !== id) });
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Calendar 
        style={styles.calendar}
        markedDates={Object.fromEntries(Object.entries(events).map(([key, value]) => [key, {marked: true}]))}
        onDayPress={(day) => onDateSelect(day.dateString)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            placeholder="Event Name"
            value={eventName}
            onChangeText={setEventName}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            value={eventDesc}
            onChangeText={setEventDesc}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            value={eventLocation}
            onChangeText={setEventLocation}
          />
          <View style={styles.buttonContainer}>
            <Text>Select Time</Text>
            <RNPickerSelect
              placeholder={{ label: "Select hour...", value: null }}
              items={hours.map((hour) => ({ label: hour, value: hour }))}
              onValueChange={(value) => setEventTime({ ...eventTime, hour: value })}
            />
            <RNPickerSelect
              placeholder={{ label: "Select minute...", value: null }}
              items={minutes.map((minute) => ({ label: minute, value: minute }))}
              onValueChange={(value) => setEventTime({ ...eventTime, minute: value })}
            />
            <RNPickerSelect
              placeholder={{ label: "Select AM/PM...", value: null }}
              items={[{ label: "AM", value: "AM" }, { label: "PM", value: "PM" }]}
              onValueChange={(value) => setEventPeriod(value)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add Event" onPress={addEvent} />
          </View>
          <FlatList
            data={(events[selectedDate] || []).sort((a, b) => timeToDate(a.time) - timeToDate(b.time))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.eventItem}>
                <View style={styles.eventDetail}>
                  <Text>{item.name}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.location}</Text>
                  <Text>{item.time}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteEvent(item.id)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
  calendar: {
    width: width * 0.95,
    height: height * 0.6,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: '30%',
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '90%',
    marginBottom: 10,
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  eventDetail: {
    flexDirection: 'column',
    width: '70%',
    marginRight: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  deleteButton: {
    color: 'red',
  },
});
