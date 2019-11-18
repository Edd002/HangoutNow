import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor(public firestore: AngularFirestore) {
  }

  registerUser(credentials: any): Promise<void> {
    let userFirebase: User = {
      id: this.firestore.createId(),
      userName: credentials.user,
      userPassword: credentials.password,
      userEmail: credentials.email,
      userCellphone: credentials.cellphone,
      userGender: credentials.gender,
      userProfilePath: null,
      userListAlreadyContacted: null,
      userTime: 0,
      userDate: new Date().toISOString()
    }

    this.setFirebaseUser(userFirebase);
    return this.firestore.doc(`userProfile/${userFirebase.id}`).set(Object.assign({}, userFirebase));
  }

  loadUser(userEmail: string) {
    let userFirestore: AngularFirestoreCollection<User>;
    userFirestore = this.firestore.collection<User>('userProfile', ref => ref.where('userEmail', '==', userEmail));

    userFirestore.valueChanges().subscribe(
      object => {
        object.forEach(userFirebase => this.setFirebaseUser(userFirebase))
      }
    );
  }

  setFirebaseUser(userFirebase: User) {
    this.user = {
      id: userFirebase.id,
      userName: userFirebase.userName,
      userPassword: userFirebase.userPassword,
      userEmail: userFirebase.userEmail,
      userCellphone: userFirebase.userCellphone,
      userGender: userFirebase.userGender,
      userProfilePath: userFirebase.userProfilePath,
      userListAlreadyContacted: userFirebase.userListAlreadyContacted,
      userTime: userFirebase.userTime,
      userDate: userFirebase.userDate
    }
  }
}