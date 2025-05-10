'use server'

import { CategoriaI } from "../interfaces/Categoria"

const apiURL = 'http://localhost:8080/categorias'

export const getCategorias = async() => {
    try{
        const categoriasObtenidas = await fetch(`${apiURL}/all`)
            .then(res => res.json())
    
            return categoriasObtenidas
    } catch(e){
        console.log('error al obtener categorias:',e)
    }
} 

export const newCategoria = async(categoria:string) =>{
    try {
        const categoriaCreada = await fetch(`${apiURL}/new`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({descripcion: categoria})
        } )
    } catch (error) {
        console.log('error al crear categoria:' ,error)
    }
}