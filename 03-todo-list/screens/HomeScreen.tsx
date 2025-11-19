import React from 'react'
import { useTasks } from '../state/useTasks';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TaskInput from '../components/TaskInput';
import e from 'express';

export const HomeScreen = () => {

    const { tasks, addTask, deleteTask } = useTasks();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis tareas</Text>
            <TaskInput onAdd={addTask} />

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text>{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.delete}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                <Text style={styles.emptyTask}>No hay tareas</Text>)
                }
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,

    },
    title: {
        fontSize: 70,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20

    },
    taskItem: {
        backgroundColor: 'white',
        padding: 14,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskTest: {
        fontSize: 16,
        color: 'black',
    },
    delete : {
        fontSize: 10,
    },
    emptyTask: {
        fontSize: 10,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    }
});