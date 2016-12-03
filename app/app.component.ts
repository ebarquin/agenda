import { Component, OnInit } from '@angular/core';

@Component({
  //En 'selector' indicamos el elemento HTML en el cual 
  //se instanciará el componente
  selector: 'my-app',
  //En 'template' indicamos la vista asociada al componente.
  //template: `<h1>Hello {{name}}</h1>`,
  //En 'templateUrl' indicamos la ruta a un template externo
  templateUrl: "./app/app.component.html",
  //En s'styles' establecemos los estilos que aplican 
  //a nivel de componente.
  styles:[
    "h1{color: blue; }"
  ]
})
export class AppComponent implements OnInit { 
  
  listaContactos:string[];
 
  
  //El métpdo 'ngOnInit' viene dado por la interfaz 'OnInit', que es el 
  //hook en el cual inicializamos los valores del componente.
  ngOnInit(): void {
      //Contactos es un atributo de la instancia del componente
      //por lo tanto tienes que acceder primero a la instancia (this) y luego al atributo
       this.listaContactos = [
          "Tim Cook",
          "Bil Gates",
          "Elon Musk"
        ];
    
    }
    eliminarContacto(contacto: String):void {
      this.listaContactos = this.listaContactos.filter((c: string) => c !== contacto);
    }
 }