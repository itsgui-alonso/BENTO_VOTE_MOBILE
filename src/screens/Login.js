import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import Button from "../components/Button";


export default function Login({ navigation }){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mostrarSenha, setMostrarSenha] = useState(false)
    
    function fazerLogin() {
        if(!email || !senha) {
            console.log('Preencha e-mail e senha')
            return
        }

        console.log('Tentando logar com: ', { email, senha })
        navigation.navigate('BoasVindas')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tag}>LOGIN</Text>
            <Text style={styles.titulo}> Bem-vindo de volta</Text>
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

})