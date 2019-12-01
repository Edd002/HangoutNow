import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalMeusEncontrosComponent } from '../modal-meus-encontros/modal-meus-encontros.component';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab-meus-encontros',
  templateUrl: './tab-meus-encontros.page.html',
  styleUrls: ['./tab-meus-encontros.page.scss'],
})
export class TabMeusEncontrosPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;

  nomeEncontro: any= null;
  horaEncontro: any = null;
  diaEncontro: any = null;
  detalhesEncontro: any = null;
  privadoEncontro: boolean = null;

  constructor(private modalController: ModalController, public db: AngularFirestore,  private alertController: AlertController) { }

  ngOnInit() {
    this.items = [
      { title: 'Meu Encontro 1', description: 'Meu Primeiro Encontro Utilizando no HangoutNow' },
      { title: 'Meu Encontro 2', description: 'Meu Segundo Encontro Utilizando no HangoutNow' },
      { title: 'Meu Encontro 3', description: 'Meu Terceiro Encontro Utilizando no HangoutNow' }
    ];
  }

  addItem() {
    this.listScreen = false;
    this.addItemScreen = true;
  }

  salvarEnconroFirestore() {
    const id: string = this.db.createId();
    let encontro = {
      "nome": this.nomeEncontro,
      "hora": this.horaEncontro,
      "dia": this.diaEncontro,
      "detalhes": this.detalhesEncontro,
      "private": this.privadoEncontro
    }

    this.db.collection('encontro').doc(id).set(encontro).then(res => this.modalSucesso());
  }

  async modalSucesso () {
    const alert = await this.alertController.create({
      header: 'Encontro Salvo',
      subHeader: '',
      message: 'Encontro registrado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  saveNewItem() {
    this.salvarEnconroFirestore();
    this.items.push({ title: this.nomeEncontro, description: this.detalhesEncontro });
    //return to normal screens
    this.listScreen = true;
    this.addItemScreen = false;
  }

  cancelNewItem() {
    this.listScreen = true;
    this.addItemScreen = false;
  }

  async openModal(item) {
    const modal = await this.modalController.create({
      component: ModalMeusEncontrosComponent,
      componentProps: {
        data: item.description
      }
    })
    await modal.present();
  }

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {
    this.openModal(item);
  }
}