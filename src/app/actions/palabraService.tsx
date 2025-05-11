import {PalabraI} from '../interfaces/Palabra'

const apiURL = 'http://localhost:8080/diccionario'

export const newPalabra = async(palabra: PalabraI) =>{
    try {
        const palabraCreada = await fetch(`${apiURL}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(palabra)
        })
    } catch (error) {
        console.log('error al crear nueva palabra: ', error)
    }
}

export const getAllPalabras = async() =>{
    try {
        const palabrasLista = await fetch(`${apiURL}/all`,{
            method: 'GET'
        }) .then(resp => resp.json())

        return palabrasLista
    } catch (error) {
        console.log("error al obtener todas las palabras: ", error)
    }
}

export const getPalabrasByCategoria = async(id:number) =>{
    try {
        const palabrasObtenidas = await fetch(`${apiURL}?idCategoria=${id}`, {method: 'GET'}).then(resp => resp.json())
        return palabrasObtenidas
    } catch (error) {
        console.log('error al obtener palabras por categoria: ',error)
    }
}