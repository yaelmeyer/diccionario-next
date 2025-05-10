'use client'

import { newCategoria } from "@/app/actions/categoriaService";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    descripcion: string
}

export default function FormNuevaCategoria() {
    const router = useRouter()
    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>()
    const [guardando, setGuardando] = useState<boolean>(false)

    const enviarFormulario = async (data:FormValues) =>{
        setGuardando(true)
        const categoriaCreada = await newCategoria(data.descripcion)
        window.location.reload();
    }

    useEffect(()=>{
        setGuardando(false)
    },[])

  return (
    <div>
        {
            !guardando &&(
                <form onSubmit={handleSubmit(enviarFormulario)}>
                    <div>
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" id="descripcion" 
                            {...register('descripcion', {required: 'la descripcion es requerida'})}
                        />
                        {errors.descripcion && <p className="text-red-500">{errors.descripcion.message}</p>}
                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            ) 
        }
        {
            guardando&&(
                <p>guardando <Loader2 className="animate-spin h-6 w-6"/></p>
            )
        }
    </div>
  );
}