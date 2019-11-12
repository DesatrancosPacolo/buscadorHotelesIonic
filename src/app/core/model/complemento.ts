import { Extras } from "./extras.enum";

export class Complemento{
    private _extras:Extras[];

	constructor(extras: Extras[]) {
		this._extras = extras;
	}

    /**
     * Getter extras
     * @return {Extras[]}
     */
	public get extras(): Extras[] {
		return this._extras;
	}

    /**
     * Setter extras
     * @param {Extras[]} value
     */
	public set extras(value: Extras[]) {
		this._extras = value;
	}

}