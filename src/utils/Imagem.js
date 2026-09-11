import * as ImagePicker from "expo-image-picker";
import { Alert } from 'react-native'

export async function escolherDaGaleria() {
  const permissao = await ImagePicker.requestCameraPermissionsAsync();

  if (!permissao.granted) {
    console.log("Precisamos da permissão para pegar a foto");
    return null;
  }

  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // só vai mostarr imagens, nao videos
    allowsEditing: true, // pode diatr a foto antes de enviar
    aspect: [1, 1], // seria para a foto ficar quadrada, assim fica mais facil para foto de perfil
    quality: 0.7, // comprime um pouco a imagem, para não ficar um arquivo grante
  });

  if (resultado.canceled) {
    return null;
  }

  return resultado.assets[0].uri // Terioricamente a pessoa pode escolher varias imagens, como vem em um array, pegamos so a primeira
}

export async function tirarFoto() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync()

    if(!permissao.granted){
        console.log('Precisamos da sua permissão para usar a câmera')
        return null
    }

    const resultado = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1,1],
        quality: 0.7
    })

    if(resultado.canceled) {
        return null
    }

    return resultado.assets[0].uri // Terioricamente a pessoa pode tirar varias fotos, como vem em um array, pegamos so a primeira
}

function selecionarFotoPerfil(aoEscolher){
    Alert.alert(
        'Foto de perfil',
        'Escolha de onde deseja pegar a foto'
        [
            {
                text: 'Câmera',
                onPress: async () => {
                    const uri = await escolherDaGaleria()
                    if(uri) aoEscolher(uri)
                }
            },
            {
                text: 'Galeria',
                onPress: async () => {
                    const uri = await escolherDaGaleria()
                    if(uri) aoEscolher(uri) // Verifica mesmo se veio a uri e não null
                }
            },
            { text: 'Cancelar', style: 'cancel'}
        ]
    )
}
