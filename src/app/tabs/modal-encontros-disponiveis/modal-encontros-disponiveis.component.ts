import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-encontros-disponiveis',
  templateUrl: './modal-encontros-disponiveis.component.html',
  styleUrls: ['./modal-encontros-disponiveis.component.scss'],
})
export class ModalEncontrosDisponiveisComponent implements OnInit {

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
