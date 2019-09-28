import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NavController } from '@ionic/angular';

import { LoginPage } from './login.page';

import { RegistroPage } from './../registro/registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ],
  declarations: [LoginPage]
})

export class LoginPageModule {
  constructor(public navCtrl: NavController) {
  }

  pushRegistro() {
    // CONTINUAR - https://forum.ionicframework.com/t/ion-nav-push-method-not-working-in-ionic-4/155400
    // UTILIZAR O ROUTER
    //this.navCtrl.push(RegistroPage);
  }
}