import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      user: ['', Validators.compose([Validators.required])],
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
      user: data.user,
      password: data.password,
      email: data.email,
      cellphone: data.cellphone,
      gender: data.gender
    };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.navigateRoot('/tab-home'),
      error => this.signupError = error.message
    );
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  segmentChanged($event) {
  }
}