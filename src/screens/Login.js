import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import Button from "../components/Button";
import { useUsuarios } from "../context/UsuariosContext";

export default function Login({ navigation }){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const { buscarUsuario } = useUsuarios()
    function fazerLogin() {
        if(!email || !senha) {
            console.log('Preencha e-mail e senha')
            return
        }

        const usuarioEncontrado = buscarUsuario(email, senha)

        if(usuarioEncontrado){
            navigation.navigate('Home', { usuario: usuarioEncontrado })
        } else {
            console.log('E-mail ou senha incorretos')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tag}>LOGIN</Text>
            <Text style={styles.titulo}>Bem-vindo de volta</Text>
            <Text style={styles.subtitulo}>Entre com o seu e-mail e senha para continuar</Text>

            <View style={styles.card}>
                <Text style={styles.label}>E-MAIL</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="voce@escola.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>SENHA</Text>
                <View style={styles.senhaConatiner}>
                    <TextInput
                        style={styles.inputSenha}
                        placeholder="Digite a sua Senha"
                        secureTextEntry={!mostrarSenha}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                        <Feather
                            name={mostrarSenha ? 'eye' : 'eye-off'}
                            size={20}
                            color='#999'
                        />
                    </TouchableOpacity>
                </View>

                <Button text="Entrar" onPress={fazerLogin}></Button>

                <View style={styles.cadastroLinha}>
                    <Text style={styles.loginTexto}>Ainda não tem conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.loginLink}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 40
    },
    tag: {
        color: '#ff5a3c',
        fontWeight: '500',
        fontSize: 11
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
        marginBottom: 5
    },
    input: {
        backgroundColor: '#f7f6f4',
        borderRadius: 12,
        padding: 12,
        fontSize: 14
    },
    senhaConatiner: {
        backgroundColor: '#f7f6f4',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    inputSenha: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 14
    },
    cadastroLinha: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    loginTexto: {
        color: '#777',
        fontSize: 14
    },
    loginLink: {
        color: '#ff5a3c',
        fontWeight: 'bold',
        fontSize: 14
    }
})