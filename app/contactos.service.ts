import { Injectable } from "@angular/core";


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
}