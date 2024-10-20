import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(textInput) {
        setEnteredGoalText(textInput)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
        <View style={styles.inputContainer}>
                <TextInput placeholder='Your Course Goal' 
                style={styles.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                onSubmitEditing={addGoalHandler}
                />
                <Button title='Add Goal' onPress={addGoalHandler} color='#cccccc' />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        flex: 1,
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        width: '75%',
        marginRight: 8,
        padding: 13,
    },
})

export default GoalInput