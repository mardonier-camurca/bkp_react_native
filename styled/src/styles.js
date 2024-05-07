import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: #121212;
`;

export const Titulo = styled.Text`
color: ${props => props.cor };
font-size: 30px;
`;

export const Nome = styled.Text`
color: orange;
margin-bottom: 10px;

`;

export const BotaoSujeito = styled.TouchableOpacity`
background-color: #DDD;
padding: 5px;
border-radius: 5px;
width: 90%;
justify-content: center;
align-items: center;
`;

export const BotaoText = styled.Text`
color: #000;
font-size: 20px;
`;