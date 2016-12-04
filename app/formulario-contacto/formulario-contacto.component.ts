import { Component, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: "formlario-contacto",
    templateUrl: "./app/formulario-contacto/formulario-contacto.component.html"

})
export class FormularioContactoComponent{

    nombreContacto: string;

    @Output() nuevoContacto: EventEmitter<string> = new EventEmitter();
    
    notificarCreacionContacto(){
        this.nuevoContacto.emit(this.nombreContacto);
    }
}