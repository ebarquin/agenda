import { Component, OnInit } from "@angular/core";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html"

})

export class ListaContactosComponent implements OnInit{
      
    contactos:string[]
     
    ngOnInit(): void {
        //Contactos es un atributo de la instancia del componente
        //por lo tanto tienes que acceder primero a la instancia (this) y luego al atributo
         this.contactos = [
            "Tim Cook",
            "Bil Gates",
            "Elon Musk"
        ];

    }

}