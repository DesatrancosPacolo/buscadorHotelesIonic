import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Filtrador } from './../core/model/filtrador';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  generador: GeneradorHoteles;

  constructor(public router: Router) {
    this.generador = new GeneradorHoteles();
  }

  obtenerHoteles() {
    let navigationExtras: NavigationExtras = {
      state: {
        hoteles: this.generador.getHoteles()
      }
    }
    this.router.navigate(['resultado-hoteles'], navigationExtras);
  }
}
