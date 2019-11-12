import { GeneradorHoteles } from "./generador-hoteles";
import { Habitacion } from "./habitacion";
import { Hotel } from "./hotel";
import { Categoria } from "./categoria";
import { Capacidad } from "./capacidad.enum";
import { Camas } from "./camas.enum";
import { Extras } from "./extras.enum";

export class Filtrador{

private hoteles: Hotel[];
  private _habitacionPedida:Habitacion;
  private _categoria:Categoria;
  private _hotelesMostrar:Hotel[];
  private _habitaciones:Habitacion[]=[];
  constructor(habitacionPedida:Habitacion,categoria:Categoria, hoteles: Hotel[]) {
    this._habitacionPedida=habitacionPedida;
    this._categoria=categoria;
    this.hoteles=hoteles;
  }
    
public filtrar():Hotel[]{
    this._hotelesMostrar = [];
    this.hoteles.forEach(esteHotel => {
         this._habitaciones=[];
         let categoria = Categoria[esteHotel.$categoria];
      
      if (this._categoria===undefined) {
        esteHotel.$tiposHabitacion.forEach(habitacion => {
          this.comprobarCama(habitacion)
        });
      }else if (this._categoria.toString()===categoria) {
        esteHotel.$tiposHabitacion.forEach(habitacion => {
          this.comprobarCama(habitacion)
        });
      }
      if (this._habitaciones.length!=0) {
        this._hotelesMostrar.push(new Hotel(esteHotel.$nombre,esteHotel.$categoria,this._habitaciones))
      }
    });
    return this._hotelesMostrar;
  }
  
  private comprobarCama(habitacion: Habitacion) {
       let cama = Camas[habitacion.tipoHabitacion.camas];
    if (this.habitacionPedida.tipoHabitacion.camas === undefined) {
         this.comprobarCapacidad(habitacion);
    } else if (this.habitacionPedida.tipoHabitacion.camas.toString() === cama) {
         this.comprobarCapacidad(habitacion);
    }
  }
  private comprobarCapacidad(habitacion: Habitacion) {
       let capacidad = Capacidad[habitacion.tipoHabitacion.capacidad];
    if (this.habitacionPedida.tipoHabitacion.capacidad === undefined) {
         this.comprobarExtras(habitacion);
    } else if (this.habitacionPedida.tipoHabitacion.capacidad.toString() === capacidad) {
         this.comprobarExtras(habitacion);
    }
  }
  private comprobarExtras(habitacion: Habitacion) {
    if (this.habitacionPedida.tipoHabitacion.complementos.extras.length === 0) {
         this._habitaciones.push(habitacion);
    } else {
         let arrayExtras = habitacion.tipoHabitacion.complementos.extras;
         let arrayPeticion = this.habitacionPedida.tipoHabitacion.complementos.extras;
         let contador = 0;
         for (let index = 0; index < arrayPeticion.length; index++) {
              for (let indexDos = 0; indexDos < arrayExtras.length; indexDos++) {
                      let nombreExtra = Extras[arrayExtras[indexDos]];
                   if (nombreExtra === arrayPeticion[index].toString()) {
                        contador++;
                   }
  
              }
         }
         if (contador >= 1 && contador >= arrayPeticion.length) {
              this._habitaciones.push(habitacion)
  
         }
    }
  
    
  }

    /**
     * Getter $hoteles
     * @return {Hotel[]}
     */
	public get $hoteles(): Hotel[] {
		return this.hoteles;
	}

    /**
     * Getter habitacionPedida
     * @return {Habitacion}
     */
	public get habitacionPedida(): Habitacion {
		return this._habitacionPedida;
	}

    /**
     * Getter categoria
     * @return {Categoria}
     */
	public get categoria(): Categoria {
		return this._categoria;
	}

    /**
     * Getter hotelesMostrar
     * @return {Hotel[]}
     */
	public get hotelesMostrar(): Hotel[] {
		return this._hotelesMostrar;
	}

    /**
     * Getter habitaciones
     * @return {Habitacion[]}
     */
	public get habitaciones(): Habitacion[] {
		return this._habitaciones;
	}

    /**
     * Setter $hoteles
     * @param {Hotel[]} value
     */
	public set $hoteles(value: Hotel[]) {
		this.hoteles = value;
	}

    /**
     * Setter habitacionPedida
     * @param {Habitacion} value
     */
	public set habitacionPedida(value: Habitacion) {
		this._habitacionPedida = value;
	}

    /**
     * Setter categoria
     * @param {Categoria} value
     */
	public set categoria(value: Categoria) {
		this._categoria = value;
	}

    /**
     * Setter hotelesMostrar
     * @param {Hotel[]} value
     */
	public set hotelesMostrar(value: Hotel[]) {
		this._hotelesMostrar = value;
	}

    /**
     * Setter habitaciones
     * @param {Habitacion[]} value
     */
	public set habitaciones(value: Habitacion[]) {
		this._habitaciones = value;
	}
  
}