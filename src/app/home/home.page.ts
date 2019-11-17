import { Seleccion } from './../core/model/seleccion';
import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Filtrador } from './../core/model/filtrador';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Categoria } from '../core/model/categoria';
import { Camas } from '../core/model/camas.enum';
import { Extras } from '../core/model/extras.enum';
import { Capacidad } from '../core/model/capacidad.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _capacidades = [];
  private _extras = [];
  private _tiposCamas = [];
  private _categorias = [];
  private _categoriaSeleccionada: string = "";
  private _tipoCamaSeleccionada: string = "";
  private _capacidadSeleccionada: string = "";
  private _extraSeleccionados = [];


  constructor(public router: Router) {
    this.rellenarSelectores();
  }

  private rellenarSelectores() {
    for (let i = 0; i < Object.keys(Categoria).length / 2; i++) {
      this._categorias.push(Categoria[i].toString());
    };
    for (let i = 0; i < Object.keys(Camas).length / 2; i++) {
      this._tiposCamas.push(Camas[i].toString());
    };
    for (let i = 0; i < Object.keys(Extras).length / 2; i++) {
      this._extras.push(Extras[i].toString());
    };
    for (let i = 0; i < Object.keys(Capacidad).length / 2; i++) {
      this._capacidades.push(Capacidad[i].toString());
    };

  }

 

  public accionBoton() {
    let misExtras: Extras[] = [];
    for (let index = 0; index < this._extraSeleccionados.length; index++) {
      if (this._extraSeleccionados[index] === true) {
        misExtras.push(this._extras[index]);
      }
    }
      let seleccion: Seleccion = new Seleccion(this._categoriaSeleccionada, this._tipoCamaSeleccionada, this._capacidadSeleccionada, misExtras);
      let navigationExtras: NavigationExtras = {
        state: {
          seleccion: seleccion
        }
      }
      this.router.navigate(['resultado-hoteles'], navigationExtras);


    }


}
