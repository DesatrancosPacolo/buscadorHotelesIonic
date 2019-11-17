import { Extras } from './../core/model/extras.enum';
import { Camas } from './../core/model/camas.enum';
import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../core/model/categoria';
import { Capacidad } from '../core/model/capacidad.enum';

@Component({
  selector: 'app-resultado-habitacion',
  templateUrl: './resultado-habitacion.page.html',
  styleUrls: ['./resultado-habitacion.page.scss'],
})
export class ResultadoHabitacionPage implements OnInit {
  private _hotel: Hotel;
  constructor(public router: Router) {
    this._hotel = this.router.getCurrentNavigation().extras.state.seleccion;
    console.log(this._hotel);
  }

  ngOnInit() {
  }

  public accionBoton() {
    this.router.navigate(['home']);
  }
  public nombreCategoria(categoria: Categoria): string {
    for (let i = 0; i < Object.keys(Categoria).length / 2; i++) {
      if (categoria === i) {
        return Categoria[i];
      }
    };
  }

  public nombreCapacidad(capacidad: Capacidad): string {
    for (let i = 0; i < Object.keys(Capacidad).length / 2; i++) {
      if (capacidad === i) {
        return Capacidad[i];
      }
    };
  }

  public nombreCamas(camas: Camas): string {
    for (let i = 0; i < Object.keys(Camas).length / 2; i++) {
      if (camas === i) {
        return Camas[i];
      }
    };
  }

  public nombreExtras(extras: Extras[]): string[] {
    console.log(extras);
    let retorno: string[] = [];
    extras.forEach(miExtra => {
      retorno.push(Extras[miExtra]);
    });
    return retorno;
  }

  /**
   * Getter hotel
   * @return {Hotel}
   */
  public get hotel(): Hotel {
    return this._hotel;
  }

  /**
   * Setter hotel
   * @param {Hotel} value
   */
  public set hotel(value: Hotel) {
    this._hotel = value;
  }

}
