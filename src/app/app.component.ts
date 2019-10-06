import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppService } from './app.service';

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
      icon: 'contact'
    },
    {
      title: 'Encontros Disponíveis',
      url: '/tab-encontros-disponiveis',
      icon: 'search'
    },
    {
      title: 'Encontros Confirmados',
      url: '/tab-encontros-confirmados',
      icon: 'checkbox'
    },
    {
      title: 'Encontros no Mapa',
      url: '/tab-encontros-mapa',
      icon: 'navigate'
    },
    {
      title: 'Conversar com Amigos',
      url: '/tab-conversar-amigos',
      icon: 'chatboxes'
    },
    {
      title: 'Perfil',
      url: '/tab-perfil',
      icon: 'settings'
    }
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private appService: AppService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  hasLoggedIn() {
    return this.appService.loginState;
  }
}
