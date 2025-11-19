import React from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
//import { useTask } from '../state/useTask';

type Props = {
    //primera funcion que quiero crear
    onAdd: (title: string) => void;
};

//crear un componente funcional que nos permita devolver una interfaz 
export default function TaskInput({ onAdd }: Props) {

    const [text, setText] = React.useState("");
    const handleAdd = () => { //se va a lanzar un evento para agregar se pone handle
        onAdd(text);
        setText("");
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Escribe una tarea"
                placeholderTextColor="#999"
                value={text}
                onChangeText={setText}
            ></TextInput>
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,

    },
    input: {
        flex: 1,
        backgroundColor: 'fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',

    },
    addButton: {
        backgroundColor: '#10B981',
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
    }
});