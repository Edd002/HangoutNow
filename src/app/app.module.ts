import { ModalEncontrosDisponiveisComponent } from './tabs/modal-encontros-disponiveis/modal-encontros-disponiveis.component';
import { ModalEncontrosConfirmadosComponent } from './tabs/modal-encontros-confirmados/modal-encontros-confirmados.component';
import { ModalMeusEncontrosComponent } from './tabs/modal-meus-encontros/modal-meus-encontros.component';
import { ModalChatComponent } from './tabs/modal-chat/modal-chat.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppService } from './app.service';
import { AuthService } from './auth-service/auth-service.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalEncontrosDisponiveisComponent,
    ModalEncontrosConfirmadosComponent,
    ModalMeusEncontrosComponent,
    ModalChatComponent
  ],
  entryComponents: [
    ModalEncontrosDisponiveisComponent,
    ModalEncontrosConfirmadosComponent,
    ModalMeusEncontrosComponent,
    ModalChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AngularFireAuth,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }