import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor: 50
    };
  }

  render(){
      return (
      <View style={styles.container}>
        <Slider
          minimumValue={10}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
          value={this.state.valor}
          minimumTrackTintColor='#00FF00'
          maximumTrackTintColor='#FF000'
          />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          Você tem {this.state.valor.toFixed(0)} kg
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  }
});

export default App;