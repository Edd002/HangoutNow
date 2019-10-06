import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-conversar-amigos',
  templateUrl: './tab-conversar-amigos.page.html',
  styleUrls: ['./tab-conversar-amigos.page.scss'],
})
export class TabConversarAmigosPage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  openChatRoom() {
    this.navCtrl.navigateForward('/chat');
  }
}