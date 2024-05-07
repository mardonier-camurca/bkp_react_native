import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Contato() {
   return(
        <View style={styles.container}>
            <Text>Página Contato</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
    },
  });