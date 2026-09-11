import * as Notications from 'expo-notifications'
import { Platform } from 'react-native'

// Aqui define como a s notificações devem se comportar quando o app está aberto totalmente

Notications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true, // mostra o alerta/banner da notificação
        shouldPlaySound: true, // toca o som de notificação
        shouldSetBadge: false // falso o contador de notificação
    })
})

export async function pedirPermissaoNotificacao() {
    const { status } = await  Notications.requestPermissionsAsync()
    return status === 'granted' // Isso aqui é a resposta se o usuario permitir
}

export async function  notificarContaCriada(nome) {
    await Notications.scheduleNotificationAsync({
        conteudo: {
            titulo: 'Conta criada com sucesso!',
            body: `Bem-vindo(a) à Bentotec 2026, ${nome}`,
            sound: true
        },

        trigger: null, // null = dispara imediatamente, sem nenhum agendamento
    })
}