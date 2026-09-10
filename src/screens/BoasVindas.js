import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function BoasVindas({ navigation }){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imagem}>
                <Image source={require('../images/logo.jpeg')} style={styles.logo} resizeMode="contain"></Image>
            </View>

            <View style={styles.textos}>
                <Text style={styles.titulo}>Bem-Vindo ao Sistema de Administrador Bentotec</Text>
                <Text style={styles.subtitulo}>Criado para administrar o Sistema de Votação Bentotec</Text>
            </View>
            
            <View style={styles.botao}>
                <Button text="Continuar" onPress={() => navigation.navigate('Home')}></Button>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    imagem: {
        width: '100%',
        marginTop: 150,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 150
    },
    textos: {
        alignItems: 'center',
        marginTop: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 23
    },
    subtitulo: {
        textAlign: 'center',
        color: '#666',
        fontSize: 15,
        marginTop: 20
    },
    botao: {
        alignItems: 'center',
        marginBottom: 20,
        width: '100%'
    }
})