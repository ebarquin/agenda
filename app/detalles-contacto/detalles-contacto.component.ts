import { Component, Input, Output, EventEmitter } from  "@angular/core";
import { Contacto } from "../contacto";


@Component({
    selector: "detalles-contacto",
    templateUrl: "./app/detalles-contacto/detalles-contacto.component.html",
    styleUrls: ["./app/detalles-contacto/detalles-contacto.component.css"]
})
export class DetallesContactoComponent{

    @Input() contacto: Contacto;
    //Usamoes el decorador 'Output' para notificar datos de salida.
    @Output() eliminar: EventEmitter<Contacto> = new EventEmitter();
    @Output() navegarFacebook: EventEmitter<string> = new EventEmitter();
    @Output() navegarTwitter: EventEmitter<string> = new EventEmitter();
    //Usamos 'emmit' para notificar eventos.
    notificarEliminacion(contacto: Contacto): void {
        this.eliminar.emit(contacto);
    }

    notificarNavegacionFacebook(): void {
        this.navegarFacebook.emit(`https://ww.facebook.com/${this.contacto.facebook}`);
    }

    notificarNavegacionTwitter(): void {
        this.navegarTwitter.emit(`https://twitter.com/${this.contacto.twitter}`);

    }

}