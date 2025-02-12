import Link from "next/link";
import path from "path";

const navItems = [
    {path: '/aprendidas', Descripcion: 'Aprendidas'},
    {path: '/pendientes', Descripcion: 'Pendientes'},
    {path: '/nueva', Descripcion: 'Nueva'},
    {path: '/todas', Descripcion: 'Todas'},
]

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-full w-2/12 bg-blue-300 retative left-0 rounded-lg shadow-lg py-4">
        {navItems.map((item) =>(
        <Link className="p-2 text-lg hover:bg-blue-400"
            key={item.path} href={item.path}>{item.Descripcion}</Link>
        ))}
    </nav>
  );
}