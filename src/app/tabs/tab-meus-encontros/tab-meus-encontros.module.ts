import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabMeusEncontrosPage } from './tab-meus-encontros.page';

const routes: Routes = [
  {
    path: '',
    component: TabMeusEncontrosPage
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
    TabMeusEncontrosPage
  ]
})
export class TabMeusEncontrosPageModule {}
