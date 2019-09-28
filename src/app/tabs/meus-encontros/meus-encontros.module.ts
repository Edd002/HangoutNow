import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeusEncontrosPage } from './meus-encontros.page';

const routes: Routes = [
  {
    path: '',
    component: MeusEncontrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeusEncontrosPage]
})
export class MeusEncontrosPageModule {}
