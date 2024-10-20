import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, ImageBackground } from 'react-native';
import GoalItem from '@/components/GoalItem.js'
import GoalInput from '@/components/GoalInput.js'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // Function to handle adding goals to the list
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }, // Wrap in an object with text and key
    ]);
  }

  return (
    <ImageBackground
      source={require('@/assets/images/300b47987ce493c1eda43521db9989b8.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsTitle}>List of Goals:</Text>

          <FlatList data={courseGoals} renderItem={( item ) => (
            <GoalItem text={item.item.text}/>
            )}

            keyExtractor={(item) => item.key} // Define key extractor for FlatList
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    padding: 10,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalItem: {
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});
