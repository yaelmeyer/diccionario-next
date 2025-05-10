'use client'

import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
    descripcion : string,
    path        : string
}

export default function ActiveLink({descripcion, path}: Props) {
    const pathActual = usePathname()
  return (
    <p  className={clsx(
        'p-2 bg-blue-300',
        {
            'bg-blue-400' : pathActual == path
        }
    )}
    >
        {descripcion}
    </p>
  );
}