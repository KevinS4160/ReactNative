import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ImageBackground, Modal, Pressable } from 'react-native';
import GoalInput from '../../components/GoalInput'; // Import GoalInput
import GoalItem from '../../components/GoalItem';   // Import GoalItem
import UserIcon from '../../components/Usericon';    // Import UserIcon

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [warningModalVisible, setWarningModalVisible] = useState(false); // State for warning modal
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false); // State for confirmation modal
    const [goalToDelete, setGoalToDelete] = useState(null); // Store the goal to delete
  
    // Function to handle adding goals to the list
    function addGoalHandler(enteredGoalText) {
      console.log('Entered goal text:', enteredGoalText); // Debugging line
  
      if (!enteredGoalText.trim()) {
        console.log('Empty goal, not adding'); // Debugging line
        return; // Check if the input is empty or just spaces
      }
  
      setCourseGoals((currentCourseGoals) => {
        const updatedGoals = [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() }, // Wrap in an object with text and key
        ];
  
        // Show warning modal if goals exceed 5
        if (updatedGoals.length > 5) {
          setWarningModalVisible(true);
        }
  
        return updatedGoals;
      });
    }
  
    // Function to handle removing a goal
    function deleteGoalHandler(goalKey) {
      setGoalToDelete(goalKey); // Set the goal to delete
      setConfirmationModalVisible(true); // Show confirmation modal
    }
  
    // Function to confirm deletion
    function confirmDeleteHandler() {
      setCourseGoals((currentCourseGoals) => {
        return currentCourseGoals.filter((goal) => goal.key !== goalToDelete);
      });
      setGoalToDelete(null); // Reset the goal to delete
      setConfirmationModalVisible(false); // Close the confirmation modal
    }
  
    // Function to handle resetting goals
    function resetGoalsHandler() {
      setCourseGoals([]); // Clear all goals
    }
  
    const closeWarningModal = () => {
      setWarningModalVisible(false); // Close the warning modal
    };
  
    const closeConfirmationModal = () => {
      setConfirmationModalVisible(false); // Close the confirmation modal
      setGoalToDelete(null); // Reset the goal to delete
    };
  
    return (
      <ImageBackground
        source={require('@/assets/images/flowers.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.appContainer}>
          <Text style={styles.title}>Team 8</Text>
  
          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/istockphoto-1192994220-612x612.jpg')}
              style={styles.logo}
            />
          </View>
  
          {/* User Icon Component */}
          <UserIcon />
  
          {/* GoalInput component */}
          <GoalInput onAddGoal={addGoalHandler} onResetGoals={resetGoalsHandler} />
  
          {/* List of Goals */}
          <View style={styles.goalsContainer}>
            <Text style={styles.goalsTitle}>List of Goals:</Text>
            <FlatList
              data={courseGoals}
              renderItem={({ item }) => (
                <GoalItem item={item} onDelete={deleteGoalHandler} />
              )}
              keyExtractor={(item) => item.key} // Define key extractor for FlatList
            />
          </View>
  
          {/* Warning Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={warningModalVisible}
            onRequestClose={closeWarningModal} // Handle Android back button
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.welcomeText}>
                  You have more than 5 goals! Are you overwhelming yourself?
                </Text>
                <Pressable onPress={closeWarningModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
  
          {/* Confirmation Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={confirmationModalVisible}
            onRequestClose={closeConfirmationModal} // Handle Android back button
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.welcomeText}>
                  Are you sure you want to delete this goal?
                </Text>
                <Pressable onPress={confirmDeleteHandler} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Yes</Text>
                </Pressable>
                <Pressable onPress={closeConfirmationModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>No</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
  
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
      paddingTop: 40,
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
      marginBottom: 30,
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#fff',
    },
    goalsContainer: {
      flex: 5,
    },
    goalsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
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
      marginVertical: 5, // Added margin for spacing
    },
    closeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  