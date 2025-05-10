'use server'

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