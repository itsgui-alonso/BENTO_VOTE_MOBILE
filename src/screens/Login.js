import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
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
}