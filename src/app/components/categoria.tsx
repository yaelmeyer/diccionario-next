
interface Categoria {
    descripcion : string
}

export default function Categoria({descripcion}: Categoria) {
  return (
    <div>
      <p>{descripcion}</p>
    </div>
  );
}