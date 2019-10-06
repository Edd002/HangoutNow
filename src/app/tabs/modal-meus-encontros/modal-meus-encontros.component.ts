import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-meus-encontros',
  templateUrl: './modal-meus-encontros.component.html',
  styleUrls: ['./modal-meus-encontros.component.scss'],
})
export class ModalMeusEncontrosComponent implements OnInit {

  @Input() data: any;

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  async close() {
    await this.modalController.dismiss();
  }

  ngOnInit() { }

  openChatRoom() {
    this.navCtrl.navigateForward('/chat');
    this.modalController.dismiss();
  }
}
