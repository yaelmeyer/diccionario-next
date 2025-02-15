import { getAllPalabras } from "@/actions/palabrasDAO";
import FormInicioExamen from "../ui/FormInicioExamen";

export default async function ExamenAleatorio() {
    const allPalabras = await getAllPalabras()
    
  return (
    <div>
      <FormInicioExamen allPalabras={allPalabras!}/>
    </div>
  );
}