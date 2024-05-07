import React, {useState, useEffect, useMemo, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null);

  //componentDidMount
  useEffect(()=> {
    async function getStorage(){
    const nomeStorage = await AsyncStorage.getItemetItem('nomes')
    if(nomeStorage !== null){
      setNome(nomeStorage);
    }
    }

    getStorage();

  }, []);

  ////componentDidUpdate
  useEffect(()=>{
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage();

  },[nome]);

  function alteraNome(){
    setNome(input);
    setInput('');
    
  }

  function novoNome(){
    nomeInput.current.focus();


  }

  const letrasNome = useMemo(() =>{
    console.log('Mudou letra');
    return nome.length;
  }, [nome]);
  console.log(letrasNome);



  return (
    <View style={styles.container}>

      <TextInput style={styles.input}
        placeholder='Seu nome...'
        value={input}
        onChangeText={(texto) => setInput(texto)}
        ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>

      </TouchableOpacity>
      
      <Text style={styles.texto}>{nome}</Text>
      
      <Text style={styles.texto}>Tem {letrasNome} letras</Text>
      <TouchableOpacity onPress={novoNome}>
        <Text>Novo nome</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45
  },

  texto:{
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
  btnText:{
    fontSize: 20,
    color: '#FFF'
  },
  btn:{
    backgroundColor: '#222',
    alignItems: 'center'
  },
  input:{
    height: 45

  }
});
