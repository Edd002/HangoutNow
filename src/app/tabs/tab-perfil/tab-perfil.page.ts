import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AppService } from '../../app.service';
import { AuthService } from '../../auth-service/auth-service.service';
import { UserService } from '../../user-service/user.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab-perfil',
  templateUrl: 'tab-perfil.page.html',
  styleUrls: ['tab-perfil.page.scss'],
})
export class TabPerfilPage {

  updateError: string;
  form: FormGroup;

  constructor(private navCtrl: NavController, private appService: AppService, private authService: AuthService, private fb: FormBuilder, private userService: UserService) {
    this.form = fb.group({
      user: ['', { disabled: true }, Validators.compose([Validators.required])],
      password: ['', { disabled: true }, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', { disabled: true }, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', { disabled: true }, Validators.compose([Validators.required, Validators.email])],
      cellphone: ['', { disabled: true }, Validators.compose([Validators.required])],
      gender: ['', { disabled: true }, Validators.compose([Validators.required])]
    });
  }

  ionViewWillEnter() {
    this.form.setValue({
      user: this.userService.user.userName,
      password: this.userService.user.userPassword,
      confirmPassword: this.userService.user.userPassword,
      email: this.userService.user.userEmail,
      cellphone: this.userService.user.userCellphone,
      gender: this.userService.user.userGender
    });
  }

  goToLogin() {
    this.authService.signOut();
    this.appService.loginState = false;
    this.userService.user = null;
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