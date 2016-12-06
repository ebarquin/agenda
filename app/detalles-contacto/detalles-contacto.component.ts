import { Component, Input, Output, EventEmitter } from  "@angular/core";
import { Contacto } from "../contacto";


@Component({
    selector: "detalles-contacto",
    templateUrl: "./app/detalles-contacto/detalles-contacto.component.html"
})
export class DetallesContactoComponent{

    @Input() contacto: Contacto;
    //Usamoes el decorador 'Output' para notificar datos de salida.
    @Output() eliminar: EventEmitter<Contacto> = new EventEmitter();

    //Usamos 'emmit' para notificar eventos.
    notificarEliminacion(contacto: Contacto): void {
        this.eliminar.emit(contacto);
    }

}