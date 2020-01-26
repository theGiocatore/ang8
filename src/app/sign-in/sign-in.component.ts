import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms'
import { AutentifikacijaService } from '../autentifikacija.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  openNav(){
    document.getElementById("myNav").style.height = "100%";
  }
  constructor(private location:Location , private autentifikacijaService:AutentifikacijaService ) { }

  
  
  ngOnInit() {
    this.openNav();
  }

  registrujSe(form:NgForm){
    
    const email = form.value.email;
    const pass = form.value.pass;
    this.autentifikacijaService.signin(email,pass);
  }
  

  }

