import { Injectable } from "@angular/core";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Chat } from "./chat.model";
import { map } from "rxjs/operators";
import { firestore } from 'firebase';

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

  /*
  sendMsgFirebase(message: message, chatId: string) {
    this.db.collection('chatRooms').doc(chatId).update({
      messages: firestore.FieldValue.arrayUnion(message)
    })
  }
  */
}