import { TipoHabitacion } from "./tipoHabitacion";

export class Habitacion {
    private _precio:number;
    private _tipoHabitacion: TipoHabitacion;

	constructor(precio: number, tipoHabitacion: TipoHabitacion) {
		this._precio = precio;
		this._tipoHabitacion = tipoHabitacion;
	}

    /**
     * Getter precio
     * @return {number}
     */
	public get precio(): number {
		return this._precio;
	}

    /**
     * Getter tipoHabitacion
     * @return {TipoHabitacion[]}
     */
	public get tipoHabitacion(): TipoHabitacion {
		return this._tipoHabitacion;
	}

    /**
     * Setter precio
     * @param {number} value
     */
	public set precio(value: number) {
		this._precio = value;
	}

    /**
     * Setter tipoHabitacion
     * @param {TipoHabitacion[]} value
     */
	public set tipoHabitacion(value: TipoHabitacion) {
		this._tipoHabitacion = value;
	}
    
}
