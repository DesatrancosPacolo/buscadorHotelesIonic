import { Capacidad } from './capacidad.enum';
import { Complemento } from './complemento';
import { Camas } from './camas.enum';
export class TipoHabitacion{
    private _capacidad: Capacidad;
    private _camas:Camas;
    private _complementos: Complemento;

	constructor(capacidad: Capacidad, camas: Camas, complementos: Complemento) {
		this._capacidad = capacidad;
		this._camas = camas;
		this._complementos = complementos;
	}

    /**
     * Getter capacidad
     * @return {Capacidad}
     */
	public get capacidad(): Capacidad {
		return this._capacidad;
	}

    /**
     * Getter camas
     * @return {Camas}
     */
	public get camas(): Camas {
		return this._camas;
	}

    /**
     * Getter complementos
     * @return {Complemento}
     */
	public get complementos(): Complemento {
		return this._complementos;
	}

    /**
     * Setter capacidad
     * @param {Capacidad} value
     */
	public set capacidad(value: Capacidad) {
		this._capacidad = value;
	}

    /**
     * Setter camas
     * @param {Camas} value
     */
	public set camas(value: Camas) {
		this._camas = value;
	}

    /**
     * Setter complementos
     * @param {Complemento} value
     */
	public set complementos(value: Complemento) {
		this._complementos = value;
	}

}