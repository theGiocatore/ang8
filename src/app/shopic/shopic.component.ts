import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shopic',
  templateUrl: './shopic.component.html',
  styleUrls: ['./shopic.component.css']
})


export class ShopicComponent implements OnInit {
  
  private varijabla:Item[];

  constructor(private servis: ShopService) { 
   

}


  ngOnInit() {

    this.servis.getAll().subscribe(data=>{
      this.varijabla = data;
      
    })
  }
}


