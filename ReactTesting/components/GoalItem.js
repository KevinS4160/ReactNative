import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const GoalItem = ({ item, onDelete }) => {
  const [isDone, setIsDone] = useState(false); // Track if the goal is marked as "Done"

  // Function to handle "Done" press
  function doneHandler() {
    setIsDone((prevState) => !prevState); // Toggle the done state
  }

  return (
    <View style={[styles.goalItem, isDone && styles.doneGoal]}>
      <Text style={isDone ? styles.doneText : null}>{item.text}</Text>

      <View style={styles.buttonsContainer}>
        {/* "Done" button with check mark */}
        <Pressable
          onPress={doneHandler}
          style={({ pressed }) => [
            styles.pressableButton,
            pressed && styles.pressedButton, // Apply pressed styles if pressed
          ]}
        >
          <Text style={styles.doneButton}>✓</Text>
        </Pressable>

        {/* "Delete" button with X mark */}
        <Pressable
          onPress={() => onDelete(item.key)}
          style={({ pressed }) => [
            styles.pressableButton,
            pressed && styles.pressedButton, // Apply pressed styles if pressed
          ]}
        >
          <Text style={styles.deleteButton}>✕</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 9,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  doneGoal: {
    opacity: 0.5, // Make the goal item semi-transparent when marked as "Done"
  },
  doneText: {
    textDecorationLine: 'line-through', // Strike-through text when "Done"
    color: '#6c757d', // Grey color for done text
  },
  buttonsContainer: {
    flexDirection: 'row', // Align "Done" and "Delete" buttons side by side
  },
  pressableButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    right: -5,
  },
  pressedButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Transparent background when pressed
    borderRadius: 5,
  },
  doneButton: {
    color: 'green', // Green color for "Done" check mark
    fontWeight: 'bold',
    fontSize: 18, // Slightly larger for better visibility
  },
  deleteButton: {
    color: 'red', // Red color for "Delete" X mark
    fontWeight: 'bold',
    fontSize: 18, // Slightly larger for better visibility
  },
});