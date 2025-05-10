
interface Categoria {
    descripcion : string
}

export default function Categoria({descripcion}: Categoria) {
  return (
    <div className="text-center text-lg">
      <p>{descripcion}</p>
    </div>
  );
}