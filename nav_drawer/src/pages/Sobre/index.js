import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre(){
  
  return (
    <View style={styles.container}>
      <Text>Página Sobre!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
});
