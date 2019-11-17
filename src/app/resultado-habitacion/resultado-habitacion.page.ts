import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-habitacion',
  templateUrl: './resultado-habitacion.page.html',
  styleUrls: ['./resultado-habitacion.page.scss'],
})
export class ResultadoHabitacionPage implements OnInit {
  private _hotel: Hotel;
  constructor( public router: Router ) {
    this._hotel = this.router.getCurrentNavigation().extras.state.seleccion;
    console.log(this._hotel);
  }

  ngOnInit() {
  }
  
  public accionBoton(){
    this.router.navigate(['home']);
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
