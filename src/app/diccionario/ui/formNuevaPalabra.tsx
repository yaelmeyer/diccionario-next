'use client'

import { getCategorias } from "@/app/actions/categoriaService";
import { CategoriaI } from "@/app/interfaces/Categoria";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Categoria from '../../components/categoria';
import { newPalabra } from "@/app/actions/palabraService";

type FormValues = {
    traduccion  : string,
    idioma      : string,
    categoria   : number
}

export default function FormNuevaPalabra() {
    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>()
    const [guardando, setrGuardando] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<CategoriaI[]>()

    const enviarFormulario = async(data:FormValues)=>{
        setrGuardando(true)
        const palabraGuardada = await newPalabra({traduccion: data.traduccion, idioma: data.idioma, categoria_id: data.categoria})
        window.location.reload()
    }

    useEffect(()=>{
        const inicializarCategorias = async()=>{
            const categoriasObtenidas = await getCategorias()
            setCategorias(categoriasObtenidas)
        }

        setrGuardando(false)
        inicializarCategorias()
    }, [])

  return (
    <div>
        {
            categorias &&(
                <form onSubmit={handleSubmit(enviarFormulario)} className="grid grid-cols-2 items-center gap-4">
                        <label htmlFor="traduccion">Español:</label>
                        <div>
                            <input  type="text" id="traduccion"
                                    {...register('traduccion', {required:'la palabra en ESPAÑOL es obligatoria'})}
                            />
                            {errors.traduccion && <p className="text-red-500">{errors.traduccion.message}</p>}
                        </div>

                        <label htmlFor="idioma">Ingles:</label>
                        <div>
                            <input  type="text" id="idioma"
                                    {...register('idioma', {required:'la palabra en INGLES es requerida'})}
                            />
                            {errors.idioma && <p className="text-red-500">{errors.idioma.message}</p>}
                        </div>
                        <label htmlFor="categoria">Categoria:</label>
                        <select id="categoria"
                                {...register('categoria', {required:false})}
                        >
                            {
                                categorias.map((categoria, index)=>(
                                    <option key={index} value={categoria.id}>{categoria.descripcion}</option>
                                ))
                            }
                        </select>
                        <button type="submit" className="p-2 bg-lime-300 hover:cursor-pointer">Guardar</button>
                </form>
            )
        }
    </div>
  );
}