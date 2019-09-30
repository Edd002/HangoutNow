import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TabEncontrosDisponiveisPage } from './tab-encontros-disponiveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabEncontrosDisponiveisPage
      }
    ])
  ],
  declarations: [TabEncontrosDisponiveisPage]
})
export class TabEncontrosDisponiveisPageModule {}
