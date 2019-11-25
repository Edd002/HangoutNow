import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Message } from "../../chat-service/message.model";
import { ChatService } from "../../chat-service/chat.service";

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss'],
})
export class ModalChatComponent implements OnInit {

  // https://www.youtube.com/watch?v=ikMrTQvw8MQ

  public chat: any;
  public message: Message;

  public mensagens = [];

  public room: any;

  public msg: string;

  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getChatRoom(this.chat.id).subscribe(
      room => {
        //console.log(room);
        this.room = room;
      });

    this.chat = this.navParams.get('chat');
  }

  async close() {
    await this.modalController.dismiss();
  }

  sendMessage() {
    const message: Message = {
      content: this.msg,
      type: 'text',
      date: new Date()
    }

    this.chatService.sendMsgToFirebase(message, this.chat.id);
    this.msg = "";
  }

  closeKeyboard() { }
}