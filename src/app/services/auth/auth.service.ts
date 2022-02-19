import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import {User} from './user.model';
import {Product} from '../products/product.model';
import { switchMap, toArray } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  users$ : Observable<any[]>;
  uidFilter$: BehaviorSubject<string|null>;
  usernameFilter$: BehaviorSubject<string|null>;
  emailFilter$: BehaviorSubject<string|null>;
  surnameFilter$: BehaviorSubject<string|null>;
  lastnameFilter$: BehaviorSubject<string|null>;
  photoURLFilter$:BehaviorSubject<string|null>;
  emailVerifiedFilter$:BehaviorSubject<boolean|null>;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 

    this.uidFilter$ = new BehaviorSubject(null);
    this.usernameFilter$ = new BehaviorSubject(null);
    this.emailFilter$= new BehaviorSubject(null);
    this.surnameFilter$= new BehaviorSubject(null);
    this.lastnameFilter$= new BehaviorSubject(null);
    this.photoURLFilter$= new BehaviorSubject(null);
    this.emailVerifiedFilter$= new BehaviorSubject(null);
    
    this.users$ = combineLatest(
      [this.uidFilter$,this.usernameFilter$,this.emailFilter$,this.surnameFilter$,this.lastnameFilter$,this.photoURLFilter$,this.emailVerifiedFilter$]
    ).pipe(
      switchMap(([uid, username, email, surname, lastname, photoURL, emailVerified]) => 
        afs.collection('users', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          //.where("regions", "array-contains", "west_coast"); pomocu 'array-contains' mozes da prikazujes na osnovu kljucnih reci
          if (uid) { query = query.where('uid', '==', uid) };
          if (username) { query = query.where('username', '==', username) };
          if (email) { query = query.where('email', '==', email) };
          if (surname) { query = query.where('surname', '==', surname) };
          if (lastname) { query = query.where('lastname', '==', lastname) };
          if (photoURL) { query = query.where('photoURL', '==', photoURL) };
          if (emailVerified) { query = query.where('emailVerified', '==', emailVerified) };
          return query;
        }).valueChanges()
      ),
    );
    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (!!user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    })

    
       
  }

  getUsers(){
    return this.users$;
  }
  
  filterByUid(uid: string|null) {
      this.uidFilter$.next(uid); 
  }
  filterByUsername(username: string|null) {
      this.usernameFilter$.next(username); 
  }
  filterByEmail(email: string|null) {
      this.emailFilter$.next(email); 
  }
  filterByLastname(lastname: string|null) {
      this.lastnameFilter$.next(lastname); 
  }
  filterBySurname(surname: string|null) {
      this.surnameFilter$.next(surname); 
  }
  filterByPhotoURL(photoURL: string|null) {
      this.photoURLFilter$.next(photoURL); 
  }
  filterByEmailVerified(emailVerified: boolean|null) {
      this.emailVerifiedFilter$.next(emailVerified); 
  }
  resetFilters(){
 
  }

  

  // Sign in with email/password
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Register with email/password
  register(user:User, psw:string) {    
    this.afAuth.createUserWithEmailAndPassword(user.email, psw).then((result) => {
      user.uid = result.user.uid;
      console.log(user)
      this.setUserData(user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }


  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification()).then(() => {
      window.alert('Verification email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    });
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null /*&& user.emailVerified !== false*/) ? true : false;
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

 
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  
  setUserData(user) {
    let userData: User = {
      uid: user.username,
      username: user.username,
      email: user.email,
      surname: user.surname,
      lastname: user.lastname,
      photoURL: user.photoURL || "",
      emailVerified: user.emailVerified || false
    }
    return this.afs.doc(`users/${user.uid}`).set(userData, {
      merge: true
    })
  }

  // Sign out 
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    })
  }

}

