export interface PalabraI {
    id?             : number,
    traduccion      : string,
    idioma          : string,
    categoria_id?   : number
}

export interface PalabraCompletaI {
    id          : number,
    traduccion  : string,
    idioma      : string,
    vecesBien   : number,
    vecesMal    : number
}