import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from './src/screens/BoasVindas';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import { UsuariosProvider } from './src/context/UsuariosContext';

import { useEffect } from 'react';
import { pedirPermissaoNotificacao } from './src/utils/Notificações';

const Stack = createNativeStackNavigator();



export default function App() {

   useEffect(() => {
    pedirPermissaoNotificacao();
  }, []);
  
  return (
    <UsuariosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='BoasVindas'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='BoasVindas' component={BoasVindas} />
          <Stack.Screen name='Cadastro' component={Cadastro}/>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UsuariosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});