import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const Friends = () => {
  const [searchText, setSearchText] = useState('');
  const [friends, setFriends] = useState([]);

  // Function to handle search text changes
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // Perform search logic here using Firebase or any other service
    // Update the 'friends' state with the search results
  };

  // Render friend item
  const renderFriendItem = ({ item }) => (
    <Text style={styles.friendName}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search friends"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />
      <FlatList
        data={friends}
        renderItem={renderFriendItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.friendsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  searchInput: {
    height: 40,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  friendsList: {
    flexGrow: 1,
  },
  friendName: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
});

export default Friends;
