import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from './../../auth-service/auth-service.service';
import { ChatService } from './../../chat-service/chat.service';
import { Chat } from './../../chat-service/chat.model';
import { ModalChatComponent } from './../modal-chat/modal-chat.component';

@Component({
  selector: 'app-tab-conversar-amigos',
  templateUrl: './tab-conversar-amigos.page.html',
  styleUrls: ['./tab-conversar-amigos.page.scss'],
})
export class TabConversarAmigosPage implements OnInit {

  public chatRooms: any = [];

  constructor(
    private navCtrl: NavController,
    private authService: AuthService, 
    private chatService: ChatService,
    private modal: ModalController
    )
    { }

  ngOnInit() {
    this.chatService.getChatRooms().subscribe(chats => {
      this.chatRooms = chats;
    })
  }

  openChatRoom(chat: any) {
    this.modal.create({
      component: ModalChatComponent,
      componentProps: {
        name: chat.name
      }
    }).then( (modal) => modal.present());

    //this.navCtrl.navigateForward('/chat');
  }
}