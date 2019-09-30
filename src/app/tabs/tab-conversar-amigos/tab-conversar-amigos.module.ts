import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabConversarAmigosPage } from './tab-conversar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: TabConversarAmigosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabConversarAmigosPage]
})

export class TabConversarAmigosPageModule {}