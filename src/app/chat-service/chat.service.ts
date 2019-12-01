import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Chat } from "./chat.model";
import { map } from "rxjs/operators";
//import { firestore } from 'firebase';
import { Message } from './message.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public db: AngularFirestore) {
  }

  getChatRooms() {
    return this.db.collection('chatRooms').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getChatRoom(chatId: string) {
    return this.db.collection('chatRooms').doc(chatId).valueChanges();
  }

  sendMsgToFirebase(message: Message, chatId: string) {
    this.db.collection('chatRooms').doc(chatId).update({
      messages: firebase.firestore.FieldValue.arrayUnion(message)
      // messages: firestore.FieldValue.arrayUnion(message)
    });
  }
}