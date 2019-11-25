import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { AuthService } from '../auth-service/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {

  signupError: string;
  form: FormGroup;

  constructor(private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder, private alertController: AlertController) {
    this.form = fb.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cellphone: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])]
    });
  }

  signup() {
    let data = this.form.value;
    let credentials = {
      name: data.name,
      password: data.password,
      email: data.email,
      cellphone: data.cellphone,
      gender: data.gender
    };

    this.auth.signUp(credentials).then(
      () => this.loadHome(),
      error => this.signupError = error.message
    );
  }

  async loadHome() {
    this.navCtrl.navigateRoot('/tab-home');
    const alert = await this.alertController.create({
      header: 'Cadastro',
      subHeader: '',
      message: 'Cadastro Realizado',
      buttons: ['OK']
    });
    await alert.present();
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  segmentChanged($event) {
  }
}