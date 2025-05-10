'use client'
import { useEffect, useState } from "react";
import { CategoriaI } from "../interfaces/Categoria";
import { getCategorias } from "../actions/categoriaService";
import Categoria from "../components/categoria";

export default function Categorias() {
const apiURL = 'http://localhost:8080/categorias'
    
    const [categorias, setCategorias] = useState<CategoriaI[]>() 

    useEffect(()=>{
        const getCategoriasFetch = async() =>{
            const categorias =  await getCategorias()
            setCategorias(categorias)
        }
        try {
            
            getCategoriasFetch()
        } catch (error) {
            console.log('error: ', error)
        }
    },[])
  return (
    <div>
        {
            categorias && (

                categorias.map((c, index) =>(
                    <div key={index}>
                        <Categoria descripcion={c.descripcion}/>
                    </div>
                ))
            )
        }

    </div>
  );
}