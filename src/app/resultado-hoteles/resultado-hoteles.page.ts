import { Camas } from './../core/model/camas.enum';
import { Categoria } from './../core/model/categoria';
import { Seleccion } from './../core/model/seleccion';
import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-resultado-hoteles',
  templateUrl: './resultado-hoteles.page.html',
  styleUrls: ['./resultado-hoteles.page.scss'],
})
export class ResultadoHotelesPage implements OnInit {
  private _hotelesFiltrados: Hotel[];
  private _totalHoteles:Hotel[];

  private _seleccion:Seleccion;

  constructor( public router: Router) {
    this._totalHoteles=new GeneradorHoteles().getHoteles();
    this._seleccion = this.router.getCurrentNavigation().extras.state.seleccion;
    this.filtrar();
    

   }

   private filtrar(){
     let filtrado:Hotel[]=this.totalHoteles;
     if (this._seleccion.categoria&& this._seleccion.categoria!=="") {
       filtrado=this.filtrarCategoria(filtrado);
     }
     if (this._seleccion.camas&&this._seleccion.camas!=="") {
       filtrado=this.filtrarCamas(filtrado);
     }
     if (this._seleccion.capacidad&&this._seleccion.capacidad!=="") {
       filtrado=this.filtrarCapacidad(filtrado);
     }
     if (this._seleccion.extras && this.seleccion.extras.length>0) {
       filtrado=this.filtrarExtras(filtrado);
     }
     this.hotelesFiltrados=filtrado;

   }

   
   private filtrarExtras(hoteles:Hotel[]):Hotel[]{
    let retorno:Hotel[];
    hoteles.forEach(miHotel => {
      let encontrado:boolean=false;
      miHotel.$tiposHabitacion.forEach(habitacion => {
        let extras = habitacion.tipoHabitacion[0].complementos.extras.filter((extra)=>this.seleccion.extras.includes(extra));
        if (extras.length>0) {
          encontrado=true;
        }
      });
      if (encontrado) {
        retorno.push(miHotel);
      }
    });
    return retorno;
   }

   private filtrarCapacidad(hoteles:Hotel[]):Hotel[]{
    let retorno:Hotel[];
    hoteles.forEach(miHotel => {
      let habitaciones=miHotel.$tiposHabitacion.filter((habitacion)=>habitacion.tipoHabitacion.capacidad.toString()===this.seleccion.capacidad);
      if(habitaciones.length>0){
        retorno.push(miHotel);
      }
    });
    return retorno;
   }

   private filtrarCategoria(hoteles:Hotel[]):Hotel[]{
    let retorno:Hotel[];
    retorno = hoteles.filter((hotel)=>hotel.$categoria===Categoria[this.seleccion.categoria]);
    return retorno;
   }

   private filtrarCamas(hoteles:Hotel[]):Hotel[]{
    let retorno:Hotel[];
    hoteles.forEach(miHotel => {
      let habitaciones=miHotel.$tiposHabitacion.filter((habitacion)=>habitacion.tipoHabitacion.camas===Camas[this.seleccion.camas]);
      if(habitaciones.length>0){
        retorno.push(miHotel);
      }
    });
    return retorno;
   }

  ngOnInit() {
  }

   public accionBoton(hotel:Hotel) {
      let navigationExtras: NavigationExtras = {
        state: {
          seleccion: hotel
        }
      }
      this.router.navigate(['resultado-habitacion'], navigationExtras);


    }


    /**
     * Getter totalHoteles
     * @return {Hotel[]}
     */
	public get totalHoteles(): Hotel[] {
		return this._totalHoteles;
	}

    /**
     * Setter totalHoteles
     * @param {Hotel[]} value
     */
	public set totalHoteles(value: Hotel[]) {
		this._totalHoteles = value;
	}
	

    /**
     * Getter hotelesFiltrados
     * @return {Hotel[]}
     */
	public get hotelesFiltrados(): Hotel[] {
		return this._hotelesFiltrados;
	}

    /**
     * Getter seleccion
     * @return {Seleccion}
     */
	public get seleccion(): Seleccion {
		return this._seleccion;
	}

    /**
     * Setter hotelesFiltrados
     * @param {Hotel[]} value
     */
	public set hotelesFiltrados(value: Hotel[]) {
		this._hotelesFiltrados = value;
	}

    /**
     * Setter seleccion
     * @param {Seleccion} value
     */
	public set seleccion(value: Seleccion) {
		this._seleccion = value;
	}


}
