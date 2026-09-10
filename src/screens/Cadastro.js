import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";


export default function Cadastro({ navigation }) {
    // Guarda as informações do formulario
    const [form, setForm] = useState({
        nome: '', email: '', nascimento: '', funcao: '', telefone: '', cep: '', bairro: '', cidade: '',
    })

    // Array qu evai guardar cada cadastro feito de Ususario
    const [usuarios, setUsuarios] = useState([])

    function atualizarCampo(campo, valor) { // O atualizar campo vai pegar tudo oq ue tiha no formulario, e sobrescreve só o campo que mudou
        setForm({ ...form, [campo]: valor })
    }

    function criarConta() {
        setUsuarios([...usuarios, form])
        setForm({
            nome: '', email: '', nascimento: '', funcao: '', telefone: '', cep: '', bairro: '', cidade: '',
        })

        console.log('Usuarios cadastrados: ', [...usuarios, form])
    }

}