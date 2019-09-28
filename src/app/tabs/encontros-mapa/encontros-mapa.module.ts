import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EncontrosMapaPage } from './encontros-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: EncontrosMapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EncontrosMapaPage]
})
export class EncontrosMapaPageModule {}
