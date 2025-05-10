import { newCategoria } from "@/app/actions/categoriaService";
import { useForm } from "react-hook-form";

export default function FormNuevaCategoria() {

    type FormValues = {
        descripcion: string
    }

    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>()

    const enviarFormulario = async (data:FormValues) =>{
        const categoriaCreada = await newCategoria(data.descripcion)
        
    }

  return (
    <div>
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
    </div>
  );
}