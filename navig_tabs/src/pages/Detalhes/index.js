import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detalhes(){
    return(
        <View style={styles.container}>
            <Text>Página Detalhes do usuario</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green'
    },
  });