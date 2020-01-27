import { Component, OnInit } from '@angular/core';
import { AutentifikacijaService } from '../autentifikacija.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private service:AutentifikacijaService) { }     /*pozvao sam servis za autentifikaciju da bih menjao ikonicu u zavisnosti od logovanja*/
   
    


  ngOnInit() {
  }

}
