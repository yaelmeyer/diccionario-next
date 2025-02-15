'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import PalabrasAleatorias from "./PalabrasAleatorias";
import AllPalabras from "@/app/palabras/todas/page";
import { Palabra } from "@/interfaces/Palabra";

interface Props{
  allPalabras : Palabra[]
}

type camposForm = {
  idioma  : string
}

const irAExamen = () =>{

}

const cantPalabras = 3

export default function FormInicioExamen({allPalabras}:Props) {
  const {register, handleSubmit} = useForm<camposForm>()
  const[iniciado, setIniciado] = useState(false)
  const [idioma, setIdioma] = useState('')
  const [palabras, setPalabras] = useState<Palabra[]>([])

  const iniciarIdioma = (data: camposForm) =>{
    obtenerAleatorios()
    setIdioma(data.idioma)
    setIniciado(true)
  }

  const obtenerAleatorios = () =>{
    let palabrasAleatorias = []
    for(let cont = 0; cont < cantPalabras; cont ++){
        palabrasAleatorias.push(allPalabras![Math.floor(Math.random() * allPalabras!?.length)])
    }

    setPalabras(palabrasAleatorias) 
  }

  return (
    <div>
      {
        !iniciado && (
          <form onSubmit={handleSubmit(iniciarIdioma)} className="flex flex-col">
              <select id="idioma" className="bg-gray-400"
                {...register('idioma',{required:true})}
              >
                <option value="espaniol" className=" p2 m2">Español</option>
                <option value="ingles" className=" p2 m2">Ingles</option>
              </select>
              <button type="submit" className="bg-blue-400 p2 mt-2">Empezar</button>
          </form>
        )
      }
      {
        iniciado && (
          <PalabrasAleatorias palabras={palabras} idioma={idioma} cantPalabras={cantPalabras} setIniciado={setIniciado}/>
        )
      }
    </div>
  );
}