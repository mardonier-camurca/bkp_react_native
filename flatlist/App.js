import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Pessoas from './src/Pessoas/Index';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Mardonier', idade: 48, email: 'mardonier@gmail.com'},
        {id: '2', nome: 'Thierry', idade: 20, email: 'Thierry@gmail.com'},
        {id: '3', nome: 'Tatiana', idade: 44, email: 'tatiana@gmail.com'},
        {id: '4', nome: 'Rosa', idade: 74, email: 'rosa@gmail.com'},
        {id: '5', nome: 'Jose', idade: 74, email: 'jose@gmail.com'}
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoas data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
});

export default App;
