import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ModalChatComponent } from './../modal-chat/modal-chat.component';

@Component({
  selector: 'app-modal-encontros-confirmados',
  templateUrl: './modal-encontros-confirmados.component.html',
  styleUrls: ['./modal-encontros-confirmados.component.scss'],
})
export class ModalEncontrosConfirmadosComponent implements OnInit {

  @Input() data: any;

  constructor(private modalController: ModalController, private navCtrl: NavController, private alertController: AlertController) { }

  async close() {
    await this.modalController.dismiss();
  }

  ngOnInit() { }

  openChatRoom() {
    /*
    this.modalController.dismiss();
    this.modalController.create({
      component: ModalChatComponent,
      componentProps: {
        chat: null
      }
    }).then( (modal) => modal.present());
    */
    //this.navCtrl.navigateForward('/chat');
  }

  async cancelarParticipacao() {
    const alert = await this.alertController.create({
      header: 'Encontros Confirmados',
      subHeader: '',
      message: 'Participação cancelada.',
      buttons: ['OK']
    });
    await alert.present();
    this.close();
  }
}