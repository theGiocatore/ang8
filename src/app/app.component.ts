import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MojProjekat';

  ngOnInit(){
    firebase.initializeApp({
      apiKey:"AIzaSyBVpk2tW91DWA7mw3nMXrGx-rEZxSCFhW8",
      authDomain:"angularshopwebsite.firebaseapp.com"
    });
  }
}
