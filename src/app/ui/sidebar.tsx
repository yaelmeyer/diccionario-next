'use client'

import { useRouter } from "next/navigation";
import ActiveLink from "./activeLink";

const items = [
    {descripcion: 'Cargar Nueva Palabra', path:'/newpalabra'},
    {descripcion: 'Examenes', path:'/examens'},
    {descripcion: 'Diccionario', path:'/diccionario'},
    {descripcion: 'Categorias', path:'/categorias'}
]

export default function SideBar() {

    const router = useRouter()
    const navegar=(path:string)=>{
        router.push(path)
    }

  return (
    <div className="w-fit">
      {
        items.map((item, index) =>(
            <div key={index} className="hover:cursor-pointer" onClick={()=>navegar(item.path)}>
                <ActiveLink descripcion={item.descripcion} path={item.path}/>
            </div>
        ))
      }
    </div>
  );
}