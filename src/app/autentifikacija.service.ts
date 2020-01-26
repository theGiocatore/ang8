import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  token:string;

  signin(email:string, pass:string){
    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(
      (response) => console.log(response)
    )
    .catch(
      (err) => console.log(err)
    )
  }
  login(email:string, pass:string){
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(
      (response) => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
        console.log(response);
      }
    )
    .catch(
      (err) => console.log(err)
    )
    }
  
    vratiToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
          (token:string) => this.token = token
        )
        return this.token;
    }

  constructor() { }
}
