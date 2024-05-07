import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({ data }){
    return(
        <View style={styles.container} >
            <Text style={styles.text}>Nome: {data.nome}</Text>
            <Text style={styles.text}>Cargo: {data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#121212'
    },
    text:{
        color: '#FFF',
        fontSize: 16


    }
})