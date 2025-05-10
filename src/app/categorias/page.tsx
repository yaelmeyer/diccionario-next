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
        <div className="flex p-2">
            <h2 className="p-2 bg-yellow-200">Categorias</h2>
            <button className="p-2 bg-green-200">Nueva Categoria</button>
        </div>
        {
            categorias && (

                categorias.map((c, index) =>(
                    <div key={index} className="p-2 bg-green-200 rounded-2xl border">
                        <Categoria descripcion={c.descripcion}/>
                    </div>
                ))
            )
        }

    </div>
  );
}