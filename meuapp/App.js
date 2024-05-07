import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App(){
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
      //alert(value.user.uid);
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: name
      })
      alert('Usuario criado com sucesso!')
    })
    .catch((error) =>{
      alert('Ops, algo deu errado!')
      setName('');
      setEmail('');
      setPassword('');
    })
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>name</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setName(texto)}
        value={name}
      />

      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

    <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        type='password'
      />

      <Button
        title='Cadastrar'
        onPress={cadastrar}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    marginTop: 55
  },
  texto:{
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 18

  }
})