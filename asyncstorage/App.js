import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Keyboard
} from 'react-native';

import { AsyncStorage } from '@react-native-community/async-storage';

export default class App extends Component {
  constructor(props){;
  super(props)
  this.state = {
    input: '',
    nome: ''
  };

  this.gravarNome = this.gravarNome.bind(this);
}

//componentDidmount - Quando o componete é montado em tela
async componentDidMount(){
  await AsyncStorage.getItem('nome').then((value)=>{
    this.setState({nome: value});

  })
}

//componentDidUpdate - toda vez que um state é atualizado fazer algo...
async componentDidUpdate (_, prevState){
  const nome = this.state.nome;

  if(prevState !== nome){
    await AsyncStorage.setItem('nome', nome)
  }
}


gravarNome(){
  this.setState({
    nome: this.state.input
  });
  alert('Nome gravado com sucesso');
  Keyboard.dismiss();

}
 
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
          />

          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>
          {this.state.nome}
        </Text>


       </View>
    );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 320,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 6
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15

  }
});
