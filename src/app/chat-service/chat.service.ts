import { Injectable } from "@angular/core";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Chat } from "./chat.model";
import { firebaseConfig } from "../../config";
import { ToastController } from '@ionic/angular';
//import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";
import { AuthService } from "../auth-service/auth-service.service";
import { User } from '../user-service/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  /*
  users: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  chats: AngularFirestoreCollection<Chat>;
  private chatDoc: AngularFirestoreDocument<Chat>;

  //The pair string for the two users currently chatting
  currentChatPairId: any;
  currentChatPartner: any;

  //Lista dos contatos realizados e conversas não lidas
  partnerListUnread = [];

  constructor(public authProvider: AuthService, private db: AngularFirestore, public storage: Storage, public toastCtrl: ToastController) {
    //Get the tasks collecction
    this.users = db.collection<User>(firebaseConfig.users_endpoint); //users_endpoint: "users"
    this.chats = db.collection<Chat>(firebaseConfig.chats_endpoint); //chats_endpoint: "chats"

    this.chats.stateChanges().subscribe(chat => {
      if (chat.length > 0) {
        console.log(chat[0].payload.doc.data());
      }
    });

    if (this.authProvider.getUser != null) {
      this.getListUnReads();
    } else {
      setTimeout(() => {
        this.getListUnReads();
      }, 2000);
    }
  }

  createIdFirestore() {
    return this.db.createId();
  }

  addUser(payload) {
    // return this.users.add(payload);
    return this.users.doc<User>(`${payload.email}`).set(payload);
  } //addUser

  addChat(chat: Chat) {
    // return this.chats.add(chat);
    return this.chats.doc<Chat>(`${chat.id}`).set(chat);
  } //addChat

  createPairId(user1: any, user2: any) {
    let user1Email = user1.email;
    let user2Email = user2.email;
    let pairId;
    if (user1Email.localeCompare(user2Email) < 0) {
      pairId = `${user1Email}|${user2Email}`;
    } else {
      pairId = `${user2Email}|${user1Email}`;
    }

    return pairId;
  } //createPairString

  getListUnReads() {
    if (this.authProvider.getUser != null)
      this.db.collection<Chat>(firebaseConfig.chats_endpoint, ref => ref.where('chatReceived', "==", this.authProvider.getEmail()).where('chatViewPending', '==', true)).valueChanges().subscribe(
        elem => {
          console.log(elem);
          this.partnerListUnread = elem;
        }
      )
  }

  readAllMessages(user: any) {
    //--create batch-- 
    var batch = this.db.firestore.batch();

    let list = this.partnerListUnread.filter(elem => { return elem.sender == user.email })

    for (const item of list) {
      //--create a reference-- 
      const userRef = this.db.collection<Chat>(firebaseConfig.chats_endpoint).doc(item.id).ref;
      batch.update(userRef, {
        viewPending: false
      });
    }

    //--finally--
    return batch.commit();
  }

  public loadChatUser(user: any) {
    //console.log('usuario: ' + JSON.stringify(user));
    this.db
      .collection<User>(firebaseConfig.users_endpoint, ref => {
        return ref.where("userEmail", "==", user.email);
      })
      .valueChanges()
      .subscribe(users => {
        console.log(users);

        if (users.length === 0) {
          //Register User
          let newUser = {
            email: user.email,
            name: user.name,
            time: new Date().getTime(),
            profilePath: user.avatar,
            listAlreadyContacted: []
          };

          this.addUser(newUser)
            .then(res => {
              //Registration successful, go to chats page
              this.storage.set("chatuser", newUser);

              let toast = this.toastCtrl.create({
                message: "Chat criado!",
                duration: 3000,
                position: "top"
              });
              //toast.present();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          //User already exists, move to chats page
          this.storage.set("chatuser", users[0]);

          let toast = this.toastCtrl.create({
            message: "Chat carregado",
            duration: 3000,
            position: "top"
          });
          //toast.present();
        }
      });
  }

  connectUsersToChat(user: any) {
    //Adicionar no outro usuário
    this.addListAlreadyContacted(user.email, this.authProvider.getUser.email).subscribe(
      elem => {
        console.log("Adicionado com sucesso: " + JSON.stringify(elem));
        let toast = this.toastCtrl.create({
          message: "Adicionado com sucesso!",
          duration: 3000,
          position: "top"
        });
        //toast.present();
      },
      err => {
        //Se ainda não tiver cadastrado, irá cadastrar nos usuários do firebase e depois adicionar na lista de contatos
        let newUser = {
          email: user.email,
          name: user.fakeName,
          time: new Date().getTime(),
          profilePath: user.avatar,
          listAlreadyContacted: []
        };
        this.addUser(newUser).then(res => {
          console.log("Usuário Adicionado no firebase: " + JSON.stringify(res));
          this.addListAlreadyContacted(user.email, this.authProvider.getUser.email).subscribe(
            () => {
              let toast = this.toastCtrl.create({
                message: "Adicionado com sucesso!",
                duration: 3000,
                position: "top"
              });
              //toast.present();
            }
          ).closed;
        })
          .catch(err => {
            console.log(err);
          });
      }
    )

    //Adicionar o usuário atual 
    this.addListAlreadyContacted(this.authProvider.getUser.email, user.email).subscribe(
      elem => {
        console.log("Adicionado com sucesso: " + JSON.stringify(elem));
      },
      err => {
        console.log('Usuário atual não cadastrado no firebase');
        let toast = this.toastCtrl.create({
          message: "Erro ao cadastrar o usuário no chat!",
          duration: 3000,
          position: "top"
        });
        //toast.present();
      }
    )
  }

  addListAlreadyContacted(userEmailSelected: string, userEmailToAdd: string): Observable<boolean> {
    return Observable.create((observer) => {
      const userPairDocRef = this.db.collection<User>(firebaseConfig.users_endpoint).doc(userEmailSelected);
      userPairDocRef.get().subscribe(function (doc) {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          let u = doc.data();
          u['listAlreadyContacted'].push(userEmailToAdd);
          userPairDocRef.update(u);
          observer.next()
          observer.complete();
        } else {
          // doc.data() will be undefined in this case

          //Caso o usuário não esteja cadastrado no firestore, chamar o cadastro
          console.log("Usuário não cadastrado!");
          observer.error()
        }
      })
    });
  }
  */
}