import { Component, OnInit } from "@angular/core";
import { SlicePipe } from "@angular/common";

@Component({
    selector: "ejemplos-pipes",
    templateUrl: "./app/ejemplos/pipes.component.html" 
})

export class EjemplosPipesComponent implements OnInit{

    cantidad: number = 32.7;

    mensaje: string = "Hola! Buenas Noches KeepCoders!"


    coleccion: string [] = [
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco"
    ];

    coleccionTroceada: string [];

    constructor(private _slicepipe: SlicePipe){ }

    ngOnInit(): void{
        this.coleccionTroceada =this._slicepipe.transform(this.coleccion, 2, 4);

    }

}