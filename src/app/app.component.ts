import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
