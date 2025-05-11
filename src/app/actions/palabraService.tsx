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