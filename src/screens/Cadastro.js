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

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.tag}>CADASTRO</Text>
            <Text style={styles.titulo}>Criar a sua conta</Text>
            <Text style={styles.subtitulo}>Prencha os seus dados para se tornar um Administrador do sistema de votação da Bentotec 2026</Text>

            <View style={styles.card}>
        
                <Text style={styles.label}>NOME COMPLETO</Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Guilherme Alonso"
                    value={form.nome}
                    onChangeText={(texto) => atualizarCampo('nome', texto)}
                />

                <Text style={styles.label}>E-MAIL</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="voce@escola.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={form.email}
                    onChangeText={(texto) => atualizarCampo('email', texto)}
                />

                <Text style={styles.label}>DATA DE NASCIMENTO</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="dd/mm/aaaa"
                    keyboardType="numeric"
                    value={form.nascimento}
                    onChangeText={(texto) => atualizarCampo('nascimento', texto)}
                />

                <Text style={styles.label}>FUNÇÃO NA ESCOLA</Text>
                <View style={styles.input}>
                    <Picker selectedValue={form.funcao} onValueChange={(valor) => atualizarCampo('funcao', valor)}>

                        <Picker.Item label="Selecione..." value=""/>
                        <Picker.Item label="Aluno" value="aluno"/>
                        <Picker.Item label="Professor" value="professor"/>
                        <Picker.Item label="Coordenador" value="coordenador"/>
                    </Picker>
                </View>

                <Text style={styles.label}>TELEFONE</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="(19) 99999-9999"
                    keyboardType="phone-pad"
                    value={form.telefone}
                    onChangeText={(texto) => atualizarCampo('telefone', texto)}
                />

                <Text style={styles.label}>CEP</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="13000-000"
                    keyboardType="numeric"
                    value={form.cep}
                    onChangeText={(texto) => atualizarCampo('cep', texto)}
                />

                <Text style={styles.label}>BAIRRO</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Centro"
                    value={form.bairro}
                    onChangeText={(texto) => atualizarCampo('bairro', texto)}
                />

                <Text style={styles.label}>CIDADE</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Campinas"
                    value={form.cidade}
                    onChangeText={(texto) => atualizarCampo('cidade', texto)}
                />
            </View>

            <Button text="Criar conta" onPress={criarConta} />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        
    }
})