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
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Meus Encontros',
      url: '/meus-encontros',
      icon: 'list-box'
    },
    {
      title: 'Encontros Disponíveis',
      url: '/encontros-disponiveis',
      icon: 'list'
    },
    {
      title: 'Encontros Confirmados',
      url: '/encontros-confirmados',
      icon: 'checkbox-outline'
    },
    {
      title: 'Encontros no Mapa',
      url: '/encontros-mapa',
      icon: 'map'
    },
    {
      title: 'Conversar com Amigos',
      url: '/conversar-amigos',
      icon: 'chatboxes'
    },
    {
      title: 'Perfil',
      url: '/perfil',
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
