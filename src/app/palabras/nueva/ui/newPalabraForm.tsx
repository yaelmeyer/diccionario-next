'use client'

import { newPalabra } from "@/actions/palabrasDAO";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type itemForm = {
    espaniol: string;
    ingles: string;
}

export default function NewPalabraForm() {
    const {register, handleSubmit, formState:{errors}} = useForm<itemForm>();
    const router = useRouter()

const guardar = async(data: itemForm) => {
    const guardada = await newPalabra(data.espaniol, data.ingles)
    console.log(guardada)
    router.push('/palabras/todas')
}

  return (
    <div className="bg-blue-100">
        <form onSubmit={handleSubmit(guardar)} className="flex flex-col items-center py-2">
            <label htmlFor="espaniol">Español</label>
            <input type="text" id="espaniol"  className="bg-gray-200 m-2"
                {...register("espaniol", {required: true})}
            />
            {errors.espaniol && <p className="text-red-500">Este campo es obligatorio</p>}
            <label htmlFor="ingles">Inglés</label>
            <input type="text" id="ingles" className="bg-gray-200 m-2"
                {...register("ingles", {required: true})}
            />
            {errors.ingles && <p className="text-red-500">Este campo es obligatorio</p>}
            <button className="bg-green-400 p-2 text-center">Guardar</button>
        </form>
    </div>
  );
}