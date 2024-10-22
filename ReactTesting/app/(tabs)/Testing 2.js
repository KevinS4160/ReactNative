import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Status from '../../components/Statusbar.js'; // Import Status component

const Messaging = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <Status />

      {/* Content Section */}
      <View style={styles.content}>
        {/* Input Method Editor */}
        <View style={styles.inputMethodEditor}>
          {/* Bold and Centered Text */}
          <Text style={styles.headerText}>Welcome to the Messaging Screen</Text>
          
          {/* Input Box and Send Button */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your message..."
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Toolbar */}
      <View style={styles.toolbar}>
        <Text>Toolbar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between', // Push content towards the bottom
  },
  content: {
    flex: 1,
    paddingLeft: 11,
    paddingBottom: 10, // Add space below the content
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center', // Center items horizontally
  },
  headerText: {
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Center the text horizontally
    marginBottom: 20, // Space between the header text and input box
    fontSize: 18, // Optional: adjust font size
  },
  inputContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center vertically
    width: '80%', // Control width of the input container
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10, // Space between input and button
    borderRadius: 5,
    flex: 1, // Make input take available space
  },
  sendButton: {
    backgroundColor: '#007AFF', // Button color (blue)
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white', // Text color for the button
    fontWeight: 'bold',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Messaging;
