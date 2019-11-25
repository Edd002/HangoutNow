import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController, private authService: AuthService, private fb: FormBuilder, private alertController: AlertController) {
    this.form = fb.group({
      user: [{ value: '',  disabled: true }, Validators.compose([Validators.required])],
      password: [{ value: '',  disabled: true }, Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [{ value: '',  disabled: true }, Validators.compose([Validators.required, Validators.minLength(6)])],
      email: [{ value: '',  disabled: true }, Validators.compose([Validators.required, Validators.email])],
      cellphone: [{ value: '',  disabled: true }, Validators.compose([Validators.required])],
      gender: [{ value: '',  disabled: true }, Validators.compose([Validators.required])]
    });
  }

  ionViewWillEnter() {
    this.form.setValue({
      user: this.authService.userProfile.name,
      password: this.authService.userProfile.password,
      confirmPassword: this.authService.userProfile.password,
      email: this.authService.userProfile.email,
      cellphone: this.authService.userProfile.cellphone,
      gender: this.authService.userProfile.gender
    });
  }

  async goToLogin() {
    this.authService.signOut();
    this.navCtrl.navigateBack('/login');
    const alert = await this.alertController.create({
      header: 'Logoff',
      subHeader: '',
      message: 'Logoff realizado.',
      buttons: ['OK']
    });
    await alert.present();
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