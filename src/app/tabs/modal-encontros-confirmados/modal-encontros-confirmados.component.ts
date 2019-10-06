import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-encontros-confirmados',
  templateUrl: './modal-encontros-confirmados.component.html',
  styleUrls: ['./modal-encontros-confirmados.component.scss'],
})
export class ModalEncontrosConfirmadosComponent implements OnInit {

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
