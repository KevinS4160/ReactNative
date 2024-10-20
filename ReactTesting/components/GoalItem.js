import { StyleSheet, Text, View } from 'react-native'

function GoalItem(props) {
    return(
        <View style={styles.goalList}>
            <Text style={styles.listText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalList: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#DA8359',
        borderRadius: 10,
        backgroundColor: '#ECDFCC',
        padding: 5,
        marginBottom: 5,
    },
    listText: {
        fontSize: 20,
        marginBottom: 5,
    },
})

export default GoalItem