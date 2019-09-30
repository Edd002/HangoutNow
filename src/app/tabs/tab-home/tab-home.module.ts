import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabHomePage
      }
    ])
  ],
  declarations: [TabHomePage]
})
export class TabHomePageModule {
  public appPages = [
    {
      title: 'Home',
      url: '/tab-home',
      icon: 'home'
    },
    {
      title: 'Meus Encontros',
      url: '/tab-meus-encontros',
      icon: 'list-box'
    },
    {
      title: 'Encontros Disponíveis',
      url: '/tab-encontros-disponiveis',
      icon: 'list'
    },
    {
      title: 'Encontros Confirmados',
      url: '/tab-encontros-confirmados',
      icon: 'checkbox-outline'
    },
    {
      title: 'Encontros no Mapa',
      url: '/tab-encontros-mapa',
      icon: 'map'
    },
    {
      title: 'Conversar com Amigos',
      url: '/tab-conversar-amigos',
      icon: 'chatboxes'
    },
    {
      title: 'Perfil',
      url: '/tab-perfil',
      icon: 'person'
    }
  ];
}