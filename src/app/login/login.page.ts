import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  constructor(private navCtrl: NavController) {
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }

  goToHome() {
    this.navCtrl.navigateForward('/tab-home');
  }

  segmentChanged($event){
  }
}