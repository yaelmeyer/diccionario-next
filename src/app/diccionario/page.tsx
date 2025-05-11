'use client'

import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import FormNuevaPalabra from "./ui/formNuevaPalabra";

export default function NewPalabra() {
  const [showModal, setShowModal] = useState<boolean>(false)


  useEffect(()=>{
    setShowModal(false)
  }, [])

  return (
    <div>
      <h1>diccionario</h1>
      <button className="p-2 bg-red-300 hover:cursor-pointer" onClick={()=> setShowModal(true)}>Nueva Palabra</button>
      <Modal isOpen={showModal} onClose={()=> setShowModal(false)}>
        <FormNuevaPalabra></FormNuevaPalabra>
      </Modal>
    </div>
  );
}