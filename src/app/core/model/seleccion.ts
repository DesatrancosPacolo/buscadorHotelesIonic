import { Capacidad } from './capacidad.enum';
import { Camas } from './camas.enum';
import { Categoria } from './categoria';
import { Extras } from './extras.enum';
export class Seleccion{
    private _categoria:string;
    private _camas:string;
    private _capacidad:string;
    private _extras:Extras[];
    

	constructor(categoria: string, camas: string, capacidad: string, extras:Extras[]) {
		this._categoria = categoria;
		this._camas = camas;
        this._capacidad = capacidad;
        this._extras=extras;
	}

    /**
     * Getter categoria
     * @return {string}
     */
	public get categoria(): string {
		return this._categoria;
	}

    /**
     * Getter camas
     * @return {string}
     */
	public get camas(): string {
		return this._camas;
	}

    /**
     * Getter capacidad
     * @return {string}
     */
	public get capacidad(): string {
		return this._capacidad;
    }
    
    public get extras():Extras[]{
        return this._extras;
    }

    /**
     * Setter categoria
     * @param {string} value
     */
	public set categoria(value: string) {
		this._categoria = value;
	}

    /**
     * Setter camas
     * @param {string} value
     */
	public set camas(value: string) {
		this._camas = value;
	}

    /**
     * Setter capacidad
     * @param {string} value
     */
	public set capacidad(value: string) {
		this._capacidad = value;
	}

    public set extras(value:Extras[]){
        this._extras = value;
    }

}