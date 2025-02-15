'use server'

import prisma from "@/lib/prisma"

export const getAllPalabras = async () =>{
    try {
        const palabras = await prisma.palabra.findMany();
        
        return palabras
    } catch (error) {
        console.log('error DAO, al obtener las palabras: '+error)
    }

}

export const newPalabra = async(espaniol:string, ingles:string) =>{
    try {
        const newPalabra = await prisma.palabra.create({
            data:{
                espaniol: espaniol,
                ingles: ingles
            }
        })
        console.log(newPalabra)
        return newPalabra
    } catch (error) {
        console.log('Error DAO al guardar palabra: '+error)
    }
}

export const getPalabraByEspaniol = async(espaniol:string) =>{
    try {
        const palabra = await prisma.palabra.findFirst({
            where:{
                espaniol: espaniol
            }
        })

        return palabra
    } catch (error) {
        console.log('Error DAO al obtener palabra: '+error)
    }
}

export const getPalabraByIngles = async(ingles:string) =>{
    try {
        const palabra = await prisma.palabra.findFirst({
            where:{
                ingles: ingles
            }
        })

        return palabra
    } catch (error) {
        console.log('Error DAO al obtener palabra: '+error)
    }
}

export const deletePalabra = async(id:string) =>{
    try {
        const palabraEliminada = await prisma.palabra.delete({
            where:{
                id: id
            }
        })

        return palabraEliminada
    } catch (error) {
        console.log('Error DAO al eliminar palabra: '+error)
    }
}