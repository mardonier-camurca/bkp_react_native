
import { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
} from 'react-native';

export default class App extends Component {
  render(){
    return (
        <View style={{backgroundColor: '#292929', width: '100', height: 350, borderRadius: 15}}>
            <Text style={{paddingTop:15, color: '#FFF', fontSize: 35, textAlign: 'center'}} >Seje bem-vindo!</Text>
            <Button title='Sair' onPress={ this.props.fechar }/>
        </View>
    );
  }
}


