import { Component } from "@angular/core";

@Component({
    selector: "ejemplo-binding",
    templateUrl:"./app/ejemplos/binding.component.html",
    styles:[`
        .mensaje-tuneado{
            background-color: deeppink;
            color:white;
        }
    `
    ]
})
export class BindingComponent {

    mensaje: string = "Buenas noches KeeCoders";

    obtenerColumnas(): string {
        return "10";
    }

    obtenerFilas(): string {
        return "2";
    }
    tuneado: boolean = true;

    estiloEnColorAzul: string = "blue";

    mostrarMensaje(): void{
        alert("Recuerda: El problema siempre está entre la pantalla y la silla");
    }

    saludo: string;
}