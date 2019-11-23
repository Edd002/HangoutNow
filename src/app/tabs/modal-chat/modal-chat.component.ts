import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss'],
})
export class ModalChatComponent implements OnInit {

  // https://youtu.be/GFuxpbZpnww?t=389

  public name: string;

  public mensagens = [];
  public msg: string;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.name = this.navParams.get('name');
  }

  async close() {
    await this.modalController.dismiss();
  }

  sendMessage() {
    this.mensagens.push(this.msg);
    this.msg = "";
  }

  closeKeyboard() { }
}