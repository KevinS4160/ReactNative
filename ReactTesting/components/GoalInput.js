import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal, onResetGoals }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // Clear the input after adding the goal
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText} // Bind the value to the input
      />
      {/* Add Goal Button */}
      <Pressable 
        onPress={addGoalHandler}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#007AFF',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        <Text style={styles.pressableText}>Add Goal</Text>
      </Pressable>
      
      {/* Reset Goals Button */}
      <Pressable 
        onPress={onResetGoals}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : 'red', // Different color for reset button
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10, // Space between buttons
          },
        ]}
      >
        <Text style={styles.pressableText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    width: '61%', // Adjusted width to accommodate both buttons
    padding: 10,
    marginRight: 8,
  },
  pressableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});