import { getAllPalabras } from "@/actions/palabrasDAO";
import PalabraCard from "@/components/palabras/PalabraCard";

export default async function AllPalabras() {
    const palabras = await getAllPalabras()
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Español</th>
            <th>Ingles</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      {
        palabras?.map(palabra =>(
            <PalabraCard key={palabra.espaniol} espaniol={palabra.espaniol} ingles={palabra.ingles}/>
        ))
      }
    </div>
  );
}