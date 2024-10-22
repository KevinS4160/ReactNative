import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Status from '../../components/Statusbar.js'; // Import Status component

const Messaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sent: true }]); // Mark message as sent
      setMessage(''); // Reset message input
    }
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <Status />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Team 8 GabAI</Text>
      </View>

      {/* Messages Section */}
      <ScrollView style={styles.content}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.sent ? styles.sentMessageBubble : styles.receivedMessageBubble}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Method Editor */}
      <View style={styles.inputMethodEditor}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
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
  },
  header: {
    height: 60,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    marginTop: 40,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 30,
  },
  sentMessageBubble: {
    backgroundColor: '#e1ffc7', // Light green for sent messages
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    alignSelf: 'flex-end', // Align sent messages to the right
    maxWidth: '80%',
  },
  receivedMessageBubble: {
    backgroundColor: '#f0f0f0', // Light gray for received messages
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    alignSelf: 'flex-start', // Align received messages to the left
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  inputMethodEditor: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    backgroundColor: 'white',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '80%', // Control input width
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
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
