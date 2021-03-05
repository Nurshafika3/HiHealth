import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable ({
    providedIn:'root'
})

export class AuthenticateService{

    constructor(
        public ngFireAuth:AngularFireAuth,
        public router: Router
    ){}

    regUser(email,password){
      return this.ngFireAuth.createUserWithEmailAndPassword(email,password);
    }

    signIn(email,password){
        return this.ngFireAuth.signInWithEmailAndPassword(email,password);
    }

    signOut(){
        return this.ngFireAuth.signOut().then(()=>{
            this.router.navigate(['login']);
        })
    }   
}
@Injectable ({
    providedIn:'root'
})
    export class DietService{
        collectionName = "Diet";
        constructor(
            public ngFirestore:AngularFirestore
        ){}
        
        createNote(id,note){
            return this.ngFirestore.collection(this.collectionName).doc(id).set(note);
        }
    
        readNote(){
            return this.ngFirestore.collection(this.collectionName).snapshotChanges();
        }
    
        updateNote(id,note){
            this.ngFirestore.doc(this.collectionName+'/'+id).update(note);
        }
    
        deleteNote(id){
            this.ngFirestore.doc(this.collectionName+'/'+id).delete();
        }
    
    }
