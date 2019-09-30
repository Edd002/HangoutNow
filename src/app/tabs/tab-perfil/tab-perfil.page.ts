import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss'],
})
export class TabPerfilPage {

  constructor(private navCtrl: NavController) {
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  segmentChanged($event){
  }
}