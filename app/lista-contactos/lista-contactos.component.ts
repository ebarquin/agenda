import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html"

})

export class ListaContactosComponent {

    //Usamos el decorador 'Input' para enlazar datos de entrada  
    @Input() contactos: string[];

    //Usamoes el decorador 'Output' para notificar datos de salida.
    @Output() eliminar: EventEmitter<string> = new EventEmitter();

    notificarEliminacion(contacto: string): void {
        //Usamos 'emmit' para notificar eventos.
        this.eliminar.emit(contacto);
    }

}