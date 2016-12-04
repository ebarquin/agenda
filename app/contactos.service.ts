import { Injectable } from "@angular/core";

//Para que una clase se comporte como un servicio es necesaria
//decorarla como un 'Injectable'.
@Injectable()
export class ContactosService {

    private _contactos:string[] = [
        "Tim Cook",
        "Bil Gates",
        "Elon Musk"

    ];

    obtenerContactos (): string[] {
        return this._contactos

    }

    agregarContacto(contacto: string): void {
        this._contactos.push(contacto);
    }
    
    eliminarContacto(contacto: string): void {
        this._contactos = this._contactos
                            .filter((c: string) => c !== contacto);

    }
}