import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';
import { AutentifikacijaService } from '../autentifikacija.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private location:Location, private autentifikacijaService: AutentifikacijaService) { }
  openNav(){
      document.getElementById("myNav").style.height = "100%";
    }
    
  
  ngOnInit() {
    this.openNav();
  }

  ulogujSe(form:NgForm){
    const email = form.value.email;
    const pass = form.value.pass;
    this.autentifikacijaService.login(email, pass);
  }

}
