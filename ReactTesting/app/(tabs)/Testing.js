import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // Function to handle text input changes
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Function to handle adding goals to the list
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }, // Wrap in an object with text and key
    ]);
    setEnteredGoalText(''); // Clear the input after adding the goal
  }

  // Function to handle removing a goal
  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  return (
    <ImageBackground
      source={require('@/assets/images/300b47987ce493c1eda43521db9989b8.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        {/* Add Team 8 Title */}
        <Text style={styles.title}>Team 8</Text>

        {/* Add a Circular Logo Area */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/istockphoto-1192994220-612x612.jpg')} // Replace with your logo file path
            style={styles.logo}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText} // Bind the value to the input
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>

        {/* Use FlatList to render the list of goals */}
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsTitle}>List of Goals:</Text>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <View style={styles.goalItem}>
                <Text>{item.text}</Text>
                <TouchableOpacity onPress={() => deleteGoalHandler(item.key)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30, // Add space between the logo and the input fields
  },
  logo: {
    width: 100, // Set logo size
    height: 100,
    borderRadius: 50, // Make it circular
    borderWidth: 2,
    borderColor: '#fff',
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
    padding: 13,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});
