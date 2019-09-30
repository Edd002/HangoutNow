import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabEncontrosConfirmadosPage } from './tab-encontros-confirmados.page';

const routes: Routes = [
  {
    path: '',
    component: TabEncontrosConfirmadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabEncontrosConfirmadosPage]
})
export class TabEncontrosConfirmadosPageModule {}
