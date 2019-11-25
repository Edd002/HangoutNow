import { Injectable } from '@angular/core';

import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;
  public userProfile: User;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  get getUser() {
    return this.user;
  }

  get authenticated(): boolean { return this.user !== null && this.user !== undefined; }

  signInWithEmail(credentials: any): any {
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then (
      res => this.loadUserProfileByEmail(res.user.email)
    );
  }

  signUp(credentials: any): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password
      ).then( res => {
        const uid: string = res.user.uid;;
        this.db.collection('userProfile').doc(uid).set({
          uid: uid,
          name: credentials.name,
          password: credentials.password,
          email: credentials.email,
          cellphone: credentials.cellphone,
          gender: credentials.gender,
          imagePathProfile: null,
          date: new Date().toISOString()
        })
        this.loadUserProfileByEmail(res.user.email);
      });
  }

  loadUserProfileByEmail(email: string) {
    const userFirestore: AngularFirestoreCollection<User> = this.db.collection<User>('userProfile', ref => ref.where('email', '==', email));;
    userFirestore.valueChanges().subscribe(
      object => {
        object.forEach(userFirestore => {
          this.userProfile = {
            uid: userFirestore.uid,
            name: userFirestore.name,
            password: userFirestore.password,
            email: userFirestore.email,
            cellphone: userFirestore.cellphone,
            gender: userFirestore.gender,
            imagePathProfile: userFirestore.imagePathProfile,
            date: userFirestore.date
          }
        })
      });
  }

  getEmail(): any {
    return this.user && this.user.email;
  }

  signOut(): Promise<void> {
    this.userProfile = null;
    return this.afAuth.auth.signOut();
  }
}