import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles';



export default function App() {
  return (
    <Container>
      <Titulo cor='blue'>Aprendendo Styled!</Titulo>
      <Nome>Olá Mardonier</Nome>

      <BotaoSujeito onPress={ () => alert('Clicoooooou')}>
        <BotaoText>Entrar</BotaoText>

      </BotaoSujeito>

    </Container>
  );
}
