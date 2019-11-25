import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-encontros-disponiveis',
  templateUrl: './modal-encontros-disponiveis.component.html',
  styleUrls: ['./modal-encontros-disponiveis.component.scss'],
})
export class ModalEncontrosDisponiveisComponent implements OnInit {

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

  async confirmarParticipacao() {
    const alert = await this.alertController.create({
      header: 'Encontros Disponíveis',
      subHeader: '',
      message: 'Participação confirmada.',
      buttons: ['OK']
    });
    await alert.present();
    this.close();
  }
}