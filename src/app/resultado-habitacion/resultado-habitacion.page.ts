import { Hotel } from './../core/model/hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-habitacion',
  templateUrl: './resultado-habitacion.page.html',
  styleUrls: ['./resultado-habitacion.page.scss'],
})
export class ResultadoHabitacionPage implements OnInit {
  hote: Hotel;
  constructor(private route: ActivatedRoute, public router: Router ) {
    this.hote = this.router.getCurrentNavigation().extras.state.hotel;
  }

  ngOnInit() {
  }

}
