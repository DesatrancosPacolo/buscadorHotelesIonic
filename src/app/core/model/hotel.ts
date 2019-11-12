import { Categoria } from './categoria';
import { Habitacion } from './habitacion';
export class Hotel {
        private nombre:string;
        private categoria: Categoria;
        private tiposHabitacion: Habitacion[];

	constructor($nombre: string, $categoria: Categoria, $tiposHabitacion: Habitacion[]) {
		this.nombre = $nombre;
		this.categoria = $categoria;
		this.tiposHabitacion = $tiposHabitacion;
	}

    /**
     * Getter $nombre
     * @return {string}
     */
	public get $nombre(): string {
		return this.nombre;
	}

    /**
     * Getter $categoria
     * @return {Categoria}
     */
	public get $categoria(): Categoria {
		return this.categoria;
	}

    /**
     * Getter $tiposHabitacion
     * @return {Habitacion[]}
     */
	public get $tiposHabitacion(): Habitacion[] {
		return this.tiposHabitacion;
	}

    /**
     * Setter $nombre
     * @param {string} value
     */
	public set $nombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter $categoria
     * @param {Categoria} value
     */
	public set $categoria(value: Categoria) {
		this.categoria = value;
	}

    /**
     * Setter $tiposHabitacion
     * @param {Habitacion[]} value
     */
	public set $tiposHabitacion(value: Habitacion[]) {
		this.tiposHabitacion = value;
	}

}