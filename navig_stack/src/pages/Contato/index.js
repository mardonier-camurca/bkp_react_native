import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {
   const navigation = useNavigation();

   function handleHome(){
    navigation.dispatch(StackActions.popToTop());
   } 
   
   return(
        <View style={styles.container}>
            <Text>Página Contato</Text>
            {/* <Button title='TELA HOME' onPress={ () => navigation.navigate('Home')}/> */}
            <Button title='VOLTAR HOME' onPress={handleHome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });