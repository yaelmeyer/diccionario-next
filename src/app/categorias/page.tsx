'use client'
import { useEffect, useState } from "react";
import { CategoriaI } from "../interfaces/Categoria";
import { getCategorias } from "../actions/categoriaService";
import Categoria from "../components/categoria";
import FormNuevaCategoria from "./ui/formNuevaCategoria";
import Modal from "../ui/Modal";
import { PalabraCompletaI } from "../interfaces/Palabra";
import TablaPalabras from "../components/tablaPalabra";
import { getPalabrasByCategoria } from "../actions/palabraService";

export default function Categorias() {
const apiURL = 'http://localhost:8080/categorias'
    
    const [categorias, setCategorias] = useState<CategoriaI[]>() 
    const [showModal, setShowModal] = useState<boolean>(false)
    const [palabras, setPalabras] = useState<PalabraCompletaI[]>([])

    const inicializarPalabras = async(id:number) =>{
        const palabrasObtenidas = await getPalabrasByCategoria(id)
        setPalabras(palabrasObtenidas)
    }

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
            <button className="p-2 bg-green-200" onClick={() => setShowModal(true)}>Nueva Categoria</button>
        </div>
            {
                categorias && (
                    <div className="grid grid-cols-2 space-x-2 space-y-2">
                        {
                            categorias.map((c, index) =>(
                                <div    key={index} className="p-2 bg-green-200 rounded-2xl border hover:cursor-pointer"
                                        onClick={()=>inicializarPalabras(c.id)}
                                >
                                    <Categoria descripcion={c.descripcion}/>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <TablaPalabras palabras={palabras}></TablaPalabras>

        <Modal isOpen={showModal} onClose={()=> setShowModal(false)}>
            <FormNuevaCategoria></FormNuevaCategoria>
        </Modal>

    </div>
  );
}