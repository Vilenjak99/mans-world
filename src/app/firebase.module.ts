import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'

const config = {apiKey: "AIzaSyBkhhVgSghlzlfAqViZ6900dZg-qeJ0dlk",
authDomain: "mansworld-f162d.firebaseapp.com",
projectId: "mansworld-f162d",
storageBucket: "mansworld-f162d.appspot.com",
messagingSenderId: "779429107531",
appId: "1:779429107531:web:65a290a01bece4bf1a7ace",
measurementId: "G-PX5NWCZE3Y"}

@NgModule({
    imports:[
        AngularFireModule.initializeApp( config),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    exports:[
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireAuthModule
    ]
})

export class FireBaseModule{}