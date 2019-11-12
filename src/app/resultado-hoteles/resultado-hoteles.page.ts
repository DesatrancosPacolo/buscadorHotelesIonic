import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-resultado-hoteles',
  templateUrl: './resultado-hoteles.page.html',
  styleUrls: ['./resultado-hoteles.page.scss'],
})
export class ResultadoHotelesPage implements OnInit {
  private datosHoteles: Hotel[];
  constructor(private route: ActivatedRoute, public router: Router) {
    this.datosHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
   }

  ngOnInit() {
  }

   obtenerHotel(hotel: Hotel) {
     let navigationExtras: NavigationExtras = {
       state: {
         hotel: Hotel
       }
     }
     this.router.navigate(['resultado-habitacion'], navigationExtras);
   }

	public get $datosHoteles(): Hotel[] {
		return this.datosHoteles;
	}

    
	public set $datosHoteles(value: Hotel[]) {
		this.datosHoteles = value;
	}


}
