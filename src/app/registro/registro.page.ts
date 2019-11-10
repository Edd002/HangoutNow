import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AuthService } from '../auth-service/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user-service/user.model';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {

  signupError: string;
  form: FormGroup;

  constructor(private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder, public userService: UserService) {
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
      () => this.loadHomeAndRegisterUser(credentials),
      error => this.signupError = error.message
    );
  }

  loadHomeAndRegisterUser(credentials: any) {
    let user: User = new User();
    user.userName = credentials.user;
    user.userPassword = credentials.password;
    user.userEmail = credentials.email;
    user.userCellphone = credentials.cellphone;
    user.userGender = credentials.gender;

    this.userService.registerUser(user);
    this.navCtrl.navigateRoot('/tab-home');
    alert("Cadastro Realizado");
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  segmentChanged($event) {
  }
}