import { Pipe, PipeTransform } from "@angular/core";

import { Contacto } from "./contacto";

@Pipe({
    name: "Ordenar"
})
export class OrdenPipe implements PipeTransform {

    transform(contactos: Contacto[], orden: string): Contacto []{

        let contactosOrdenados: Contacto [];

        //En caso de ordenación ascendente
        if (orden === "asc") {
            contactosOrdenados = contactos.sort((contactoA: Contacto, ContactoB: Contacto): number => {
                let nombreContactoA: string = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase(); 
                let nombreContactoB: String = `${ContactoB.nombre} ${ContactoB.apellidos}`.toLowerCase();
            
                return nombreContactoA > nombreContactoB ? 1 : nombreContactoA < nombreContactoB ? -1 : 0; 
        
            });
        } 
        //En caso de ordenación descendente
        else {
           contactosOrdenados = contactos.sort((contactoA: Contacto, ContactoB: Contacto): number => {
                let nombreContactoA: string = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase(); 
                let nombreContactoB: String = `${ContactoB.nombre} ${ContactoB.apellidos}`.toLowerCase();
            
                return nombreContactoB > nombreContactoA ? 1 : nombreContactoB < nombreContactoA ? -1 : 0; 
        
            });

        }
        return contactosOrdenados
    }
}