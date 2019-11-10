import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AppService } from '../../app.service';
import { AuthService } from '../../auth-service/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss'],
})
export class TabPerfilPage {

  updateError: string;
  form: FormGroup;

  constructor(private navCtrl: NavController, private appService: AppService, private authService: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      user: ['', { disabled: false }, Validators.compose([Validators.required])],
      password: ['', { disabled: false }, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', { disabled: false }, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', { disabled: false }, Validators.compose([Validators.required, Validators.email])],
      cellphone: ['', { disabled: false }, Validators.compose([Validators.required])],
      gender: ['', { disabled: false }, Validators.compose([Validators.required])]
    });
  }

  ionViewWillEnter() {
    // Recuperar usuário aqui

    this.form.setValue({
      user: 'user',
      password: 'pass',
      confirmPassword: 'pass',
      email: 'email',
      cellphone: 'cellphone',
      gender: 'Masculino'
    });
  }

  goToLogin() {
    this.authService.signOut();
    this.appService.loginState = false;
    this.navCtrl.navigateBack('/login');
  }

  submit() {
    // Atualizar dados do usuário
  }

  changePicture() {
    // Adicionar foto ao perfil
  }

  segmentChanged($event) {
  }
}