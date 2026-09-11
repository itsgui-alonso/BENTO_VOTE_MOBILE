import React, { createContext, useState, useContext } from "react";

// Isso está sendo criado para a tela de login usar o usuário cadastrado da tela de cadastro, sem usar um banco de dados.
// Como estamos usando um array de objetos para guardar as informações, encontramos essa solução
const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
    const [usuarios, setUsuarios] = useState([]); // Criado para colocar as informações aqui, não vai mais ser no array em Cadastro

    function adicionarUsuario(newUsuario) {
        setUsuarios([...usuarios, newUsuario]); // Aqui ele vai criar o Usuario
    }

    // Serve para que na hora que ele apertar entrar, as informações que ele colocou em email e senha sejam verificadas se existem no array
    function buscarUsuario(email, senha) {
        return usuarios.find(
            (usuario) => usuario.email === email && usuario.senha === senha
        );
    }

    // Esse aqui vai servir para disponibilizar o que queremos: o array, e as duas funções de criar e buscar
    return (
        <UsuariosContext.Provider value={{ usuarios, adicionarUsuario, buscarUsuario }}>
            {children}
        </UsuariosContext.Provider>
    );
}

// Feito só para facilitar usar essas informações, em vez de useContext(UsuariosContext), só chama o useUsuarios()
export function useUsuarios() {
    return useContext(UsuariosContext);
}