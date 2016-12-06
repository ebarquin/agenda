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
@NgModule({
  //Usamos 'imports' para importar otros módulos
  //de los cuales dependemos.
  imports: [
     BrowserModule, 
     FormsModule,
     HttpModule
  ],
  //En 'declarations' añadimos todos los componentes
  // pipes y directivas de nuestra aplicación
  declarations: [
     AppComponent, 
     ListaContactosComponent,
     BindingComponent,
     FormularioContactoComponent,
     DetallesContactoComponent
  ],
  //En 'providers' añadimos todos los servicios de
  //nuestra aplicación
  providers:[
    ContactosService
  ],
  //En 'bootstrap' indicamos el componente raiz de 
  //nuestra aplicación.
  bootstrap: [
     AppComponent
     //BindingComponent
  ]
})
export class AppModule { }