import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  openNav(){
    document.getElementById("myNav").style.height = "100%";
  }
  constructor(private location:Location) { }

  
  
  ngOnInit() {
    this.openNav();
  }

  }

