import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-meus-encontros',
  templateUrl: './modal-meus-encontros.component.html',
  styleUrls: ['./modal-meus-encontros.component.scss'],
})
export class ModalMeusEncontrosComponent implements OnInit {

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

  async cancelarEncontro() {
    const alert = await this.alertController.create({
      header: 'Meus Encontros',
      subHeader: '',
      message: 'Encontro cancelado.',
      buttons: ['OK']
    });
    await alert.present();
    this.close();
  }
}
