import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component'

import { BindingComponent} from "./ejemplos/binding.component";
import { ContactosService } from "./contactos.service";
import {  FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { DetallesContactoComponent } from "./detalles-contacto/detalles-contacto.component";
import { AppRoutingModule } from "./app-routing.module";
import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { BarraNavegacionComponent } from "./barra-navegacion/barra-navegacion.component"
import { ContactosResolve } from "./contactos-resolve.service";
import { OrdenPipe } from "./orden.pipe";

@NgModule({
  //Usamos 'imports' para importar otros módulos
  //de los cuales dependemos.
  imports: [
     BrowserModule, 
     FormsModule,
     HttpModule,
     AppRoutingModule
  ],
  //En 'declarations' añadimos todos los componentes
  // pipes y directivas de nuestra aplicación
  declarations: [
     AppComponent, 
     ListaContactosComponent,
     BindingComponent,
     FormularioContactoComponent,
     DetallesContactoComponent,
     MisContactosComponent,
     NuevoContactoComponent,
     BarraNavegacionComponent,
     OrdenPipe
  ],
  //En 'providers' añadimos todos los servicios de
  //nuestra aplicación
  providers:[
    ContactosService,
    ContactosResolve
  ],
  //En 'bootstrap' indicamos el componente raiz de 
  //nuestra aplicación.
  bootstrap: [
     AppComponent
     //BindingComponent
  ]
})
export class AppModule { }