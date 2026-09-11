export function formatarData(input) {
    const data = input.replace(/\D/g, '').slice(0, 8)

    if (data.length > 4) {
        return `${data.slice(0,2)}/${data.slice(2, 4)}/${data.slice(4, 8)}`
        }
    if (data.length > 2) {
        return `${data.slice(0,2)}/${data.slice(2, 4)}`
        }
    return data;
}

export function formatarTelefone(input) {
    const tel = input.replace(/\D/g, '').slice(0, 11)
    switch (true) {
        case tel.length > 10: {
            return `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7, 11)}` 
        }
        case tel.length > 6: {
            return `(${tel.slice(0, 2)}) ${tel.slice(2, 6)}-${tel.slice(6, 10)}`
        }
        case tel.length > 2: {
            return `(${tel.slice(0, 2)}) ${tel.slice(2)}`
        }
        case tel.length > 0: {
            return `(${tel}`
        }
        default: {
            return tel
        }
    }
}

export function formatarCEP(input) {
    const cep = input.replace(/\D/g, '').slice(0, 8)
    if (cep.length > 5) {
        return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`
    }
    return cep
}