import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";

const rotulosFuncao = {
    aluno: 'Aluno',
    professor: 'Professor',
    coordenador: 'Coordenador',
}

export default function Home({ navigation, route }) {
    const usuario = route.params?.usuario || {}

    function sair() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.tag}>HOME</Text>
            <Text style={styles.titulo}>Seus dados</Text>
            <Text style={styles.subtitulo}>Essas são as informações que você cadastrou no sistema</Text>

            <View style={styles.fotoContainer}>
                {usuario.foto ? (
                    <Image source={{ uri: usuario.foto }} style={styles.fotoPreview} />
                ) : (
                    <View style={styles.fotoPlaceholder}>
                        <Text style={styles.fotoPlaceholderTexto}>Sem foto</Text>
                    </View>
                )}
                <Text style={styles.nomeUsuario}>{usuario.nome}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>NOME COMPLETO</Text>
                <Text style={styles.valor}>{usuario.nome}</Text>

                <Text style={styles.label}>E-MAIL</Text>
                <Text style={styles.valor}>{usuario.email}</Text>

                <Text style={styles.label}>DATA DE NASCIMENTO</Text>
                <Text style={styles.valor}>{usuario.nascimento}</Text>

                <Text style={styles.label}>FUNÇÃO NA ESCOLA</Text>
                <Text style={styles.valor}>{rotulosFuncao[usuario.funcao] || usuario.funcao}</Text>

                <Text style={styles.label}>TELEFONE</Text>
                <Text style={styles.valor}>{usuario.telefone}</Text>

                <Text style={styles.label}>CEP</Text>
                <Text style={styles.valor}>{usuario.cep}</Text>

                <Text style={styles.label}>BAIRRO</Text>
                <Text style={styles.valor}>{usuario.bairro}</Text>

                <Text style={styles.label}>CIDADE</Text>
                <Text style={styles.valor}>{usuario.cidade}</Text>
            </View>

            <View style={styles.botao}>
                <Button text="Sair" onPress={sair} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    tag: {
        color: '#ff5a3c',
        fontWeight: '500',
        fontSize: 11,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5
    },
    subtitulo: {
        color: '#777',
        marginTop: 5,
        marginBottom: 20
    },
    fotoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    fotoPreview: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    fotoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f7f6f4',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed'
    },
    fotoPlaceholderTexto: {
        fontSize: 11,
        color: '#999',
        textAlign: 'center'
    },
    nomeUsuario: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginBottom: 5
    },
    valor: {
        backgroundColor: '#F7F6F4',
        borderRadius: 12,
        padding: 12,
        fontSize: 14,
        color: '#333'
    },
    botao: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 30
    }
})