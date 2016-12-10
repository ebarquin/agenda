import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ContactosService } from "../contactos.service";
import { Contacto } from "../contacto";


@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"
})

export class MisContactosComponent implements OnInit {
    listaContactos:Contacto[];
  contactoSeleccionado: Contacto;

  //Hacemos la inyección de dependencias del servicio.Aprovechamos
  //que Typescript crea un atributo de aqullos argumentos que tienen 
  //modificaeor de acceso y están tipoados.
  constructor(
    private _contactoService: ContactosService,
    private _activatedRoute: ActivatedRoute ) { }

  //El métpdo 'ngOnInit' viene dado por la interfaz 'OnInit', que es el 
  //hook en el cual inicializamos los valores del componente.
  ngOnInit(): void {
      this._activatedRoute.data.forEach((data: { contactos: Contacto[]}) => {
        this.listaContactos = data.contactos;
      });
    
    }

    eliminarContacto(contacto: Contacto):void {
        //Preguntamos al usuario si está seguro de eliminar al contacto.
        if (confirm(`¿Estás segurio de eliminar a ${contacto.nombre}?`)){
        //En caso de estar seguro lo eliminamos.
        this._contactoService
            .eliminarContacto(contacto)
            .subscribe(() => {
              this.contactoSeleccionado = null;
              this.listaContactos = this.listaContactos.filter((c: Contacto) => c.id !== contacto.id);
            });
        }
    }

    verDetallesContacto(contacto: Contacto):void {
      this.contactoSeleccionado = contacto;

    }
    navegarRuta(ruta: string): void {
      window.open(ruta, "_blank");
    }
 }