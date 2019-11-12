import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-hoteles',
  templateUrl: './resultado-hoteles.page.html',
  styleUrls: ['./resultado-hoteles.page.scss'],
})
export class ResultadoHotelesPage implements OnInit {
  datosHoteles: Hotel[];
  constructor(private route: ActivatedRoute, public router: Router) {
    this.datosHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
   }

  ngOnInit() {
  }

}
