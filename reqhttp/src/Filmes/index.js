import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Filmes extends Component{
    render(){
        const {nome, foto, sinopse} = this.props.data;
        return(
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>
                        {this.props.data.nome}
                    </Text>
                    <Image
                        style={styles.capa}
                        source={{ uri: foto}}
                    />
                
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={()=> alert(sinopse) }>
                            <Text style={styles.textoBotao}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor: '',
        backgroundColor: '#FFF',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 5,
    },
    titulo:{
        fontSize: 18,
        padding: 15
    },
    capa:{
        height:250,
        zIndex: 2,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -48,
        zIndex: 9,

    },
    botao:{
        width: 110,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textoBotao:{
        textAlign: 'center',
        color: '#FFF'
    },
})

export default Filmes;

