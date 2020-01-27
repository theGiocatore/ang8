import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService{

  token:string;

  signin(email:string, pass:string){
    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(
      (response) => {
        this.router.navigate(['/home']);
        alert("Uspesno ste kreirali Vas nalog!")
      
    }
    )
    .catch(
      (err) => console.log(err)
    )
  }

  login(email:string, pass:string){
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(
      (response) => {
        this.router.navigate(['/home']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
        alert("Uspesno ste se ulogovali!");
      }
    )
    .catch(
      (err) => alert(err)
    )
    }
  
    vratiToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
          (token:string) => this.token = token
        )
        return this.token;
    }
    prijavljen(){                       /* prati da li je korisnik prijavljen ili ne */
      return this.token != null;
    }

  constructor(private router:Router) { }
}
