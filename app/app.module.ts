import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component'

import { BindingComponent} from "./ejemplos/binding.component"
@NgModule({
  //Usamos 'imports' para importar otros módulos
  //de los cuales dependemos.
  imports: [
     BrowserModule, FormsModule
  ],
  //En 'declarations' añadimos todos los componentes
  // pipes y directivas de nuestra aplicación
  declarations: [
     AppComponent, 
     ListaContactosComponent,
     BindingComponent 
  ],
  //En 'providers' añadimos todos los servicios de
  //nuestra aplicación
  providers:[],
  //En 'bootstrap' indicamos el componente raiz de 
  //nuestra aplicación.
  bootstrap: [
     AppComponent
     //BindingComponent
  ]
})
export class AppModule { }