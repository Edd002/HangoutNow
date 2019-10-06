import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss'],
})
export class TabPerfilPage {

  constructor(private navCtrl: NavController, private appService: AppService) {
  }

  goToLogin() {
    this.appService.loginState = false;
    this.navCtrl.navigateBack('/login');
  }

  segmentChanged($event){
  }
}