'use client'

import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import FormNuevaPalabra from "./ui/formNuevaPalabra";
import { PalabraCompletaI, PalabraI } from "../interfaces/Palabra";
import { getAllPalabras } from "../actions/palabraService";
import { Loader2 } from "lucide-react";

type ColumnsPalabra = {
  espaniol  : string
  ingles    : string
}

export default function NewPalabra() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [palabras, setPalabras] = useState<PalabraCompletaI[]>()

  useEffect(()=>{
    const inicializarPalabras = async() =>{
      const palabrasObtenidas = await getAllPalabras()
      setPalabras(palabrasObtenidas)
    }

    setShowModal(false)
    inicializarPalabras()
  }, [])

  return (
    <div>
      <h1>diccionario</h1>
      <button className="p-2 bg-red-300 hover:cursor-pointer" onClick={()=> setShowModal(true)}>Nueva Palabra</button>
      {
        palabras && (
          <div className=" bg-slate-100 border-gray-300 rounded-lg">
            <table className="">
              <thead className="bg-slate-300">
                <tr>
                  <th className="p-2">Español</th>
                  <th className="p-2">Ingles</th>
                  <th className="p-2">Veces Bien</th>
                  <th className="p-2">Veces Mal</th>
                </tr>
              </thead>
              <tbody>
                {
                  palabras.map((palabra, index) =>(
                    <tr key={index}>
                      <td className="p-2">{palabra.traduccion}</td>
                      <td className="p-2">{palabra.idioma}</td>
                      <td className="p-2">{palabra.vecesBien}</td>
                      <td className="p-2">{palabra.vecesMal}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
      {
        !palabras && (<p className="text-lg">Cargando... <Loader2 className="animate-spin h-6 w-6"/></p>)
      }
      <Modal isOpen={showModal} onClose={()=> setShowModal(false)}>
        <FormNuevaPalabra></FormNuevaPalabra>
      </Modal>
    </div>
  );
}