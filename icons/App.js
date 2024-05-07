
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sujeito Programador!</Text>

      
      <FontAwesome
        name='home'
        size={55}
        color='#11118c'
      />

      <FontAwesome
        name='user'
        size={55}
        color='#54a300'
      />

      <Feather
        name='gift'
        size={55}
        color='#7665ff'
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome 
          name='youtube'
          size={55}
          color='#FFF'
        />
        <Text style={styles.btnText}>Acessar canal</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5
  },
  btnText:{
    paddingLeft: 10,
    color: '#FFF'


  }
});
