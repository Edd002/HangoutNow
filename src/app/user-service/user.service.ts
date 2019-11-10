import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor(public firestore: AngularFirestore) {
  }

  registerUser(user: User): Promise<void> {
    this.user = user;

    let id = this.firestore.createId();
    let userFirestore = {
      "id": id,
      "userName": user.userName,
      "userPassword": user.userPassword, 
      "userEmail": user.userEmail,
      "userCellphone": user.userCellphone,
      "userGender": user.userGender,
      "date": new Date().toISOString()
    }

    return this.firestore.doc(`userProfile/${id}`).set(userFirestore);
  }

  loadUser(userEmail: string) {
    // Buscar usuário do banco e carregar na variável do serviço

    let userFirestore: any;
    userFirestore = this.firestore.collection<any>('userProfile', ref => ref.where('userEmail', '==', userEmail));

    console.log(userFirestore.ref);
  }
}