import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private location:Location) { }
  openNav(){
      document.getElementById("myNav").style.height = "100%";
    }
    
  closeNav() {
      this.location.back();
    }
  
  ngOnInit() {
    this.openNav();
  }

}
