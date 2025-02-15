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
    const [respuesta, setRespuesta] = useState('')
    const [correcta, setCorrecta] = useState(false)
    const [validado, setValidado] = useState(false)

    const avanzarPalabra = () =>{
      if(cont + 1 < cantPalabras){
        setCont(cont+1)
        setValidado(false)
      }
      else
      setIniciado(false)
    }

    const validar = () =>{
        const validado = idioma == 'espaniol' ? palabras[cont].ingles == respuesta : palabras[cont].espaniol == respuesta
        setCorrecta(validado)
        setValidado(true)
    }

    const onChangeRespuesta = (e : any) =>{
      setRespuesta(e.target.value)
    }

    
  return (
    <div className="bg-gray-400 flex flex-col items-center justify-center p-10">
      <PalabraCard espaniol={idioma=='espaniol'? palabras[cont].espaniol : '*****'} ingles={idioma=='ingles'? palabras[cont].ingles: '*****'}/>
      <input type="text" className="bg-gray-300" value={respuesta} onChange={onChangeRespuesta}></input>
      {
        !correcta ? (
          validado && <p className="bg-red-500">Incorrecto</p>
        )
        :(
          validado && <p className="bg-green-500">Correcto</p>
        )
      }
      <button onClick={validar} className="bg-green-300 p-2 m-2">Validar</button>
      <button className="p-2 m-2 bg-slate-500" onClick={avanzarPalabra}>Siguiente</button>
    </div>
  );
}