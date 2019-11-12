import { Camas } from './camas.enum';
import { Hotel } from './hotel';
import { Extras } from './extras.enum';
import { Categoria } from './categoria';
import { Habitacion } from './habitacion';
import { Capacidad } from './capacidad.enum';
import { TipoHabitacion } from './tipoHabitacion';
import { Complemento } from './complemento';
export class GeneradorHoteles {
    private nombreHoteles=[""];
   
    private nombre=[Extras.aireAcondicionado]
    private _habitacion1 = [new Habitacion(100,new TipoHabitacion(Capacidad.triple, Camas.kingsize, new Complemento(this.nombre)))];
    private _habitacion2 = [new Habitacion(300,new TipoHabitacion(Capacidad.doble, Camas.individual,new Complemento([Extras.aireAcondicionado, Extras.miniBar, Extras.jacuzzi])))];
    private _habitacion3 = [new Habitacion(200,new TipoHabitacion(Capacidad.triple, Camas.kingsize,new Complemento([Extras.aireAcondicionado, Extras.jacuzzi])))];
    private _habitacion4 = [new Habitacion(600,new TipoHabitacion(Capacidad.individual, Camas.doble, new Complemento([Extras.aireAcondicionado, Extras.secador])))];

    public getHoteles(): Hotel[] {
        let _arrayNombreHoteles = [];
        _arrayNombreHoteles.push(new Hotel("Hotel Tryp Medea",Categoria.cinco,this._habitacion1));
        _arrayNombreHoteles.push(new Hotel("Hotel Don Pedro",Categoria.cuatro,this._habitacion1));
       _arrayNombreHoteles.push(new Hotel("Hotel Transilvaña",Categoria.cuatro,this._habitacion2));
       _arrayNombreHoteles.push(new Hotel("Hotel Acosta Centro",Categoria.tres,this._habitacion2));
        _arrayNombreHoteles.push(new Hotel("Hotel Romero",Categoria.tres,this._habitacion3));
        _arrayNombreHoteles.push(new Hotel("Hotel Zenit de Vigo",Categoria.tres,this._habitacion3));
        _arrayNombreHoteles.push(new Hotel("Hotel Espronceda",Categoria.dos,this._habitacion4));
        _arrayNombreHoteles.push(new Hotel("Hotel Pepito",Categoria.dos,this._habitacion4));
        _arrayNombreHoteles.push(new Hotel("Hotel Menganito",Categoria.uno,this._habitacion3));
        _arrayNombreHoteles.push(new Hotel("Hotel Fulanito",Categoria.uno,this._habitacion4));
        console.log(_arrayNombreHoteles)
        return _arrayNombreHoteles;
}
}
