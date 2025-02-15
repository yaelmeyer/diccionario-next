'use client'

import PalabraCard from "@/components/palabras/PalabraCard"
import { Palabra } from "@/interfaces/Palabra"
import { useState } from "react"

interface Props{
    palabras      : Palabra[]
    idioma        : string
    cantPalabras  : number
    setIniciado : any
}

export default function PalabrasAleatorias({palabras, idioma, cantPalabras, setIniciado}: Props) {
    
    const [cont, setCont] = useState(0)

    const avanzarPalabra = () =>{
      if(cont + 1 < cantPalabras)
        setCont(cont+1)
      else
      setIniciado(false)
    }

    
  return (
    <div className="bg-gray-400 flex flex-col items-center justify-center p-10">
      <PalabraCard espaniol={palabras[cont].espaniol} ingles={palabras[cont].ingles}/>
      <button className="p-2 m-2 bg-slate-500" onClick={avanzarPalabra}>Siguiente</button>
    </div>
  );
}