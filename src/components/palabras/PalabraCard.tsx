
interface Palabra{
    espaniol    : string
    ingles      : string
}

export default function PalabraCard({espaniol, ingles}: Palabra) {
  return (
    <p className="bg-blue-300 mb-2">
      <span className="p-2 mr-2">{espaniol}</span>
      <span className="p-2 mr-2">{ingles}</span>
    </p>
  );
}