import React, { useState } from 'react';
import { View, Pressable, Modal, Text, StyleSheet, Image, TextInput } from 'react-native';

const UserIcon = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userInput, setUserInput] = useState(''); // State for the user input (name)

  const handleIconPress = () => {
    setModalVisible(true); // Show the modal when the icon is pressed
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleIconPress}>
        <Image
          source={require('@/assets/images/user.png')} // Replace with your user icon image
          style={styles.icon}
        />
      </Pressable>

      {/* TextInput for the user to enter their name */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userInput}
        onChangeText={setUserInput} // Update state on text change
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal} // Handle Android back button
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.welcomeText}>Welcome to the Application, {userInput}!</Text>
            <Pressable onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center items vertically
    marginBottom: 20, // Add space below the UserIcon container
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 10, // Add space between icon and input
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '45%', // Adjust the width as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
