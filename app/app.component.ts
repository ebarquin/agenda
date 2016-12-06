import { Component, OnInit } from '@angular/core';

import { ContactosService } from "./contactos.service";
import { Contacto } from "./contacto";
@Component({
  //En 'selector' indicamos el elemento HTML en el cual 
  //se instanciará el componente
  selector: 'my-app',
  //En 'template' indicamos la vista asociada al componente.
  //template: `<h1>Hello {{name}}</h1>`,
  //En 'templateUrl' indicamos la ruta a un template externo
  templateUrl: "./app/app.component.html",
  
})
export class AppComponent implements OnInit {

  listaContactos:Contacto[];
  contactoSeleccionado: Contacto;

  //Hacemos la inyección de dependencias del servicio.Aprovechamos
  //que Typescript crea un atributo de aqullos argumentos que tienen 
  //modificaeor de acceso y están tipoados.
  constructor(private _contactoService: ContactosService){ }

  private _actualizarListaContactos(): void{
    this._contactoService
      .obtenerContactos()
      .subscribe((contactos: Contacto[]) => this.listaContactos = contactos);
  }

  //El métpdo 'ngOnInit' viene dado por la interfaz 'OnInit', que es el 
  //hook en el cual inicializamos los valores del componente.
  ngOnInit(): void {
      //Contactos es un atributo de la instancia del componente
      //por lo tanto tienes que acceder primero a la instancia (this) y luego al atributo
       this._actualizarListaContactos();
    
    }

    agregarContacto(contacto: Contacto): void {
        this._contactoService
          .agregarContacto(contacto)
          .subscribe((nuevoContacto: Contacto) => this._actualizarListaContactos());
      
    }

    eliminarContacto(contacto: Contacto):void {
        //Preguntamos al usuario si está seguro de eliminar al contacto.
        if (confirm(`¿Estás segurio de eliminar a ${contacto.nombre}?`)){
        //En caso de estar seguro lo eliminamos.
        this._contactoService
            .eliminarContacto(contacto)
            .subscribe(() => {
              this.contactoSeleccionado = null;
              this._actualizarListaContactos()
            });
        }
    }

    verDetallesContacto(contacto: Contacto):void {
      this.contactoSeleccionado = contacto;

    }
 }