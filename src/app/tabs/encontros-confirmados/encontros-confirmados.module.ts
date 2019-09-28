import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EncontrosConfirmadosPage } from './encontros-confirmados.page';

const routes: Routes = [
  {
    path: '',
    component: EncontrosConfirmadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EncontrosConfirmadosPage]
})
export class EncontrosConfirmadosPageModule {}
