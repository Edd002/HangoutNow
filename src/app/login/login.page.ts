import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from '../auth-service/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;

  constructor(private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    let data = this.loginForm.value;
    if (!data.email) {
      return;
    }
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials).then(
      () => this.navCtrl.navigateRoot('/tab-home'),
      error => this.loginError = error.message
    );
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }

  segmentChanged($event) {
  }
}