import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultadoHabitacionPage } from './resultado-habitacion.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoHabitacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadoHabitacionPage]
})
export class ResultadoHabitacionPageModule {}
