import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Message } from "../../chat-service/message.model";
import { ChatService } from "../../chat-service/chat.service";
import { AuthService } from 'src/app/auth-service/auth-service.service';
import { User } from 'src/app/auth-service/user.model';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss'],
})
export class ModalChatComponent implements OnInit {

  public chat: any;
  public message: Message;

  public mensagens = [];
  public room: any;
  public msg: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private chatService: ChatService,
    private authService: AuthService) { }

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
    let userMessage: User = null;
    if (this.authService.userProfile !== null && this.authService.userProfile !== undefined) {
      userMessage = this.authService.userProfile;
    } else {
      userMessage = {
        uid: "0",
        name: "Anonymous",
        password: null,
        email: null,
        cellphone: null,
        gender: null,
        imagePathProfile: null,
        date: new Date().toString()
      }
    }

    const message: Message = {
      user: userMessage,
      content: this.msg,
      type: 'text',
      date: new Date()
    }

    this.chatService.sendMsgToFirebase(message, this.chat.id);
    this.msg = "";
  }

  closeKeyboard() { }
}