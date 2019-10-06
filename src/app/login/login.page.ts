import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  constructor(private navCtrl: NavController, private appService: AppService) {
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }

  goToHome() {
    this.appService.loginState = true;
    this.navCtrl.navigateForward('/tab-home');
  }

  segmentChanged($event){
  }
}