import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from '../..//google-map/google-map.component';

import { IonicModule } from '@ionic/angular';

import { TabEncontrosMapaPage } from './tab-encontros-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: TabEncontrosMapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabEncontrosMapaPage,
    GoogleMapComponent
  ]
})
export class TabEncontrosMapaPageModule {}
