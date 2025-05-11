import { PalabraCompletaI } from "../interfaces/Palabra";

interface Palabras {
    palabras : PalabraCompletaI[]
}

export default function TablaPalabras({palabras}:Palabras) {
  return (
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
  );
}